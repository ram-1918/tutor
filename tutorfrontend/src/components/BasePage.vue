<template>
    <div class="container-out">
        <div class = "topnav">
            <h2>Interview Prep</h2>
        </div>
        <div class = "container">
            <div class = "sidenav">
                <side-nav></side-nav>
            </div>

            <div class = "questions">
                <questions-view></questions-view>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import QuestionsView from './QuestionsView.vue'
import SideNav from './SideNav.vue'
export default {
    components: {
        QuestionsView,
        SideNav
    }
};
</script>

<style scoped>
.container-out{
    display: flex;
    flex-direction: column;
}
.topnav{
  box-shadow: 1px 1px 4px rgba(0,0,0,0.4);
  background-color: rgb(23, 93, 159);
  color: white;
  width: 100%;
}
.topnav h2{
    font-weight: bold;
    text-align: center;
}
.container{
  display: flex;
  flex-direction: row;
  margin: 0;
  align-items: center;
  margin-left:5rem;
  margin-right: 5rem;
}
.sidenav{
  width: 15%;
  height: 100vh;
  border-right: 1px solid;
}
.questions{
  width: 85%;
  height: 100vh;
}
</style>