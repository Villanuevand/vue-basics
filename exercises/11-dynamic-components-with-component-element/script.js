var dinoEdit = {
    template: '#dino-edit',
    props: ["initialQuantity", "name", "index"],
    data: function () {
      return {
        quantity: this.initialQuantity
      }
    },
    methods: {
      increment: function(){
        this.quantity += 1;
      }
    }
  }
  var dinoShow = {
    template: '#dino-show',
    props: ["name", "diet"]
  };
  window.card = new Vue({
    el: "#card",
    data: {
      title: "Dinosaurs",
      input:"",
      currentView: 'dino-edit',
      items: [
        { text: "Tyrannosaurus", quantity: 5, diet: 'Carnivore' },
        { text: "Triceratops", quantity: 4, diet: 'Herbivore' },
        { text: "Stegosaurus", quantity: 6, diet: 'Herbivore' }
      ]
    },
    methods: {
      toggle: function(){
        this.currentView = this.currentView === 'dino-edit' ? 'dino-show' : 'dino-edit';
      }
    },
    computed: {
      editLabel: function(){
        return this.currentView === 'dino-edit' ? 'Show' : 'Edit';
      }
    },
    components: {
      "dino-edit": dinoEdit,
      "dino-show": dinoShow
    }
  });
  