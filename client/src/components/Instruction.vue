<template>
  <div>
    <v-container fluid class="content">
      <v-timeline>
        <v-timeline-item>
      <span slot="opposite">
          <v-btn
              elevation="12"
              small
          >Первый шаг</v-btn>
        </span>
          <v-card class="elevation-2">
            <v-card-title class="text-h5">
              Приговить вещи, которые не жалко
            </v-card-title>
            <v-card-text>
              Все мы прекрасно понимаем, что работать придется на открытой местности, что черевато испачканной, а
              возможно и порванной одеждой.
              Поэтому логичным решением будет брать одужку в который вам будет максимально комфортно и, которую будет не
              жалко в случае чего выбросить
            </v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item>
        <span slot="opposite">
           <v-btn
               elevation="12"
               small
           >Второй шаг</v-btn>
          </span>
          <v-card class="elevation-2">
            <v-card-title class="text-h5">
              Мы покормим!
            </v-card-title>
            <v-card-text>
              Не стоит брать с собой кучу еды, воды и тому подобного. Мы прекрасно понимаем, что таскать на себе такую
              тяжесть - очень тяжело, поэтому эта ноша - наша забота!
              Вас обеспечат горячим питанием и питьевой водой
            </v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item>
          <span slot="opposite"> <v-btn
              elevation="12"
              small
          >Третий шаг</v-btn></span>
          <v-card class="elevation-2">
            <v-card-title class="text-h5">
              Общий сбор
            </v-card-title>
            <v-card-text>
              Собираемся в заранее обозначенном месте и отъезжаем на автобусах. Проезд абсолютно бесплатный и мест
              хватит всем!
              Мы арендуем для наших участников самые лучшие и удобные транспортные средства, чтобы вы могли добраться до
              места с наибольшим комфортом
            </v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item>
          <span slot="opposite"> <v-btn
              elevation="12"
              small
          >Четвертый шаг</v-btn></span>
          <v-card class="elevation-2">
            <v-card-title class="text-h5">
              Начало работ
            </v-card-title>
            <v-card-text>
              Собираемся вместе и идем на место проведения акции. Получаем инвентарь и начинаем облагораживать
              территорию. Работаем до обеда, далее кушаем и немножко отдыхаем. После продолжаем работу
            </v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item>
          <span slot="opposite"> <v-btn
              elevation="12"
              small
          >Пятый шаг</v-btn></span>
          <v-card class="elevation-2">
            <v-card-title class="text-h5">
              Поездка домой
            </v-card-title>
            <v-card-text>
              Возвращаем инвентарь и начинаем собираться домой. Уезжаем также на автобусе. Обратите внимание, что мы
              довезем Вас только до места отбытия, так что добраться домой - Ваша самостоятельная задача
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Instruction"
}
</script>

<style scoped>
.content {

}
</style>