

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
        // memorizzo le richieste in un array
        const requests = [];

        // memorizzo le chiamate API nell'array 'requests'
        for (let i = 0; i < 10; i++) {
            requests.push(
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
                    this.emails.push(response.data.response);
                })
            );
        }

    }

}).mount('#app');