var card = new Vue({
    el:'#card',
    data: {
        title: 'dinosaurs',
        dinos: [
            { 
                text: "telociraptor", 
                weight: "15 kg" 
            },
            { 
                text: "triceratops", 
                weight: "6,000 kg" 
            },
            { 
                text: "Stegosaurus", 
                weight: "2,500 kg" 
            }
        ]
    },
    filters: {
        capitalize: function(value) {
            if (!value) return '';
            value = value.toString();
            return value.charAt(0).toUpperCase() + value.slice(1);
        },
        undercase: function(value) {
            if (!value) return '';
            value = value.toString();
            return value.toLowerCase();
        },
        url: function (value) {
            if (!value) return '';
            value = value.toString();
            return 'https://en.wikipedia.org/wiki/' + value;
        }
    }   
});