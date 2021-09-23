<template>
  <div>
    <v-container
        class="fill-height content"
        fluid
        style="min-height: 434px"
    >
      <v-fade-transition mode="out-in">
        <v-row>
          <v-col cols="12">
            <div class="first-text">
              <h1 class="title-text">
                Всемирно известная акция -
                <br>
                Посади дерево - не оставь бобра без дома!
                <br>
                Каждый год мы собираем тысячи людей по всему миру и помогаем бобрам вместе!
                <br>
                Заинтересовался?
                <br>
                Жми на кнопку ниже!
                &#129047;&#129047;&#129047;
              </h1>
              <Form2 @accept="accept"/>
            </div>
          </v-col>
        </v-row>
      </v-fade-transition>
    </v-container>
  </div>
</template>

<script>
import Form2 from "./Form2";
window.onload = ()=>{
  document.querySelector('.content').style.minHeight = document.documentElement.clientHeight+'px'
}
export default {
  name: "Content",
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
.first-text{
  text-align: center;
}
.title-text{
  font-family: 'Grechen Fuemen', cursive;
  font-size: xx-large;
}

.content {

}
.button{
  margin-top: 20px;
}

</style>