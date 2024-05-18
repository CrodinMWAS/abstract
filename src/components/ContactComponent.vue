<template>
    <div id="contact-main">
        <div id="contacts">
            <div id="leftColumn">
                <div id="info">
                    <h1>Elérhetőség</h1>
                    <h2>Cím: 4024 Liszt Ferenc u. 7-9</h2>
                    <h2>Telefonszám: 06304460554</h2>
                    <h2>E-mail: szabo.erik43@gmail.com</h2>
                </div>
                <div id="openingHours">
                    <h1>Nyitvatartás</h1>
                    <h2>Hétfő: 10:00 - 19:00</h2>
                    <h2>Kedd: 10:00 - 19:00</h2>
                    <h2>Szerda: 10:00 - 19:00</h2>
                    <h2>Csütörtök: 10:00 - 19:00</h2>
                    <h2>Péntek: 10:00 - 19:00</h2>
                    <h2>Szombat: 10:00 - 14:00</h2>
                    <h2>Vasárnap: Zárva</h2>
                </div>
                <div id="map">
                    <h2>MAP</h2>
                </div>
            </div>
            <div id="rightColumn">
                <form @submit="console.log('submitted')">
                    <label for="nameInputField">Név:</label>
                    <input id="nameInputField" type="text" required v-model="name">
                    <label for="emailInputField">E-mail cím:</label>
                    <input id="emailInputField" type="email" required v-model="email">
                    <label for="phoneInputField">Telefonszám:</label>
                    <input id="phoneInputField" type="text" required v-model="phoneNumber">
                    <label for="messageInputField">Üzenet:</label>
                    <input id="messageInputField" type="text" v-model="message">
                    <button>Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            name: "",
            email: "",
            phoneNumber: "",
            message: "",
        }
    },
    methods:{
    }
}

</script>
