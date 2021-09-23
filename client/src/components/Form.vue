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

        <v-select
            v-model="select"
            :items="items"
            :rules="[v => !!v || 'Item is required']"
            label="Item"
            required
        ></v-select>

        <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || 'You must agree to continue!']"
            label="Do you agree?"
            required
        ></v-checkbox>

        <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
        >
          Validate
        </v-btn>

        <v-btn
            color="error"
            class="mr-4"
            @click="reset"
        >
          Reset Form
        </v-btn>

        <v-btn
            color="warning"
            @click="resetValidation"
        >
          Reset Validation
        </v-btn>
      </v-form>
    </template>
  </div>
</template>

<script>
const nameControl = /^[a-zA-Zа-яА-Я ]{2,30}$/
//const countControl = /^\s*[+-]?(\d+|\.\d+|\d+\.\d+|\d+\.)(e[+-]?\d+)?\s*$/

export default {
  name: "Form",
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Поле "Имя" является обязательным',
      v => (v && v.length <= 20) || 'Имя должно быть короче 20 символов"',
      // || 'Имя не должно состоять из цифр'
    ],
    number: '',
    numberRules: [
      v => !!v || 'E-mail is required',
      v => typeof (v) === 'string' || 'E-mail must be valid',
    ],
    select: null,
    items: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
    ],
    checkbox: false,
  }),

  methods: {
    validate() {
      this.$refs.form.validate()
      let isValidName = nameControl.test(this.name)
      if(!isValidName){
        console.log('Errror')
      }
      console.log(this.name)
      console.log(this.email)
      console.log(this.select)
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },

  },

}
</script>

<style scoped>

</style>