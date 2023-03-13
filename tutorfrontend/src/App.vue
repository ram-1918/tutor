<template>
<base-page></base-page>
</template>

<script>
import BasePage from './components/BasePage.vue'
export default {
  components: {
    BasePage
  },
  created(){
    this.$store.dispatch('loadQuestions');
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
* {
  box-sizing: border-box;
  font: 1rem sans-serif;
}


</style>
