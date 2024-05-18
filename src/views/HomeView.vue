<template>
    <!-- <header id="topContent">
        <section id="topRow">
            <div id="containmentDiv">
                <h1 data-value="ABSTRACT" @mouseover="hoverEffect">ABSTRACT</h1>
            </div>
            <div id="logo"></div>
        </section>    
    </header> -->
    <CalendarComponent></CalendarComponent>
</template>

<script>
import CalendarComponent from "@/components/ReservationsComponent.vue";

export default {
    components:{
        CalendarComponent,
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
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
    }

    #topRow{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 80%;
    }

    #topContent h1{
        font-size: 550%;
        letter-spacing: 50px;
        text-decoration: 10px solid underline var(--purpleColor);
        text-underline-offset: 20px;
    }

    #topContent #logo{
        width: 200px;
        height: 200px;
        border-radius: 50px;
        background-size: 110%;
        outline: 5px solid var(--purpleColor);
    }

    /*=====  End of The Hero section, AKA topcontent  ======*/
</style>