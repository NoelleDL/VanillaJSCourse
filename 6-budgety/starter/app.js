//budget controller
var budgetController = (function() {


})();

//ui controller
var userInterfaceController = (function() {


})();

//global app controller
var controller = (function(budgetCtrl, UIContrl) {

  var ctrlAddItem = function() {
    console.log('it works');
  }

  document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);
    //get input data
    //add item to budget budget budgetController
    //add new item to user user interface
    //calculate budget
    //display budget


  document.addEventListener('keypress', function(event) {
     if (event.charCode === 13) {
       ctrlAddItem();
     }
  });


})(budgetController, userInterfaceController);
