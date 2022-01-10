/* Descrizione:
Attraverso l’apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati. */

var app = new Vue({
    el: '#app',
    data: {
      mail: null,
      arrayMail: []
    },
    created() {
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
            // handle success
            this.mail = response.data.response;
            this.arrayMail.push(this.mail);
            })
            .catch((error) => {
            // handle error
            console.log(error);
            })
        }
        console.log(this.arrayMail);
    }
  })