const startBtm = document.querySelector('button[data-start]');
const stopBtm = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

startBtm.addEventListener('click', startColorChange);
stopBtm.addEventListener('click', stopColorChange);

let colorId;
stopBtm.disabled = true;

function startColorChange() {
    colorId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
    }, 1000); 

    startBtm.disabled = true;
    stopBtm.disabled = false;
}

function stopColorChange() {
    clearInterval(colorId);
    startBtm.disabled = false;
    stopBtm.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}




