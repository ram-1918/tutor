<template>
<li>
    <div v-if = "!this.$store.state.updateState">
        {{ answer }} 
        {{date}}<br>
        {{ enteredcategory }}
        {{ enteredtopic }}---{{ enteredstudent }}---{{ enteredcompany }}---{{ enteredlinks }}
        <button @click="changeState()">Edit</button>
    </div>
    <div v-else>
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

</li>
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
textarea{
    width:100%;
}
</style>