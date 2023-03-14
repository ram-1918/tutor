<template>
    <div class = "answer-section">
        <!-- <div class = "first">
            <span style="font-size:lighter;font-family: cursive;">{{date}}</span>
            <span style="font-size:lighter;font-family: cursive;">{{ enteredstudent }}</span>
        </div> -->
        <div class="second">
            <span class="answer">A. {{ answer }}</span>
            <base-button mode = "submit" @click="changeState()">Edit</base-button>
        </div>
        <div class = "third">
            <span style="text-decoration:underline;">References</span>
            <span v-for = "link in enteredlinks.split(' ')" :key = link>  <a href='{{link}}'>{{link.split()[0]}}</a></span>
        </div>
    </div>
    <div v-if = "this.$store.state.updateState">
        <edit-form
            :id = "quesId"
            :question = "question"
            :answer = 'answer'
            :category = 'enteredcategory'
            :topic = 'enteredtopic'
            :student = 'enteredstudent'
            :company = 'enteredcompany'
            :links = 'enteredlinks'>
        </edit-form>
    </div>
</template>
<script>
import EditForm from './EditForm.vue'
export default {
    components: {
        EditForm
    },
    props: ['ans', 'quesId','question', 'topic', 'category', 'student_name','company','links', 'datecreated'],
    data(){
        return {
            answer: this.ans,
            date: this.datecreated,
            enteredtopic: this.topic,
            enteredcategory: this.category,
            enteredstudent: this.student_name,
            enteredcompany: this.company,
            enteredlinks: this.links,
            updateState: false
        };
    },
    methods:{
        changeState(){
            this.$store.state.updateState = true;
        },
        post(){
            const patchData =     {
                "answer": this.answer,
                "category": this.enteredcategory,
                "topic": this.enteredtopic,
                "student_name": this.enteredstudent,
                "company": this.enteredcompany,
                "links": this.links
            }
            this.$store.dispatch('updateData', {'id':this.quesId, 'data':patchData});
            this.updateState = false;
        }
    }
};
</script>
<style scoped>
.answer-section{
    width: 85%;
    display: flex;
    flex-direction: column;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
    /* background-color: rgb(247, 0, 255); */
}
.answer{
    margin-bottom: 0.5rem;
    font-size:medium;
    font-weight: 600;
}
.first{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    /* background-color: rgb(0, 255, 17); */
}.second{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    /* background-color: aqua; */
}
.third{
    display: flex;
    flex-direction: column;
    font-size: smaller;
    /* background-color: rgb(208, 255, 0); */
}
</style>