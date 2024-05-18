<template>
    <header id="topContent">
        <div id="topRow">
            <div id="containmentDiv">
                <h1 data-value="ABSTRACT" @mouseover="hoverEffect">ABSTRACT</h1>
            </div>
            <div id="logo"></div>
        </div>    
    </header>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    /*=======================================================
    =            The Hero section, AKA topcontent            =
    =========================================================*/

    #square{
        background-color: grey;
    }

    #logo {
        background-image: url("@/assets/Abstract_Logo_Black.jpg");
        background-position: center;
        align-self: flex-start;
        width: 200px;
        height: 200px;
        background-size: 110%;
        border-radius: 50px;
    }

    #topContent{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
        margin-bottom: 50px;
        gap: 5%;
        padding: 25px;
        background-color: red;
    }

    /*----------  Style of the content  ----------*/
    #topRow{
        width: 80%;
        height: 25%;
        display: flex;
        justify-content: space-around;
    }

    #topContent h1{
        font-size: 550%;
        letter-spacing: 50px;
        text-decoration: 10px solid underline var(--purpleColor);
        text-underline-offset: 20px;
        max-width: 800px;
    }

    #containmentDiv{
        width: 55%;
    }

    #topContent #logo{
        outline: 5px solid var(--purpleColor);
    }

    #topContent #square{
        width: 80%;
        height: 7000px;
        background-position: center;
        background-size: 100%;
        background-repeat: no-repeat;
        border-radius: 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    #subHeaderSection{
        background-color: var(--blackColor);
        width: 35%;
        height: 18%;
        border-radius: 0 25px 0 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 5px -5px 20px var(--blackColor);
        align-self: flex-end;
        text-align: center;
    }

    #bottomBtns{
        /* background-color: var(--yellowColor); */
        width: 45%;
        height: 13%;
        border-radius: 0 25px 0 25px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }

    /*=============================================
    =            btn styles            =
    =============================================*/
    #bottomBtns button {
        padding: 1.3em 3em;
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 2.5px;
        font-weight: 600;
        color: #000;
        border: none;
        border-radius: 45px;
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease 0s;
        cursor: pointer;
        outline: none;
        background-color: var(--whiteColor);
    }

    #bottomBtns button:hover {
        background-color: var(--purpleColor);
        box-shadow: 0px 15px 20px rgba(0, 232, 252,0.3);
        color: #fff;
        transform: translateY(-7px);
    }

    #bottomBtns button:active {
        transform: translateY(-1px);
    }

    /*=====  End of btn styles  ======*/
    /*=====  End of The Hero section, AKA topcontent  ======*/
</style>