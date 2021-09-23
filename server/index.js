const fastify = require('fastify')({
    logger: true
})
const TelegramBot = require('node-telegram-bot-api');
const chatId = 539715503;
const token = '2039075225:AAG0gnFmaTBjJKZRM0x-Aduta46QEr1lxyg';
const bot = new TelegramBot(token, {polling: true});
const Pool = require('pg-pool');
const nodemailer = require('nodemailer')
const fs = require('fs')
const config = {
    user: 'postgres',
    password: '12345678',
    host: '192.168.0.2',
    port: 5432,
    database: 'bober',
};
let file = fs.readFileSync('./index.html', {ecoding: 'utf-8'})

bot.onText(/\/sum/, (msg, match) => {
    pool.connect((err, client, release) => {
        if (err) {
            return console.error('Error acquiring client', err.stack)
        }
        client.query('select id from "users"', (err, result) => {
            release()
            if (err) {
                return console.error('Error executing query', err.stack)
            }
            let sum = result.rows.length
            msg = `Уже зарегистрировалось: ${sum}`
            const resp = msg
            bot.sendMessage(chatId, resp)


        })
    })
});
bot.onText(/\/love/, function onLoveText(msg) {
    const opts = {
        reply_to_message_id: msg.message_id,
        reply_markup: JSON.stringify({
            keyboard: [
                ['/sum']
            ]
        })
    };
    bot.sendMessage(msg.chat.id, 'Добавляем', opts);
});

fastify.register(require('fastify-cors'), {})
const pool = new Pool(config)
fastify.route({
    method: 'POST',
    url: '/register',
    schema: {
        body: {
            type: 'object',
            properties: {
                name: {
                    type: 'string',
                },
                email: {
                    type: 'string'
                },
                number: {
                    type: 'string'
                }
            },
            required: ['name', 'number']
        }
    },
    async handler(request, reply) {
        let user = null;
        let client = await pool.connect()
        try {
            user = await client.query(`insert into "users" (name, email, number)
                                       values ($1, $2, $3) RETURNING id`,
                [
                    request.body.name,
                    request.body.email,
                    request.body.number,
                ]
            );
            bot.sendMessage(chatId, ` 
            Регистрация пользователя:
            Имя: ${request.body.name},
            Почта: ${request.body.email},
            Телефон: ${request.body.number}`)

            let testEmailAccount = await nodemailer.createTestAccount()
            let transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    user: 'schmakov8@gmail.com',
                    pass: 'q20047878'
                }
            })
            await transporter.sendMail({
                from: '"Bober Entertainment" <schmakov8@gmail.com>',
                to: `${request.body.email}`,
                subject: 'Акция "Посади дерево -спаси бобра"',
                text: 'This message with attachments.',
                html: file,
            })
            reply.send({
                succes: true
            })
        } catch (e) {
            console.log(e)
        } finally {
            client.release()
        }
    },
});
fastify.get('/people', async function (request, reply) {
    let users = null;
    let sum = 0
    let client = await pool.connect()
    try {
        users = await client.query(`select id
                                    from "users"`)
        sum = users.rows.length
        console.log(sum)
        reply.send(users.rows)
    } catch (e) {
        console.log(e)
    } finally {
        client.release()
    }
})
fastify.route({
    method: 'POST',
    url: '/mail',
    schema: {
        body: {
            type: 'object',
            properties: {
                name: {
                    type: 'string',
                },
                email: {
                    type: 'string'
                },
            },
            required: ['name', 'email']
        }
    },
    async handler(request, response) {
       try{
           let testEmailAccount = await nodemailer.createTestAccount()
           let transporter = nodemailer.createTransport({
               host: 'smtp.gmail.com',
               port: 465,
               secure: true,
               auth: {
                   user: 'schmakov8@gmail.com',
                   pass: 'q20047878'
               }
           })
           await transporter.sendMail({
               from: '"Bober Entertainment" <schmakov8@gmail.com>',
               to: `${request.body.email}`,
               subject: 'Акция "Посади дерево -спаси бобра"',
               text: 'This message with attachments.',
               html: file,

           })
       }catch (e) {
           console.log(e)
       }
       response.send('Успешно')
    }
})
// fastify.get('/mail', async function (request, response) {
//     let testEmailAccount = await nodemailer.createTestAccount()
//     let transporter = nodemailer.createTransport({
//         host: 'smtp.gmail.com',
//         port: 465,
//         secure: true,
//         auth: {
//             user: 'schmakov8@gmail.com',
//             pass: 'q20047878'
//         }
//     })
//     await transporter.sendMail({
//         from: '"Node js" <schmakov8@gmail.com>',
//         to: '8schmakov8@gmail.com',
//         subject: 'test',
//         text: 'This message with attachments.',
//         html:
//         file,
//
//     })
//     response.send('Успешно отправлено')
// })

fastify.listen(3000, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    fastify.log.info(`server listening on ${address}`)
})