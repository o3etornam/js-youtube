
const myButton = document.getElementById('myButton');
const myLabel = document.getElementsByClassName('myLabel');
const min = 1;
const max = 6;

myButton.onclick = () => {
    myLabel[0].textContent = Math.floor(Math.random() * max) + min;
    myLabel[1].textContent = Math.floor(Math.random() * max) + min;
    myLabel[2].textContent = Math.floor(Math.random() * max) + min;
    
}