<template>
  <v-app class="content">
    <Content @snack="console.log('snack') , this.snackbar = true" @accept="console"/>
    <hr>
    <Slider @snack="this.snackbar = true" @accept="console"/>
    <hr>
    <Instruction/>
    <Community/>
    <SnackBar/>
    <v-snackbar
        v-model="snackbar"
    >
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn
            color="pink"
            text
            v-bind="attrs"
            @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script>
import Content from "./components/Content";
import Slider from "./components/Slider";
import Instruction from "./components/Instruction";
import Community from "./components/Community";
import SnackBar from "./components/SnackBar";

export default {
  name: 'App',
  components: {
    Content, Slider, Instruction, Community,SnackBar

  },
  data() {
    return {
      nameControl: /^[a-zA-Zа-яА-Я ]{2,30}$/,
      countControl: /^\s*[+-]?(\d+|\.\d+|\d+\.\d+|\d+\.)(e[+-]?\d+)?\s*$/,
      emailControl: /.+@.+/,
      snackbar: false,
      text: 'Текст'
    }
  },
  methods: {
    async console(name, email, number) {
      console.log(name)
      console.log(email)
      console.log(number)
      console.log(this.nameControl.test(name))
      console.log(this.emailControl.test(email))
      console.log(this.countControl.test(number))
      if (this.nameControl.test(name) === true && this.emailControl.test(email) === true && this.countControl.test(number) === true && number.length<=11) {
        let request = await this.axios.post('http://127.0.0.1:3000/register', {
          name: name,
          email: email,
          number: number
        })
        console.log(request.data)
      } else {
        //alert('Невалидные данные')
      }
    },
  }
};
</script>
<style>
.red{
  color: red;
}
</style>