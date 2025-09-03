
const secondhand = document.querySelector('.second-hand');
const minutehand = document.querySelector('.minute-hand');
const hourhand = document.querySelector('.hour-hand');

function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondangle = (((seconds/60)*360)+90);
    secondhand.style.transform = `rotate(${secondangle}deg)`;

    const minute = now.getMinutes();
    
    const hour = now.getHours();

    const minangle = (((minute/60)*360)+90);

    const hourangle = (((hour/12)*360)+90);

    minutehand.style.transform = `rotate(${minangle}deg)`;

    hourhand.style.transform = `rotate(${hourangle}deg)`;
}

setInterval(setDate,1000)