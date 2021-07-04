
// Nav btn
const ham = document.getElementById('ham');
const menu = document.getElementById('opt');

ham.addEventListener("click", function(){ 
    menu.classList.toggle('height');
    menu.classList.toggle('animate__animated');
    menu.classList.toggle('animate__fadeInDown');
 });

