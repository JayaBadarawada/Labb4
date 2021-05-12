<template>
  <div class="about">
    <h1> Game of Thrones Quotes</h1>
    <AboutPage msg="Welcome"/>

  </div>
</template>
<script>
// @ is an alias to /src
import AboutPage from '@/components/AboutPage.vue'


export default {
  name: 'About',
  components: {
    AboutPage
  }
}
</script>
