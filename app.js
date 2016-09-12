
(function(){

  // the 'store' module depends on the 'store-products' module define in products.js
  var app = angular.module('store',['store-products']);

  app.controller('StoreController', ['$http',function($http){
      var store = this;
    store.products = [];

   //   $http.get('getProducts.json').success(function(data){
         // this.products = data;
      //})
      // product is a property of controller
     this.products = [

        {
          name: 'Multi Touch Keyboard',
          price: 2500,
          description:'...',
          images:[],
          reviews:[
            {
              stars:5,
              body:'wow what a product',
              author:'a@a.ie'
            },
            {
              stars:2,
              body:'wow what a shit product',
              author:'b@a.ie'
            }
          ]
        }

      ];
  }]);

  app.controller('ReviewController', function(){
    this.review ={};

    this.addReview = function(product){
      product.reviews.push(this.review);

      // resets form
      this.review = {};
    };
  });

  app.controller('PanelController', function(){
      // initialization and configuration show go inside controller

    this.tab = 1;

    this.selectTab = function (setTab) {
      this.tab = setTab;
    };

    this.isSelected = function(checkTab){
      return this.tab === checkTab
    };


  });

  var gems =[
    {
    name : 'Dodecahedron',
    price : 2.95,
    description : '. . .',
    canPurchase : true,
    soldOut : false,
      image : [{
        full : 'dodecahedron-01-full.jpg',
        thumb : 'dodecahedron-01-thumb.jpg'
      },
        {
          full : 'dodecahedron-02-full.jpg',
          thumb : 'dodecahedron-02-thumb.jpg'
        }]
  },
    {
      name : 'Pentagonal Gem',
      price : 5.95,
      description : 'descriptive text about this gem!',
      canPurchase : true,
      soldOut : false
    }
  ];

})();
