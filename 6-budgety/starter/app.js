var budgetController = (function() {
 var x = 23;
 var add = function(a) {
   return x + a;
 }

 return {
   publicTest: function(b) {
     return add(b);
   }
 }

})();

var userInterfaceController = (function() {


})();

var controller = (function(budgetCtrl, UIContrl) {

  var z = budgetCtrl.publicTest(5);

    return {
      anotherPublic: function() {
        console.log(z);
      }
    }

})(budgetController, userInterfaceController);
