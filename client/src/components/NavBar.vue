<template>
  <div>
    <v-container fluid class="content">
      <v-row>
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
                  color=#50f2c4
                  height="10"
                  value="59"
                  striped
              >
              </v-progress-linear>
            </v-col>
          </v-row>
        </v-col>
        <v-col class="nav">
          <v-row>
            <v-col class="nav-text">
              <h4>
                Времени до конца регистрации:
              </h4>
              <h3 style="text-decoration: none" v-bind:time="strTimer" id="time">
                {{ strTimer }}
              </h3>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  props: [],
  name: "NavBar",
  data() {
    return {
      strTimer: 0
    }
  },
  methods: {

    time() {
      let timeMinute = 300
      let timer = setInterval(function () {
        let seconds = timeMinute % 60
        let minutes = timeMinute / 60 % 60
        let hours = timeMinute / 60 / 60 % 60
        if (timeMinute <= 0) {
          clearInterval(timer)
        } else {
          this.strTimer = `${Math.trunc(hours)}:${Math.trunc(minutes)}:${Math.trunc(seconds)}`
          document.querySelector('#time').innerHTML = this.strTimer
        }
        --timeMinute

      }, 1000)
    }
  },
  beforeMount() {
    this.time()
  }
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Grechen+Fuemen&display=swap');

.nav {
  text-align: center;
}
.content{
  background: -webkit-linear-gradient(to right, #60c1c2,#fabbd7);                                            background: linear-gradient(to right, #60c1c2,#fabbd7);
}
.nav-text {
  font-family: 'Grechen Fuemen', cursive;
  font-size: large;
}
</style>