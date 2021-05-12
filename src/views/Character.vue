<template>
  <div class="character">
      <h1> Game of Thrones Characters </h1>
      <CharacterPage/>
  
  </div>
</template>
<script>
// @ is an alias to /src
import CharacterPage from '@/components/CharacterPage.vue'


export default {
  name: 'Character',
  components: {
    CharacterPage
  }
}
</script>

