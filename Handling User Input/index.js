var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        reverseMessage: function(){ //v-on:click="reverseMessage"
            this.message = this.message.split('').reverse().join('');
        }
    }
})