<template>
  <div class="v-main-wrapper">
      <router-view></router-view>
  </div>
</template>


<script>

export default {
  name: 'v-main-wrapper',
  data(){
    return{
      title: "Main Wrapper"
    }
  },
  computed:{

  },
  methods:{},
  watch:{},
  mounted() {

  }

}
</script>

<style scoped>
.v-main-wrapper{
  max-width: 900px;
  margin: 0 auto;
}
</style>