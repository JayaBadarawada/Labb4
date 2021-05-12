<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo1.png">
     <HelloWorld msg="Welcome to InfoApp" />
    <input v-model="message" placeholder="Enter your name">
     <p>Welcome {{ message }}</p>


  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data() {
        return{
    
      message:''
        }
    },
  components: {
    HelloWorld
  }
}
</script>
<style >
.home{
  background-color: cadetblue !important;

}
p{
  font-size: 25px;
}
</style>

