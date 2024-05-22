<template>
    <NavComponent></NavComponent>
    <header id="topContent">
        <h1 id="hugeText">ABSTRACT</h1>
        <div id="headerContainer">
            <h1>Ahol Minden Hajvágás Egy <br> Mestermű</h1>
            <h2>Számunkra minden hajvágás egy egyéni műalkotás...</h2>
            <a class="fancy" href="#">
                <span class="top-key"></span>
                <span class="text">Időpontfoglalás</span>
                <span class="bottom-key-1"></span>
                <span class="bottom-key-2"></span>
            </a>
        <div id="picFrame"></div>
        </div>
    </header>
    <!-- <CalendarComponent></CalendarComponent> -->
</template>

<script>
// import CalendarComponent from "@/components/ReservationsComponent.vue";
import NavComponent from "@/components/NavComponent.vue";

export default {
    components:{
        // CalendarComponent,
        NavComponent,
    }
}
</script>

<style scoped>
    /*=======================================================
    =            The Hero section, AKA topcontent            =
    =========================================================*/
    #topContent{
        display: flex;
        flex-direction: column;
        width: 85%;
        height: 100vh;
        text-align: left;
        margin-left: 10%;
        justify-content: center;
    }

    #hugeText{
        position: absolute;
        left: 0;
        top: 16vh;
        font-size: 22vw;
        margin: 0;
        z-index: -1;
        background: rgb(33,33,33);
        background: radial-gradient(circle, rgba(89, 0, 255, 0.6) 0%, rgba(234,234,234,1) 100%);
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    #headerContainer{
        border-left: 5px solid var(--purpleColor);
        padding-left: 5%;
        border-radius: 25px;
    }

    #headerContainer h1{
        font-size: 4vw;
        margin: 0;
    }

    /*----------  Style of the "időpontfoglalás" button  ----------*/
    .fancy {
        background-color: transparent;
        border: 2px solid var(--purpleColor);
        border-radius: 0;
        box-sizing: border-box;
        cursor: pointer;
        display: inline-block;
        font-weight: 700;
        letter-spacing: 0.05em;
        margin: 0;
        outline: none;
        overflow: visible;
        padding: 1.25em 2em;
        position: relative;
        text-align: center;
        text-decoration: none;
        text-transform: none;
        transition: all 0.3s ease-in-out;
        user-select: none;
        font-size: 13px;
    }

    .fancy::before {
        content: " ";
        width: 1.5625rem;
        height: 2px;
        background: black;
        top: 50%;
        left: 1.5em;
        position: absolute;
        transform: translateY(-50%);
        transform-origin: center;
        transition: background 0.3s linear, width 0.3s linear;
    }

    .fancy .text {
        font-size: 1.125em;
        line-height: 1.33333em;
        padding-left: 2em;
        display: block;
        text-align: left;
        transition: all 0.3s ease-in-out;
        text-transform: uppercase;
        text-decoration: none;
        color: black;
    }

    .fancy .top-key {
        height: 2px;
        width: 1.5625rem;
        top: -2px;
        left: 0.625rem;
        position: absolute;
        background: #e8e8e8;
        transition: width 0.5s ease-out, left 0.3s ease-out;
    }

    .fancy .bottom-key-1 {
        height: 2px;
        width: 1.5625rem;
        right: 1.875rem;
        bottom: -2px;
        position: absolute;
        background: #e8e8e8;
        transition: width 0.5s ease-out, right 0.3s ease-out;
    }

    .fancy .bottom-key-2 {
        height: 2px;
        width: 0.625rem;
        right: 0.625rem;
        bottom: -2px;
        position: absolute;
        background: #e8e8e8;
        transition: width 0.5s ease-out, right 0.3s ease-out;
    }

    .fancy:hover {
        color: white;
        background: black;
    }

    .fancy:hover::before {
        width: 0.9375rem;
        background: white;
    }

    .fancy:hover .text {
        color: white;
        padding-left: 1.5em;
    }

    .fancy:hover .top-key {
        left: -2px;
        width: 0px;
    }

    .fancy:hover .bottom-key-1,
    .fancy:hover .bottom-key-2 {
        right: 0;
        width: 0;
    }

    #picFrame{
        position: absolute;
        right: 400px;
        z-index: -1;
        bottom: -400px;
        width: 600px;
        height: 800px;
        background-color: gray;
        background-image: url('../assets/800_c76182d1427902c02449555a1e979751.jpeg');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }

    /*=====  End of The Hero section, AKA topcontent  ======*/
</style>