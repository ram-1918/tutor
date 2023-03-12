<template>
    <div style = "text-align: right; margin: 0.5rem;">
        <base-button @click = "viewForm" mode = "add">Add Question</base-button>
    </div>
    <table v-for = "(question, idx) in getData" :key = "question.id">
        <tr>
            <td>
                <div class = "question" @click = "displayAnswer(question.id)">{{idx+1}}. {{question.question}}</div>
                <div class = "tags">
                    <span v-if = "question.category"><base-button type = "disabled" mode = "tag">{{ question.category }}</base-button> </span>
                    <span v-if = "question.topic"><base-button type = "disabled" mode = "tag">{{ question.topic }} </base-button></span>
                    <base-button mode = "delete" @click = "deleteQue(question.id)"><i class="material-icons" style="font-size:24px">delete</i></base-button>
                </div>   
            </td>

        </tr>
        <tr v-if = "openId.indexOf(question.id) != -1">
            <td>
                <answers-view 
                :quesId = "question.id"
                :question = "question.question"
                :ans = "question.answer"
                :datecreated = "question.date_create"
                :topic = "question.topic"
                :category = "question.category"
                :student_name = "question.student_name"
                :company = "question.company"
                :links = "question.links"
                ></answers-view>
            </td>
        </tr>
        
    </table>
</template>
<script>
import AnswersView from './AnswersView.vue';
export default{
    components:{
        AnswersView
    },
    data(){
        return {
            show: true,
            form: false,
            selectedId: '',
            openId: []
        }
    },
    computed:{
        getData(){return this.$store.getters['getData']},
    },
    methods:{
        toggleForm(){this.$store.state.displayForm = true},
        viewForm(){this.$router.push('/tutorials/create')},
        displayAnswer(id){
            const idx = this.openId.indexOf(id);
            if (idx === -1){
                //add id
                this.openId.push(id);
            }else{
                // pop
                this.openId.splice(idx, 1);
            }
        },
        deleteQue(id){
            this.$store.dispatch('deleteQuestion', {'id':id});
        }
    },
    created(){
        this.$store.dispatch('loadQuestions');
    },

}
</script>
<style scoped>
table{
    border-collapse: collapse;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
td{
    border-bottom: 1px solid;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
}
.question{
    width: 75%;
}
.tags{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 25%;
}

td:hover{
    color: rgb(157, 50, 32);
    cursor: pointer;
}
</style>