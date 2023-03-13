<template>
    <div style = "text-align: right; margin: 0.5rem;">
        <base-button @click = "viewForm" mode = "add">Add Question</base-button>
    </div>
    <table v-for = "(question, idx) in getData" :key = "question.id">
        <tr>
            <td class="question-section">
                <div class = "question" @click = "displayAnswer(question.id)">
                    <span v-if="openId.indexOf(question.id) === -1">{{idx+1}}. {{question.question}}</span>
                    <span v-else style="color:rgb(157, 50, 32);">{{idx+1}}. {{question.question}}</span>
                </div>
                <div class = "tags">
                    <span v-if = "question.category"><base-button type = "disabled" mode = "tag">{{ question.category }}</base-button> </span>
                    <span v-if = "question.topic"><base-button type = "disabled" mode = "tag">{{ question.topic }} </base-button></span>
                </div>   
                <base-button mode = "delete" @click = "deleteQue(question.id)"><i class="material-icons" style="font-size:24px">delete</i></base-button>
                <span v-if="openId.indexOf(question.id) === -1" @click="displayAnswer(question.id)" style="cursor:pointer"><i class="fa fa-angle-down" style="font-size:24px"></i></span>
                <span v-else><i class="fa fa-angle-up" style="font-size:24px"></i></span>
            </td>

        </tr>
        <tr v-if = "openId.indexOf(question.id) != -1">
            <td style="padding:0">
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
        toggleForm(){this.$store.state.updateState},
        viewForm(){this.$router.push('/tutorials/create')},
        displayAnswer(id){
            const idx = this.openId.indexOf(id);
            if (idx === -1){
                //add id
                this.openId.push(id);
                this.$store.state.displayForm = true;
            }else{
                // pop
                this.openId.splice(idx, 1);
                this.$store.state.displayForm = false;

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

.question-section{
    /* border: 1px solid; */
    box-shadow: 1px 2px 3px rgba(1,1,1,0.4);
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    margin:0.5rem;
}
.question{
    width: 75%;
}
.tags{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 25%;
}

.question:hover{
    color: rgb(157, 50, 32);
    cursor: pointer;
}
</style>