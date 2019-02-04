var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/laferrari.png') {
      myImage.setAttribute ('src','images/Ferrari488.jpg');
    } else {
      myImage.setAttribute ('src','images/laferrari.png');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Ferrari Supercar Hire, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Ferrari Supercar Hire, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
