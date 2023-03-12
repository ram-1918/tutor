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
    background-color: rgb(23, 93, 159);
    color: white;
}
.submit:hover{
    background-color: rgb(97, 154, 207);
    color: black;
}
</style>