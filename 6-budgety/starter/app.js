//budget controller
var budgetController = (function() {


})();

//ui controller
var UIController = (function() {

  var DOMStrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn'
  };

  return {
    getInput: function() {

      return {
        type: document.querySelector(DOMStrings.inputType).value,
        description: document.querySelector(DOMStrings.inputDescription).value,
        value: document.querySelector(DOMStrings.inputValue).value,
      }
    },

    getDOMStrings: function() {
      return DOMStrings;
    }
  };

})();

//global app controller
var controller = (function(budgetCtrl, UIContrl) {

  var setupEventListeners = function() {
    var DOM = UIContrl.getDOMStrings();
    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
    document.addEventListener('keypress', function(event) {
       if (event.charCode === 13) {
         ctrlAddItem();
       }
    });
  };

  var ctrlAddItem = function() {
    var input = UIContrl.getInput();
    console.log(input);
  }
    //get input data
    //add item to budget budget budgetController
    //add new item to user user interface
    //calculate budget
    //display budget

    return {
      init: function() {
        console.log('Application has started.');
        setupEventListeners();
      }
    };

})(budgetController, UIController);

controller.init();
