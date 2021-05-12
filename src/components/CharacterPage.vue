<template>
  <div class="character">

        <b-button variant="primary"  v-on:click="fetchCharacter" >Get Characters Name</b-button>
      
        <ul v-if="test">
            <li v-for="item in test" :key="item.character.name">
                <dt>{{ item.character.name }}</dt>
            </li>
            </ul>
                 
  </div>
</template>
<script>
export default {
  name: 'Cities',
   methods: {
      fetchCharacter() {
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
.character{
  background-color: cadetblue;

}
</style>

