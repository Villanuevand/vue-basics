var card = new Vue({
    el:'#card',
    data: {
        title: 'Epic Dinosaur Counter',
        input: '',
        speciesUpdated: 0,
        dinosUpdated: 0,
        buttonText: "Add Dinosaur",
        items: [
            { text: "Tyrannosaurus", quantity: 5 },
            { text: "Triceratops", quantity: 3 },
            { text: "Stegosaurus", quantity: 2 }
        ]
    },
    methods: {
        addItem: function (e) {
            e.preventDefault();
            if(!this.input) return '';
            this.items.push({text:this.input,quantity:1});
            this.input = '';
        },
        removeItem: function (item) {
            this.items.splice(item, 1);
        }
    },
    computed: {
        buttonDisabled: function() {
            return this.input == "";
        }
    }
});