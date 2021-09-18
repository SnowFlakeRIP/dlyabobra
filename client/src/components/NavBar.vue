<template>
  <div>
    <v-container>
      <v-row style="background: #80CBC4">
        <v-col class="nav">
          <v-row>
            <v-col class="nav-text">
              <h4>
                Благотворительная акция
              </h4>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="nav-text">
              <h4>
                Посади дерево - не оставь бобра без дома
              </h4>
            </v-col>
          </v-row>
        </v-col>
        <v-col class="nav">
          <v-row>
            <v-col class="nav-text">
              <h4>
                Уже записалось 1000 человек!
                Нам не хватает только тебя!
              </h4>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-progress-linear
                  color="light-blue"
                  height="10"
                  value="59"
                  striped
              ></v-progress-linear>
            </v-col>
          </v-row>
        </v-col>
        <v-col class="nav">
          <v-row>
            <v-col>
             <h3 id="time">

             </h3>
            </v-col>
          </v-row>
          <v-row>

          </v-row>
        </v-col>

      </v-row>
    </v-container>
  </div>
</template>

<script>


function time(){
  let strTimer
  let timeMinute = 300
  let timer = setInterval(function (){
    let seconds = timeMinute % 60
    let minutes = timeMinute / 60 % 60
    let hours = timeMinute / 60 / 60 % 60
    if(timeMinute<=0){
      clearInterval(timer)
    }else{
      strTimer = `${Math.trunc(hours)}:${Math.trunc(minutes)}:${Math.trunc(seconds)}`
      document.querySelector('#time').innerHTML = strTimer
    }
    --timeMinute
    console.log(strTimer)
  },1000)
}
window.onload = time()
export default {
  props:
   ['timer'],
  name: "NavBar",
  methods:{

  }
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Grechen+Fuemen&display=swap');
.nav {
  text-align: center;
}
.nav-text {
  font-family: 'Grechen Fuemen', cursive;
  font-size: large;
}
</style>