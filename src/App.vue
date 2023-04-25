<template>
  <div id="app"></div>
  <v-main-wrapper />
</template>

<script>
import vMainWrapper from './components/v-main-wrapper'

export default {
  name: 'app',
  components:{
    vMainWrapper
  },
  data () {
    return{

    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
