var card = new Vue({
    el:'#card',
    data: {
        title: 'Style Binding',
        sizeToggle: false,
        isRounded: false,
        disabled: false,
        backgroundColor: '#CCCCCC',
        fontColor: '#000000',
        range:50
    },
    computed: {
        styles: function () {
            return {
                color: this.fontColor,
                background: this.backgroundColor,
                'margin-left': this.range+"%"
            }
        }
    }

});