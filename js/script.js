

const { createApp } = Vue


createApp({
    data() {
        return {

            randomEmail: "",

            emails: [],


        }
    },


    // al caricamento della pagina:
    mounted() {

        for (let i = 0; i < 10; i++) {

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {


                this.randomEmail = response.data.response;
                this.emails.push(this.randomEmail)
            });
        }
        // console.log(this.emails)
    }

}).mount('#app');