<template>
  <v-app>
    <v-container>
      <NavBar

      />

    </v-container>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar";
// function time(){
//   let strTimer
//   let timeMinute = 300
//   let timer = setInterval(function (){
//     let seconds = timeMinute % 60
//     let minutes = timeMinute / 60 % 60
//     let hours = timeMinute / 60 / 60 % 60
//     if(timeMinute<=0){
//       clearInterval(timer)
//     }else{
//       strTimer = `${Math.trunc(hours)}:${Math.trunc(minutes)}:${Math.trunc(seconds)} gggg`
//     }
//     --timeMinute
//     console.log(strTimer)
//   },1000)
// }


export default {
  name: 'App',

  components: {
    NavBar
  },

  data: () => ({

  }),
};
</script>
