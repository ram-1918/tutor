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
* {
  box-sizing: border-box;
  font: 1rem sans-serif;
}


</style>
