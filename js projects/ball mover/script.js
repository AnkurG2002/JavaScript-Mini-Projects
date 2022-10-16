let ball = document.getElementById('ball');

window.addEventListener('keydown', move);

let L = 0;
let T = 0;

function move(event){
    let elementW = ball.offsetWidth;
	let browserW = document.documentElement.clientWidth;
	let browserH = document.documentElement.clientHeight;

    let key = event.key;
    if(key == 'W' || key == 'w'){    // up
        if(T - 10 >= 0){
            T -= 10;
            ball.style.top = T + 'px';
        }
    }
    else if(key == 'A' || key == 'a'){   // left
        if(L - 10 >= 0){
            L -= 10;
            ball.style.left = L + 'px';
        }
    }
    else if(key == 'S' || key == 's'){   // down
        if(T + elementW + 10 <= browserH){
            T += 10;
            ball.style.top = T + 'px';
        }
        else{
            ball.style.top = browserH - elementW + 'px';
        }
    }
    else if(key == 'D' || key == 'd'){    // right
        if(L + elementW + 10 <= browserW){
            L += 10;
            ball.style.left = L + 'px';
        }
        else{
            ball.style.left = browserW - elementW + 'px';
        }
    }
}