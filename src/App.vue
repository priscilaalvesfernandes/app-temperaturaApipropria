<template >
  <q-layout class="flex flex-center">
        <q-page class="my-card shadow-20 text-black" :style-fn="this.pageHeight" style="border-radius: 10px;">
      <div class="menu" >
        <Menu
         v-if="requerido"
          :dados="this.dados"
          :hora="this.hora()"
          :iconeTemp="this.iconeTemp" 
        />
        <proxDia
          v-if="requerido"
          :tempDados="this.dados"          
        />

      </div>
    </q-page>
  </q-layout>
</template>

<script>
import {date} from 'quasar'
import Menu from './components/Menu.vue'
import ProxDia from './components/proxDia.vue'
import Informacoes from './components/Informacoes.vue'

export default {
  components:{
    Menu,
    ProxDia,
    Informacoes
  },

  data(){
    return {
      baseUrl: 'https://api.openweathermap.org/data/2.5/forecast?id=3464460&units=metric&lang=pt_br&appid=45dbcbc1fd934e5bb167f3b3ff36f65f',
      dados: '',// recebendo os valor do arquivo js
      previsao:'',// recebe a previsao do tempo
      requerido: false,//
      horaAtual: '',
      iDia: '',
      iNoite:'',
      iconeTemp:'',
      //bgTemperatura:'',
      bgCard:'',
    }
  },

  methods: {
    async dadosDb(){//conectando e recebendo dados da API usando uma funcao assincrona
      const resp = await fetch(this.baseUrl)
      const infor = await resp.json()
      this.dados=infor
      this.requerido= true
      this.hora()
      console.log(infor)
    },
    hora(){//definindo dia da semana e hora local.
      const horario = Date.now()
      const horaAtual = date.formatDate(horario,'dddd, HH:mm',{
      days: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']
    })
       return horaAtual
  },
    pageHeight() {
      return { minHeight: 0 }
    }
  },
  beforeMount(){
    this.dadosDb()
  },
}


</script>

<style>
 h1{
    font-size: 2rem;
    margin: 0 auto
  }
  h2{
    font-size: 1.5rem;
  }
  h3{
    font-size: 1rem;
  }
  @media (min-width: 400px) {
    .my-card {
      width: 80vw;
    }
  } 

  @media (max-width: 400px) {
    .my-card {
      width: 90vw;
      height: 90vh;
    } 
  }

</style>