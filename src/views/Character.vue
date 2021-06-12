<template>
  <div class="character">
  
      <CharacterPage title="Characters"/>
  
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

