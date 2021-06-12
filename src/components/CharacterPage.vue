<template>
  <div class="character">
    <img :src="image"/><br>
     <h3>  {{title}}</h3>

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
    props: {
    title: String
  },
   methods: {
      fetchCharacter() {
        fetch('https://game-of-thrones-quotes.herokuapp.com/v1/random/5')
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
.character{
  background-color: cadetblue;

}
</style>

