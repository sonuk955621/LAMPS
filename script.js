const bulb = document.querySelector('.bulb');
const button = document.querySelector('button');
 
button.addEventListener('click', () => {
   if(bulb.classList.contains('lightup')) {
        bulb.classList.remove('lightup');
        button.textContent = "on";
    } else {
        bulb.classList.add('lightup');
        button.textContent = "off";
    }
});