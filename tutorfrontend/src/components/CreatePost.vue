<template>
    <div class = "BackScreen" @click = "closeform()"></div>
    <div class = "form-container ">
        <div class="container">
            <button @click = "closeform()">Close</button>
            <form @submit.prevent = "postData()">
            <div class="row">
                <div class="col-25">
                <label for="question">Question</label>
                </div>
                <div class="col-75">
                <textarea id="question" v-model="question" placeholder="Your question..."></textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                <label for="answer">Answer</label>
                </div>
                <div class="col-75">
                <textarea id="answer" v-model="answer" placeholder="Your answer..."></textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                <label for="category">Category</label>
                </div>
                <div class="col-75">
                <input type="text" id="category" v-model="category" placeholder="Category...">
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                <label for="topic">Topic</label>
                </div>
                <div class="col-75">
                <input type="text" id="topic" v-model="topic" placeholder="Topic...">
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                <label for="student">Student Name</label>
                </div>
                <div class="col-75">
                <input type="text" id="student" v-model="student" placeholder="Your name...">
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                <label for="company">Company</label>
                </div>
                <div class="col-75">
                <input type="text" id="company" v-model="company" placeholder="Company...">
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                <label for="links">Related Links</label>
                </div>
                <div class="col-75">
                <textarea id="links" v-model="links" placeholder="Any related links.."></textarea>
                </div>
            </div>
            <br>
            <div class="row">
                <input type="submit" value="Post">
            </div>
            </form>
            </div>
        </div>
</template>

<script>

export default {
    data(){
        return {
            question: '',
            answer: '',
            category: '',
            topic: '',
            student: '',
            company: '',
            links: '',
        };
    },
    methods:{
        closeform(){
            this.$router.push('/tutorials/');
        },
        postData(){
            var postDetails = {
                "question": this.question,
                "answer": this.answer,
                "category": this.category,
                "topic": this.topic,
                "student_name": this.student,
                "company": this.company,
                "links": this.links
            }
            this.$store.dispatch('postData', postDetails);
        }
    }
};
</script>

<style scoped>
.BackScreen{
    top: 0;
    left: 0;
    position: fixed;
    width: 100%;
    height: 100vh;
    margin: 0;
    z-index: 10;
    background-color: rgba(0,0,0,0.4);
    opacity: 0.7;
}
.form-container {
    border-radius: 5px;
    margin: 0px auto;
    width: 40rem;
    height: 20rem;
    z-index: 100;
    position: fixed;
    top: 15%;
    left: 28%;
}

input[type=text], select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}

label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}

input[type=submit] {
  background-color: #04AA6D;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: right;
}

input[type=submit]:hover {
  background-color: #45a049;
}

.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}

.col-25 {
  float: left;
  width: 25%;
  margin-top: 6px;
}

.col-75 {
  float: left;
  width: 75%;
  margin-top: 6px;
}

/* Clear floats after the columns */
.row::after {
  content: "";
  display: table;
  clear: both;
}

</style>