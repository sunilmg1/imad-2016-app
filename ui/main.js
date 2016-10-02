console.log('Loaded!');

// change the text of the main text
var element = document.getElementById('main-text');

element.InnerHTML = 'New value';

// move the image
var img =document.getElementById('madi');
madi.onclick = function(){
  img.style.marginLeft = '100px';  
};