
// alert("what's good bitch"); //makes a pop-up box appear in the browser when loading the page








// original stuff from Mozzila tutorial
let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/joe-biden.jpg') {
        myImage.setAttribute('src', 'images/donald-trump.png');
    } else {
        myImage.setAttribute('src', 'images/joe-biden.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Grundle Huncho approves of ' + myName + ' ya little bitch.';
    }
}



myButton.onclick = function () {
    setUserName();
}
