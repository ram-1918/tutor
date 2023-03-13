<template>
    <button :type = "type" :class = "mode">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: ['type', 'mode']
};
</script>

<style scoped>
.tag{
    background-color: rgb(19, 82, 142);
    color: white;
    border-radius: 5px;
    border: none;
    padding: 5px;
    font-size: medium;
}
.add{
    background-color: white;
    color: rgb(23, 93, 159);
    border-color: rgb(23, 93, 159);
    outline: none;
    border-radius: 5px;
    padding: 5px;
    cursor:pointer;
}
.delete{
    background-color: white;
    border: none;
    cursor: pointer;
}
.delete:hover{
    color: red;
}
.submit{
    width:fit-content;
    border-color: rgb(23, 93, 159);
    border-radius: 5px;
    padding:3px 10px;
    margin: 1rem;
    background-color: white;
    color: rgb(23, 93, 159);
    outline: none;
    cursor: pointer;
}
.submit:hover,
.add:hover{
    background-color: rgb(97, 154, 207);
    color: white;
}
</style>