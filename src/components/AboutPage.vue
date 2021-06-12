<template>
  <div class="about">
      <img  :src="image"/>
      <h1>  {{txt}}</h1>
        <b-button variant="primary"  v-on:click="fetchQuote" >Get Quotes</b-button>
        <ul v-if="test">
            <li v-for="item in test" :key="item.character.name">
                <dt>{{ item.sentence }}</dt>
            </li>
            </ul>
                 
  </div>
</template>
<script>
export default {
  name: 'AboutPage',
    props: {
    txt: String
  },
   methods: {
      fetchQuote() {
        fetch('https://game-of-thrones-quotes.herokuapp.com/v1/random/10')
.then((response) => response.json())
.then((result) => {
this.test=result

})
      }
    },
    
 
    data() {
        return{
      test: null,
      image:"https://office-watch.com/fredagg/uploads/get-the-game-of-thrones-look-in-word-and-powerpoint-microsoft-office-27429.png"
     
        }
    },
   
}
</script>
<style scoped>
.about{
  background-color: cadetblue;

}
</style>


