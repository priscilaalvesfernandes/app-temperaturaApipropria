<template>
    <div class="icone" :class="[iconeTemp]"></div>
</template>

<script>
export default {
props:{
    dadosApi:{
        type: Object,
        required:true
    },
    horaDiaria:{
      type:String,
      required: true
    },
},
data(){
    return{
        bgCard:'',
        bgTemperatura:'',
        iconeTemp:''
    }
},
methods:{
    getClasses() {
      const previsaoAgora = this.dadosApi.list[0].weather[0].description
        const hr = +this.horaDiaria.slice(13,15)

      if (hr<= 6 || hr >= 18) {
        switch (previsaoAgora) {
          case 'céu limpo':
            this.bgCard = 'bg-grey-10'
            this.bgTemperatura = 'bg-grey-9'
            this.iconeTemp = 'bi bi-sun'
            break
          case 'nuvens dispersas':
          case 'algumas nuvens':
            this.bgCard = 'bg-grey-10'
            this.bgTemperatura = 'bg-grey-9'
            this.iconeTemp = 'bi bi-cloud-sun'
            break
          case 'nublado':
            this.bgCard = 'bg-grey-10'
            this.bgTemperatura = 'bg-grey-9'
            this.iconeTemp = 'bi bi-cloud'
            break
          case 'chuva leve':
          case 'chuva moderada':
            this.bgCard = 'bg-grey-10'
            this.bgTemperatura = 'bg-grey-9'
            this.iconeTemp = 'bi bi-cloud-drizzle'
            break
          case 'chuva forte':
            this.bgCard = 'bg-grey-10'
            this.bgTemperatura = 'bg-grey-9'
            this.iconeTemp = 'bi bi-cloud-rain-heavy'
            break
          case 'tempestade':
            this.bgCard = 'bg-grey-10'
            this.bgTemperatura = 'bg-grey-9'
            this.iconeTemp = 'bi bi-cloud-lightning-rain'
            break
          default:
            this.bgCard = 'bg-white'
            this.bgTemperatura = 'bg-dark'
            this.iconeTemp = ''
            break
        }
      } else if (hr > 6 && hr< 18) {
          switch (previsaoAgora) {
            case 'céu limpo':
              this.bgCard = 'bg-amber-8'
              this.bgTemperatura = 'bg-amber-6'
              this.iconeTemp = 'bi bi-sun'
              break
            case 'nuvens dispersas':
            case 'algumas nuvens':
              this.bgCard = 'bg-amber-8'
              this.bgTemperatura = 'bg-amber-7'
              this.iconeTemp = 'bi bi-cloud'
              break
            case 'nublado':
              this.bgCard = 'bg-grey-6'
              this.bgTemperatura = 'bg-grey-5'
              this.iconeTemp = 'bi bi-cloud'
              break
            case ('chuva leve'):
            case ('chuva moderada'):
              this.bgCard = 'bg-grey-6'
              this.bgTemperatura = 'bg-grey-5'
              this.iconeTemp = 'bi bi-cloud-drizzle'
              break
            case 'chuva forte':
              this.bgCard = 'bg-grey-6'
              this.bgTemperatura = 'bg-grey-5'
              this.iconeTemp = 'bi bi-cloud-rain-heavy'
              break
            case 'tempestade':
              this.bgCard = 'bg-grey-7'
              this.bgTemperatura = 'bg-grey-6'
              this.iconeTemp = 'bi bi-cloud-lightning-rain'
              break
            default:
              this.bgCard = 'bg-white'
              this.bgTemperatura = 'bg-white'
              this.iconeTemp = ''
              break
        }
      }
    },
},
  beforeMount(){
    this.getClasses()
  }
  
}
</script>

<style>
.icone{
    font-size: 7rem;
    text-align: center;
    height: 0;
    margin: 0 auto;
    border-top: -200px;
}
</style>