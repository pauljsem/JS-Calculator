$(document).ready(function() {
  let count = 0;
  let arr = []; //arr for holding the input string
  let expression = ""; 
  let decCount = 0; //counts the number of consecutive decimal presses
  $("button").click(function() {
 let input = ($(this).attr("value")); 
 if ($(this).hasClass("decimal")){ //counts decimals
   decCount++;
   if(decCount > 1){
     input = ""; //prevents consecutive decimals without being on different sides of an operator
   }
 }
    if(arr.length > 19) {
   arr = [];
      console.log(arr.length);
  }
 if(isNaN(parseInt(this)) && $(this).hasClass("operators")) {//checks for an operator and resets decimal count to allow the use on the right-hand side of the expression
    count++;
   decCount = 0;
   if(count > 1){
     input = "";
   }
   if (arr.length === 0 && isNaN(parseInt(arr[arr.length-1]))){
     input = ""; //erase any input that is not a number (first entry)
      }
    }  
  else if($(this).hasClass("nums") ){
    count = 0;
 }   //console.log(count);  
    if(!$(this).hasClass("redButton") && !$(this).hasClass("equals") ){ 
    arr.push(input);//if the button is red but not the equal sign, push it to the expression array
    }

   if(($(this).hasClass("clearEntry"))){
   arr.pop();   //remove the last entry 
   }  
 expression = arr.join("");//join the arr to a string
 $("#answerScreen").html("<p>"+expression+"</p>");//output the string on the screen
    
    $('#clear').click(function() { //clear the expression
        $("#answerScreen").html(" ");
              arr = [];
              count = 0;
              decCount = 0;
              expression = "";
          });
    $('#equalsButton').click(function() {
      if (eval(expression) === Infinity){ //if the expression evaluates to 0, it will return infinity, hence dividing by zero error on the next line
        $("#answerScreen").html("<h2> CAN'T DIVIDE BY 0 </h2>");
      }
      else {
       expression = eval(expression); //expression evaluates and shows the result
        $("#answerScreen").html("<p>"+expression+"</p>"); //result shows here
        arr = [expression.toString()];
         }
     });
   });
});
