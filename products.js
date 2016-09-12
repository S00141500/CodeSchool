/**
 * Created by Mark on 09/05/2016.
 */


(function(){

    var app = angular.module('store-products', []);
    // Directive *note that the HTML <product-title> translates to camel case in js (productTitle)
app.directive('productTitle',function(){

    // returns a configuration object defining how directive will work.
    return{
        //restrict: 'E', // Type of Directive i.e E for Element
        restrict: 'A',
        templateUrl : 'product-title.html'

    };
});

app.directive('productPanels',function(){

    return{
        restrict: 'E',
        templateUrl: 'product-panels.html',
        controller: function(){

        },
        controllerAs: 'panels' // Alias
    }
});


})();