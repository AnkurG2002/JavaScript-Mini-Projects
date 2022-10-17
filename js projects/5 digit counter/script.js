let btn = document.getElementById('btn');
btn.addEventListener('click', startCounter);

let countInterval;

function startCounter(){
    
    let val = document.getElementById('num').value;
    let number = parseInt(val);

    if(isNaN(number)){
        alert('Please Enter a Number');
        clearInterval(countInterval);
        return;
    }
    if(number < 1 || number > 99999){
        alert('Out of Range');
        clearInterval(countInterval);
        return;
    }

    let current = document.querySelectorAll('.current')    ;
    let next = document.querySelectorAll('.next');
    let count = 0;

    resetNumbers(current, next);
    clearInterval(countInterval);

    countInterval = setInterval(function (){
        if(count === number) {
            clearInterval(countInterval);
            alert("Counter has stopped");
            return;
        }
        let i = 4;
        if(count % 10 != 9){
            increaseCount(current[i], next[i]);
        }
        else{
            if(count < 99){
                current[i].innerText = '0';
                next[i].innerText = '1';
                i--;
            }
            else if(count < 999){
                let j = 2;
                while(j--){
                    current[i].innerText = '0';
                    next[i].innerText = '1';
                    i--;
                }
            }
            else if(count < 9999){
                let j = 3;
                while(j--){
                    current[i].innerText = '0';
                    next[i].innerText = '1';
                    i--;
                }
            }
            else if(count < 99999){
                let j = 4;
                while(j--){
                    current[i].innerText = '0';
                    next[i].innerText = '1';
                    i--;
                }
            }
            increaseCount(current[i], next[i]);
        }
        count++;
    }, 800);
}
function resetNumbers(currentNo, nextNo) {
    for(let i = 0; i < 5; i++){
        currentNo[i].innerText = 0;
        nextNo[i].innerText = 1;
    }
}

function increaseCount(current, next){
    next.classList.add('animate');
    setTimeout(function(){
        current.innerText = next.innerText;
        next.classList.remove('animate');
        next.innerText = parseInt(next.innerText) + 1;
    }, 500);
}
