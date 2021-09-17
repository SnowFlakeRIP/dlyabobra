const fastify = require('fastify')({
    logger: true
})
const TelegramBot = require('node-telegram-bot-api');
const chatId = 539715503;
// replace the value below with the Telegram token you receive from @BotFather
const token = '2029239676:AAEY6MONrGIh6Qg-zx1e8nzP3KuykQCQWno';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});
const Pool = require('pg-pool');
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
const config = {
    user: 'postgres',
    password: 'q20047878',
    host: 'localhost',
    port: 5432,
    database: 'bober',
};
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
                number: {
                    type: 'integer'
                }
            },
            required: ['name', 'number']
        }
    },
    async handler(request, reply) {
        let user = null;
        let client = await pool.connect()
        try {
            user = await client.query(`insert into "users" (name, number)
                                       values ($1, $2) RETURNING id`,
                [
                    request.body.name,
                    request.body.number,
                ]
            );
            bot.sendMessage(chatId, ` 
            Регистрация пользователя:
            Имя: ${request.body.name},
            Телефон: ${request.body.number}`)
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
//TODO вывести сумму людей, которые уже записались на мероприятие

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


fastify.listen(3000, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    fastify.log.info(`server listening on ${address}`)
})