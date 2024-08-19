<template>
    <NavComponent></NavComponent>
    <main>
        <section id="hero">
            <div id="introductionBox">
                <h1 class="title abstract">ABSTRACT</h1>
                <p>Csapatunk <i> 2023. november 13-án</i> alakult, azzal a céllal,
                    hogy egyedülálló élményt nyújtsunk vendégeinknek. 
                    Szeretnénk, hogy amikor nálunk jártok nemcsak egy hajvágásért jönnétek,
                    hanem az <strong>élményért</strong>, amit az <span class="abstract">ABSTRACT</span> ad nektek. 
                    Mindannyiunk közös célja és értékrendje, 
                    hogy minden vendégünk elégedetten távozzon, 
                    és újra visszatérjen hozzánk. Együtt dolgozunk azon, 
                    hogy professzionális szolgáltatásainkkal és barátságos 
                    hozzáállásunkkal <b>felejthetetlenné</b> tegyük minden látogatásotokat.
                </p>
            </div>
            <div id="contactBox">
                
            </div>
        </section>
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
}
</script>
<style scoped>
    #hero{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
        gap: 10%;
        padding-top: 8%;
    }

    #introductionBox, #contactBox{
        display: flex;
        flex-direction: column;
        width: 40%;
        outline: 2px solid black;
        border-radius: 25px;
    }

    #introductionBox{
        gap: 50px;
        padding: 2%;
        text-align: center;
    }

    #introductionBox p{
        font-size: x-large;
    }
    
    .abstract{
        font-weight: 900;
    }

    .title{
        font-size: clamp(42px, 7vw + 1rem, 60px);
        text-align: left;
        margin: 0;
    }

    
    #contactBox{
        background-color: var(--purpleColor);
    }
</style>