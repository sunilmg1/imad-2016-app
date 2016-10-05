// counter code
var button = document.getElementById('counter');
 
button.onclick = function(){
 
  // create a requset object
  var request = new XMLHttpRequest();
  
  // capture the response and store it in a variable
  request.onreadystatechange = function(){
    if(request.readyState === XMLHttpRequest.DONE) {
        // take some action
        if (request.status === 200){
            var counter = request.responseText;
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();
        }  
    }
  };

// Make a request
request.open('GET', 'http://sunilmg1.imad.hasura-app.io/counter', true);
request.send(null);
};

var nameinput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function() {
 
 var names = ['name1','name2','name3','name4'];
 var list = '';
 for(var i =o; i<names.length; i++) {
     
     list += '<li>' + names[i] + '</li>';
 }
   var ul = document.getElementById('namelist');
   ul.InnerHTML = list;
}