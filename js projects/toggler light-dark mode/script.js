let toggle = document.getElementById('toggle');
let ball = document.getElementById('ball');
let body = document.getElementsByTagName('body');
let txt = document.getElementsByTagName('h1');
let mode = true;

toggle.addEventListener('click', function () {
    if(mode == true){
        ball.style.left = '60px';
        body[0].style.backgroundColor = 'black';
        txt[0].style.color = 'white';
        mode = false;
    }
    else{
        ball.style.left = '0';
        body[0].style.backgroundColor = 'white';
        txt[0].style.color = 'black';
        mode = true;
    }
});