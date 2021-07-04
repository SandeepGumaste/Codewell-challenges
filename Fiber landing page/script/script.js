
// Nav btn
const ham = document.getElementById('ham');
const menu = document.getElementById('opt');

ham.addEventListener("click", function(){ 
    menu.classList.toggle('height', 'animate__animated', 'animate__fadeInDown');
 });

