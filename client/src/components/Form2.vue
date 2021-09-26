<template>
  <div class="text-center">
    <v-dialog
        v-model="dialog"
        width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            class="button"
            elevation="8"
            plain
            x-large
            color=#00BCD4
            v-bind="attrs"
            v-on="on"
        >
          Регистрация
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Регистрация
        </v-card-title>
        <v-card-text>
          <div>
<!--            <input v-model="name" class="input-text" type="text" placeholder="Имя">-->
<!--            <br>-->
<!--            <input v-model="email" class="input-text" type="text" placeholder="E-mail">-->
<!--            <br>-->
<!--            <input v-model="number" class="input-text" type="text" placeholder="Телефон">-->
            <Form  v-bind:dialog="dialog" @accept2="accept" @snack="sendsnack"/>
          </div>

        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Form from "./Form";

export default {
  name: "Form2",
  data() {
    return {
      dialog: null,
      name: '',
      email: '',
      number: ''
    }
  },
  components:{
    Form
  },
  methods: {
    accept(name,email,number) {
      this.dialog = this.dialog2
      console.log('Accept')
      this.$emit('accept',name,email,number)
    },
    sendsnack() {
      this.$emit('snack')
      console.log('ad123123')
    }
  },
  props:['dialog2']
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