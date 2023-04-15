const startBtm = document.querySelector('button[data-start]');
const stopBtm = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

startBtm.addEventListener('click', startColorChange);
stopBtm.addEventListener('click', stopColorChange)

let colorId;

function startColorChange() {
    colorId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
    }, 1000); 

    
}

function stopColorChange() {
    clearInterval(colorId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}




