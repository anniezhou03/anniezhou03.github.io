// Switches the pictures

let myImage = document.querySelector('img');

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/IMG_8503.JPG") {
    myImage.setAttribute("src", "images/IMG_8124.JPG");
    myImage.style.width = "300px";
  } else {
    myImage.setAttribute("src", "images/IMG_8503.JPG");
  }
}

// Welcome message

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Nice to meet you, ' + myName;
    }
  }
  
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Nice to meet you, ' + storedName;
  }
  
  myButton.onclick = function() {
    setUserName();
  }