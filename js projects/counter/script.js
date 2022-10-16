let countInterval;

function startCounter(){
    
    let val = document.getElementById('num').value;
    let number = parseInt(val);

    if(isNaN(number)){
        alert('Please Enter a Number');
        clearInterval(countInterval);
        return;
    }
    if(number < 1 || number > 9){
        alert('Out of Range');
        clearInterval(countInterval);
        return;
    }

    let current = document.querySelector('.current')    ;
    let next = document.querySelector('.next');
    let count = 0;

    resetNumbers(current, next);
    clearInterval(countInterval);

    countInterval = setInterval(function () {
        if(count === number) {
            clearInterval(countInterval);
            alert("Counter has stopped");
            return;
        }
        increaseCount(current, next);
        count++;
    }, 1000);
}
function resetNumbers(currentNo, nextNo) {
    currentNo.innerText = 0;
    nextNo.innerText = 1;
}

function increaseCount(current, next){
    next.classList.add('animate');
    setTimeout(function(){
        current.innerText = next.innerText;
        next.classList.remove('animate');
        next.innerText = parseInt(next.innerText) + 1;
    }, 500);
}
