

const { createApp } = Vue


createApp({
    data() {
        return {

            email: "",

        }
    },


    // al caricamento della pagina:
    mounted() {

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {


            this.email = response.data.response;
        });
    }

}).mount('#app');