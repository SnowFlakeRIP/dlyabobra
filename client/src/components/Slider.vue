<template>
  <div>
    <v-container fluid class="content">
      <v-row>
        <v-col cols="6">
        <div class="text-container">
          <p class="text">
            Только посмотрите, как счастливы люди, которые приняли участие в наших акциях!
            <br>
            Мало того, что они понимают, как сильно помогли таким замечательным животным, так им еще и полезные подарки вручили
            <br>
            Футблоки, худи, сумки и многое другое, что будет напоминать вам о прекрасно проведенном времени
            <br>
            Хочешь получить наш мерч и быть самым модным на районе?
            <br>
            Жми на кнопку и становись счастливым обладателем!
          </p>
          <Form2 @accept="accept"/>
        </div>
        </v-col>
        <v-col cols="6">
          <v-carousel class="slider" hide-delimiters>
            <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                :src="item.src"
            ></v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Form2 from "./Form2";
export default {
  data() {
    return {
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
      ]
    }
  },
  name: "Slider",
  components:{
    Form2
  },
  methods: {
    accept(name,email,number) {
      this.dialog = false
      console.log('Accept')
      this.$emit('accept',name,email,number)
    }
  }
}
</script>

<style scoped>
.content{

}
.slider{
  border:solid #31e0a4 10px
}
.text-container{
  text-align: center;

}
.text{
  font-family: 'Gemunu Libre', serif;
  font-size: xx-large;
}
</style>