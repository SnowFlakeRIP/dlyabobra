<template>
  <div>
    <template>
      <v-form
          ref="form"
          v-model="valid"
          lazy-validation
      >
        <v-text-field
            v-model="name"
            :counter="20"
            :rules="nameRules"
            label="Имя"
            required
        ></v-text-field>

        <v-text-field
            v-model="number"
            :rules="numberRules"
            label="Номер телефона"

            required
        ></v-text-field>
        <v-text-field
            v-model="email"
            :rules="emailRules"
            label="Email"

            required
        ></v-text-field>
        <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || 'Вы должны дать согласие']"
            label="Согласие на обработку персональных данных"
            required
        ></v-checkbox>

        <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="sendMessage"

        >Подтвердить
        </v-btn>
        <v-btn
            color="warning"
            @click="resetValidation"
        >
          Сбросить валидацию
        </v-btn>
      </v-form>
    </template>
  </div>
</template>

<script>
const nameControl = /^[a-zA-Zа-яА-Я ]{2,30}$/
const countControl = /^\s*[+-]?(\d+|\.\d+|\d+\.\d+|\d+\.)(e[+-]?\d+)?\s*$/
const emailControl = /.+@.+/
export default {
  name: "Form",
  data: () => ({
    snackbar:false,
    dialog: false,
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Поле "Имя" является обязательным',
      v => (v && v.length <= 20) || 'Имя должно быть короче 20 символов"',
      v => nameControl.test(v) === true || 'Имя не должно содержать цифры'
    ],
    number: '',
    numberRules: [
      v => !!v || 'Поле "Телефон" является обязательным',
      v => countControl.test(v) === true || 'Телефон не должен содержать буквы'
    ],
    email: '',
    emailRules: [
      v => !!v || 'Поле "email" является обязательным',
      v => emailControl.test(v) === true || 'Неверный формат email'
    ],
    checkbox: false,
  }),

  methods: {
    validate() {
      this.$refs.form.validate()
    },
    // eslint-disable-next-line no-unused-vars
    async sendMessage() {
      await this.validate()
      if (this.valid === true) {
        this.$emit('accept2', this.name, this.email, this.number)
        this.snackbar=true

        this.$emit('snack')
      }
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    }
    ,

  }
}
</script>

<style scoped>

</style>