<template>
    <div class="sidenav">
        <button @click = "filterObjects('undefined')">All</button>
        <button @click = "filterObjects('Python')">Python</button>
        <button @click = "filterObjects('Java')">Java</button>
        <button @click = "filterObjects('SQL')">SQL</button>
        <button @click = "filterObjects('Fullstack')">Fullstack</button>
    </div>
    <h3></h3>
</template>

<script>
export default {
    methods: {
        filterObjects(val){
            const data = this.$store.getters['getAllData'];
            var filteredData = []
            if( val != 'undefined'){
                filteredData = data.filter((list) => list.category == val);
            }
            else{
                filteredData = data;
            }
            this.$store.commit('filterData', filteredData);
            console.log(filteredData[0].category);
        }
    }
};
</script>
<style scoped>
.sidenav{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}
button{
    width: 100%;
    padding: 10px;
    background: none;
    border: none;
    box-shadow: 1px 1px 4px rgba(0,0,0,0.3);
    cursor: pointer;
    font-size: medium;
}
button:hover{
    background-color: rgb(208, 186, 229);
}
</style>