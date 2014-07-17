//Model
var Person = Backbone.Model.extend ({
  defaults: {
    name: '',
    bio: '',
    imgUrl: ''
  }
});

var person = new Person();

//Collection
var People = Backbone.Collection.extend ({
  model: person
  url: '/list'
});

var people = new People([
  {
    name: 'Amy Gori',
    bio: '',
    ImgUrl: ''
  },
  {
    name: 'Talal Obeid',
    bio: '',
    ImgUrl: ''
  },
  {
    name: 'Tyler Berry',
    bio: '',
    ImgUrl: ''
  }
]);

//View
var PeopleView = Backbone.Collection.extend ({
  model:
});
