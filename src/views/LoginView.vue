<template>
    <NavComponent></NavComponent>
    <main>
        <article v-if="registrating == false" id="loginContainer">
            <h1>Bejelentkezés</h1>
            <div class="inputbox">
                <input type="text" required="required">
                <span>Felhasználónév</span>
                <i></i>
            </div>
            <div>
                <div class="inputbox">
                    <input type="password" required="required">
                    <span>Jelszó</span>
                    <i></i>
                </div>
                <a href="#" >Elfelejtettem a jelszavam</a>
            </div>
            <a class="appointmentBtn" href="#">
                <span class="top-key"></span>
                <span class="text">Bejelentkezés</span>
                <span class="bottom-key-1"></span>
                <span class="bottom-key-2"></span>
            </a>

            <h2>Nem regisztráltál még? <br> <a @click="this.registrating = true">Regisztráció</a></h2>
        </article>


        
        <article v-if="registrating == true" id="registrationContainer">
            <h1>Regisztráció</h1>
            <div id="infoArea">
                <div class="col">
                    <div class="inputbox">
                        <input type="text" required="required">
                        <span>Email</span>
                        <i></i>
                    </div>
                    <div class="inputbox">
                        <input type="text" required="required">
                        <span>Felhasználónév</span>
                        <i></i>
                    </div>
                    <div class="inputbox">
                        <input type="password" required="required">
                        <span>Jelszó</span>
                        <i></i>
                    </div>
                </div>

                <div class="col">
                    <div class="inputbox">
                        <input type="text" required="required">
                        <span>Név</span>
                        <i></i>
                    </div>
                    <div class="inputbox">
                        <input type="text" required="required">
                        <span>Telefonszám</span>
                        <i></i>
                    </div>
                </div>
            </div>
            <a class="appointmentBtn" href="#">
                <span class="top-key"></span>
                <span class="text">Regisztráció</span>
                <span class="bottom-key-1"></span>
                <span class="bottom-key-2"></span>
            </a>

            <h2>Már regisztráltál? <br> <a @click="this.registrating = false">Bejelentkezés</a></h2>
        </article>
    </main>
    <FooterComponent></FooterComponent>
</template>

<script>
import NavComponent from "@/components/NavComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
    components:{
        NavComponent,
        FooterComponent,
    },
    data() {
        return {
            registrating: false,
        }
    },
}
</script>
<style scoped>
    main{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100vw;
        overflow: hidden;
        padding: 100px;
    }
    
    #loginContainer, #registrationContainer{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 90%;
        height: fit-content;
        min-width: 550px;
        background-color: var(--purpleColor);
        box-shadow: 2px 2px 10px var(--blackColor);
        gap: 35px;
        border-radius: 25px;
        color: var(--grayColor);
        outline: 2px solid var(--grayColor);
    }

    #infoArea{
        display: flex;
        flex-direction: row;
        gap: 50px;
    }
    
    #infoArea .col{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        gap: 20px;
    }

    #loginContainer div{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
    
    a{
        cursor: pointer;
        color: var(--yellowColor);
        text-decoration: underline;
    }

    .inputbox {
        position: relative;
        width: 196px;
    }

    .inputbox input {
        position: relative;
        width: 100%;
        padding: 20px 10px 10px;
        background: transparent;
        outline: none;
        box-shadow: none;
        border: none;
        color: var(--grayColor);
        font-size: 1em;
        letter-spacing: 0.05em;
        transition: 0.5s;
        z-index: 10;
    }

    .inputbox span {
        position: absolute;
        left: 0;
        padding: 20px 10px 10px;
        font-size: 1em;
        color: var(--grayColor);
        letter-spacing: 00.05em;
        transition: 0.5s;
        pointer-events: none;
    }

    .inputbox input:valid ~span,
    .inputbox input:focus ~span {
        color: var(--blackColor);
        transform: translateX(-10px) translateY(-34px);
        font-size: 0,75em;
    }

    .inputbox i {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        background: var(--blackColor);
        border-radius: 4px;
        transition: 0.5s;
        pointer-events: none;
        z-index: 9;
    }

    .inputbox input:valid ~i,
    .inputbox input:focus ~i {
        height: 44px;
    }

    .appointmentBtn {
        background-color: transparent;
        border: 2px solid var(--blueColor);
        border-radius: 0;
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
        font-family: "Roboto Mono", monospace;
    }

    .appointmentBtn::before {
        content: " ";
        width: 1.5625rem;
        height: 2px;
        background: var(--grayColor);
        top: 50%;
        left: 1.5em;
        position: absolute;
        transform: translateY(-50%);
        transform-origin: center;
        transition: background 0.3s linear, width 0.3s linear;
    }

    .appointmentBtn .text {
        font-size: 1.125em;
        line-height: 1.33333em;
        padding-left: 2em;
        display: block;
        text-align: left;
        transition: all 0.3s ease-in-out;
        text-transform: uppercase;
        text-decoration: none;
        color: var(--grayColor);
    }

    .appointmentBtn .top-key {
        height: 2px;
        width: 1.5625rem;
        top: -2px;
        left: 0.625rem;
        position: absolute;
        background: var(--purpleColor);
        transition: width 0.5s ease-out, left 0.3s ease-out;
    }

    .appointmentBtn .bottom-key-1 {
        height: 2px;
        width: 1.5625rem;
        right: 1.875rem;
        bottom: -2px;
        position: absolute;
        background: var(--purpleColor);
        transition: width 0.5s ease-out, right 0.3s ease-out;
    }

    .appointmentBtn .bottom-key-2 {
        height: 2px;
        width: 0.625rem;
        right: 0.625rem;
        bottom: -2px;
        position: absolute;
        background: var(--purpleColor);
        transition: width 0.5s ease-out, right 0.3s ease-out;
    }

    .appointmentBtn:hover {
        color: var(--grayColor);
        background: var(--blackColor);
    }

    .appointmentBtn:hover::before {
        width: 0.9375rem;
        background: var(--grayColor);
    }

    .appointmentBtn:hover .text {
        color: var(--grayColor);
        padding-left: 1.5em;
    }

    .appointmentBtn:hover .top-key {
        left: -2px;
        width: 0px;
    }

    .appointmentBtn:hover .bottom-key-1,
    .appointmentBtn:hover .bottom-key-2 {
        right: 0;
        width: 0;
    }

    @media only screen and (min-width: 550px) {
        #loginContainer, #registrationContainer{
            width: 25%;
        }
    }
</style>