
// alert("what's good bitch"); //makes a pop-up box appear in the browser when loading the page


document.getElementById("3").onclick = replyclick()
document.getElementById("4").onclick = replyclick()

const replyclick = function () {
    const links = {
        "1": "../html/fun/fun-index.html",
        "2": "../html/projects/projects-index.html",
        "3": "../html/research/research-index.html",
        "4": "../html/essays/essays-index.html"
    }
    window.location.href = links[this.id];
}







// original stuff from Mozzila tutorial
/* let myImage = document.querySelector('img');

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
*/
