<template><!--Apresentando na tela imformacões de cidade, data, hr e temperatura-->

  <div class="city row q-mt-lg">
    <div class="dados col-6 q-pl-xl">
        <h1> DOURADOS,MS - BR</h1>
        <h1> Data: {{today()}} </h1>

        <!-- mostrando cidade e país-->
        <h2> {{hora}} </h2>  <!-- mostrando dia e hr-->
        <h3> Humidade {{dados.list[0].main.humidity}}%</h3> 
    </div>
    <div class="dados1 col-6 q-pl-xl"> 
        <h1> Temperatura {{Math.round(dados.list[0].main.temp)}}ºC</h1>
        <!-- <p :class="[iconeTemp]"/> -->
        <h2 class="clima"> {{upercaseString(dados.list[0].weather[0].description)}} </h2>
          <Informacoes
            :dadosApi="this.dados"
            :horaDiaria ="this.hora"
          />
    </div>
  </div>

    
</template>

<script>
import Informacoes from './Informacoes.vue'
export default {  
  components:{
    Informacoes
  },
  props: {
    //recebendo dados da MPI
    dados:{
      type:Object,
      required:true
    },
    hora:{
      type:String,
      required: true
    },
    iconeTemp: {
      type: String,
      required: true
    },
    // bgTemperatura: {
    //   type: String,
    //   required: true
    // },
    // bgCard:{
    //   type: String,
    //   required: true
    // }
  },

  data(){
    return{
      icn:''
    }    
  },
  methods:{
    upercaseString(string){
      return string[0].toUpperCase() + string.slice(1);
    },
    today(){
      const data = new Date()
      const dia = String(data.getDate()).padStart(2,'0')
      const mes = String(data.getMonth()+1).padStart(2,'0')
      const ano = data.getFullYear()
      //const hoje = this.dados.list[0].dt_txt.slice(5,10)
      const hoje = dia+'/' + mes + '/' + ano
      return hoje
      console.log(hoje)
      
    },

    icone(){
      const icn=iconeTemp
      return icn
    }
  }
  
}
</script>

<style scope>

  div.city{
    width: 95%;
    border-radius: 10px;
    margin: 0 auto;
    text-align: center;
  }
  div.dados{
    background-color: rgb(219, 187, 126); 
    width: 95%;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px; 
    text-align: center; 
    padding: 0px;
    margin-top: 20px;
  }
  div.dados1{
    background-color: rgb(219, 187, 126); 
    width: 95%;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px; 
    text-align: center; 
    padding: 0px;
    margin-top: 20px;
  }
   h2.clima{
    font-size: 1.5rem;
    margin: 0 auto;
  }
 

</style>