<template>
  <v-app class="content">
    <Content @accept="console"/>
    <hr>
    <Slider @accept="console"/>
    <hr>
    <Instruction/>
    <Community/>
  </v-app>
</template>

<script>
import Content from "./components/Content";
import Slider from "./components/Slider";
import Instruction from "./components/Instruction";
import Community from "./components/Community";

export default {
  name: 'App',
  components: {
    Content, Slider, Instruction, Community

  },
  data() {
    return {
      nameControl: /^[a-zA-Zа-яА-Я ]{2,30}$/,
      countControl: /^\s*[+-]?(\d+|\.\d+|\d+\.\d+|\d+\.)(e[+-]?\d+)?\s*$/,
      emailControl: /.+@.+/
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
      if (this.nameControl.test(name) === true && this.emailControl.test(email) === true && this.countControl.test(number) === true) {
        let request = await this.axios.post('http://127.0.0.1:3000/register', {
          name: name,
          email: email,
          number: number
        })
        console.log(request.data)
      } else {
        alert('Невалидные данные')
      }

    }
  }
};
</script>
<style>


</style>