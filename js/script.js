

const { createApp } = Vue


createApp({
    data() {
        return {

            randomEmail: "",

            emails: [],

            listNumber: 0,


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

        // attendo il completamento di tutte le promesse (chiesto aiuto a ChatGpt)
        Promise.all(requests).then(() => {

            this.listNumber = this.emails.length;

        })
    }

}).mount('#app');