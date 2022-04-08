<template> <!-- Criando linha com a temoeratura dos proximos dias -->
  <div class="prox-hr">
    <br>
    <q-scroll-area class="temperatura rounded-borders q-mb-xl"  style="border-radius: 10px;">
      <div class=" row no-wrap">
          <div v-for="n in 13" :key="n" class="flex flex-center temperatura-item q-pa-lg" style="height: 10px">
            <h6 class="text-black"> {{ horaDia(n - 1) }} </h6>
            <h6 class="text-weight-bolder"> {{ Math.round(tempDados.list[n].main.temp) }}° </h6>
            <img :src="`${this.url_icon}${getIcon(n - 1)}.png`">
          </div>
      </div>
    </q-scroll-area>
  </div>
</template>

<script>
import { date, format } from "quasar"

  export default {
      //receve os valores da api
    props: {
      tempDados: {
        type: Object,
        required: true,
      },
      bgTemperatura: {
        type: String,
        required: true
      }
    },
    data() {
      return {//retorna os icones da aoi
        url_icon: 'http://openweathermap.org/img/wn/',
      }
    },
    methods: {
      horaDia(n) {
        const tempoDia = new Date(this.tempDados.list[n].dt_txt)
        const horaFormatada = date.subtractFromDate(tempoDia, {hours: 4}).getHours()
        
        if (horaFormatada < 10) {
          return `0${horaFormatada}:00`
        }
        return horaFormatada + ':00'
      },

      getIcon(n) {
        const prevAgora = this.tempDados.list[n].weather[0].description
        const horaDiaria = this.horaDia(n).slice(0, 2)
        let iDia;//icone do dia
        let iNoite;//icone da noite

        switch (prevAgora) {
          case 'céu limpo':
            iDia = '01d'
            iNoite = '01n'
            break
          case 'nuvens dispersas':
          case 'algumas nuvens':
            iDia = '02d'
            iNoite = '02n'
            break
          case 'nublado':
            iDia = '04d'
            iNoite = '04n'
            break
          case 'chuva leve':
          case 'chuva moderada':
            iDia = '10d'
            iNoite = '10n'
            break
          case 'chuva forte':
            iDia = '09d'
            iNoite = '09n'
            break
          case 'tempestade':
            iDia = '11d'
            iNoite = '11n'
            break
          default:
            iDia = '01d'
            iNoite = '01n'
            break
        }

        if (horaDiaria <= 6 || horaDiaria >= 18) {
          return iNoite
        }

        return iDia
      }
    },
  }
</script>

<style>
  .temperatura {
    height: 150px;
  }

  div.prox-hr{
    background-color: wheat; 
    width: 95%;
    margin: 0 auto;
    border-radius: 10px; 
    margin-top: 20px;
    margin-bottom: 20px;
  }
  h6{
    margin: 0px;
  }
</style>