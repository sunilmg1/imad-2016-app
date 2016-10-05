// counter code
var button = document.getElementById('counter');
button.onclick = function(){
 
var counter = 0; 

  // make requset to the counter endpoint
  
  // capture the response and store it in a variable
  
  // render the variable in a correct span
  counter = counter + 1;
  var span = document.getElementById('counter');
  span.innerHTML = counter.toString();

};