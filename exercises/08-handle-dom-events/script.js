var card = new Vue({
    el: '#card',
    data: {
        total:0,
        amount:null,
        totalDinos:0,
    },
    methods: {
        addDinos: function (e) {
            e.preventDefault();
            this.total += parseInt(this.amount);
        }
    }
});