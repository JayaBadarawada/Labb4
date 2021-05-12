<template>
  <div class="about">
      <h1>{{ msg }}</h1>
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
    msg: String
  },
   methods: {
      fetchQuote() {
        fetch('https://game-of-thrones-quotes.herokuapp.com/v1/random/20')
.then((response) => response.json())
.then((result) => {
this.test=result

})
      }
    },
    
 
    data() {
        return{
      test: null,
        }
    },
   
}
</script>
<style scoped>
.about{
  background-color: cadetblue;

}
</style>


