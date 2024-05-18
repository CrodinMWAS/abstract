<template>
    <div id="error">
        <div id="square" :class="{error: errorType==1}"></div>
        <h1>{{ errorMsg }}</h1>
    </div>
</template>

<script>
export default {
    props: ['errorMsg', 'errorType']
}
</script>

<style scoped>
    #error{
        width: 25%;
        height: 5vh;
        background-color: #212121;
        border-radius: 10px;
        position: fixed;
        bottom: 0;
        right: 0;
        z-index: 500;
        padding: 1%;
        margin: 20px;
        border: 2px solid #EAEAEA;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    #square{
        width: 40px;
        height: 40px;
        background-color: #EAEAEA;
        border-radius: 10px;
        /* aspect-ratio: 1; */
    }
    .error{
        border: 3px solid red;
    }

    h1{
        max-height: 40px;
        font-size: 130%;
        color: red;
    }
</style>