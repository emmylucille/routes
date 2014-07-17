// (function($){

//Model
var Person = Backbone.Model.extend ({
  defaults: {
    name: '',
    bio: '',
    imgUrl: ''
  },
  // url: '#'

});

var person = new Person();

//Collection
var People = Backbone.Collection.extend({
  model: Person
  // url: '#'
});

var people = new People([
  {
    name: 'Amy Gori',
    bio: 'Is good at articulating.',
    ImgUrl: ''
  },
  {
    name: 'Talal Obeid',
    bio: 'Loves rainbows.',
    ImgUrl: ''
  },
  {
    name: 'Tyler Berry',
    bio: 'Cool as a cucumber.',
    ImgUrl: ''
  }
]);

//View
var HomeView = Backbone.View.extend ({
  el: '#container',

  initialize: function() {
    this.render();
  },
//
//
  render: function(){
       var template = _.template($('#home-container').html(), {people: people.models});
       this.$el.html(template);
       return this;
           // this.$el.html(this.template(people: this.collection.toJSON()));
           // this.$el.html(this.template(this.model.toJSON()));
           // console.log(this.collection.toJSON);
           // this.$el.append(this.template({name: 'Emily'}));
           // this.$el.append(this.template({people: this.collection.toJSON()}));
           // this.$el.html(rendered);
           // $('body').append(this.$el);
           // this.listView = new ListView();
           // this.$el.append(this.listView.render().el);
  }
//
});

homeView = new HomeView();

// var ListView = Backbone.View.extend({
//   tagName: 'ul',
//
//   initialize: function() {
//     this.template = _.template($('#home-container').html());
//     this.render();
//   },
//
//   render: function() {
//     this.$el.empty();
//     // this.$el.append('<li>Hello</li>');
//     // this.$el.append('<li>Goodbye</li>');
//     // this.$el.append(this.template({name: 'Emily'}));
// //     // $('body').append(this.$el);
// //     // this.$el.append(this.template(this.model.toJSON()));
//     return this;
//   }
// });
//
// listView = new ListView();

// $(document).ready(function(){
//   homeView = new HomeView();
//   homeView.render();
//   // listView = new ListView();
//
// });

// $('.pet-list').append(adoptablePetListView.render().$el)

// })(jQuery);
