<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <img :src="logo" alt="">
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import logo from '../assets/logo.png'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data(){
    return {
      logo,
    }
  }
}
</script>
