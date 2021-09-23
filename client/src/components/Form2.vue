<template>
  <div class="text-center">
    <v-dialog
        v-model="dialog"
        width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            color="red lighten-2"
            dark
            v-bind="attrs"
            v-on="on"
        >
          Click Me
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Регистрация
        </v-card-title>
        <v-card-text>
          <div>
            <input v-model="name" class="input-text" type="text" placeholder="Имя">
            <br>
            <input v-model="email" class="input-text" type="text" placeholder="E-mail">
            <br>
            <input v-model="number" class="input-text" type="text" placeholder="Телефон">
          </div>

        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="primary"
              text
              @click="accept"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "Form2",
  data() {
    return {
      dialog: false,
      name: '',
      email: '',
      number: ''
    }
  },
  methods: {
    accept() {
      this.dialog = false
      console.log('Accept')
      console.log(this.email)
    }
  }
}
</script>

<style scoped>
.input-text {
  border: solid black 1px;
  margin-top: 10px;
  display: block;
  min-width: 450px;

}
</style>