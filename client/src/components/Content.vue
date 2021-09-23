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
              <v-btn
                  class="button"
                  elevation="8"
                  plain
                  x-large
                  color=#00BCD4
              >
                Нажми на меня!
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-fade-transition>
    </v-container>
  </div>
</template>

<script>

window.onload = ()=>{
  document.querySelector('.content').style.minHeight = document.documentElement.clientHeight+'px'
}
export default {
  name: "Content"
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