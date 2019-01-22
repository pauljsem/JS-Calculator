$(document).ready(function() {
  let count = 0;
  let arr = [];
  let expression = "";
  let decCount = 0;
  $("button").click(function() {
 let input = ($(this).attr("value")); 
 if ($(this).hasClass("decimal")){
   decCount++;
   if(decCount > 1){
     input = "";
   }
 }
    if(arr.length > 19) {
   arr = [];
      console.log(arr.length);
  }
 if(isNaN(parseInt(this)) && $(this).hasClass("operators")) {
    count++;
   decCount = 0;
   if(count > 1){
     input = "";
   }
   if (arr.length === 0 && isNaN(parseInt(arr[arr.length-1]))){
     input = "";
      }
    }  
  else if($(this).hasClass("nums") ){
    count = 0;
 }   //console.log(count);  
    if(!$(this).hasClass("redButton") && !$(this).hasClass("equals") ){ 
    arr.push(input);
    }

   if(($(this).hasClass("clearEntry"))){
   arr.pop();   
   }  
 expression = arr.join("");
 $("#answerScreen").html("<p>"+expression+"</p>");
    
    $('#clear').click(function() {
        $("#answerScreen").html(" ");
              arr = [];
              count = 0;
              decCount = 0;
              expression = "";
          });
    $('#equalsButton').click(function() {
      if (eval(expression) === Infinity){
        $("#answerScreen").html("<h2> CAN'T DIVIDE BY 0 </h2>");
      }
      else {
       expression = eval(expression);
        $("#answerScreen").html("<p>"+expression+"</p>");
        arr = [expression.toString()];
         }
     });
   });
});
