// counter code
var button = document.getElementById('counter');
 
button.onclick = function(){
 
  // create a requset object
  var request = new XMLHttpRequest();
  
  // capture the response and store it in a variable
  request.onreadystatechange = function(){
    if(request.readystate === XMLHttpRequest.DONE) {
        // take some action
        if (request.status === 200){
            var counter = request.responseText;
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();
        }  
    }
  };

// Make a request
request.open('GET', 'sunilmg1.imad.hasura-app.io/counter', true);
request.send(null);
};