var app = new Vue ({
    el: '#card',
    data: {
        checked: true,
        dynos: ['Triceratops','Velociraptor','Tyrannosaurus'],
        chosenDyno:'',
        periods: [
            { name: 'Triassic', value: 1 },
            { name: 'Jurassic', value: 2 },
            { name: 'Cretaceous', value: 3 }
        ],
        selectedPeriods: [],
        single:'',
        message:''
    }
});