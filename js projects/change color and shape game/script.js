let changeColor = document.getElementsByClassName('btn')[0];
let outer = document.getElementById('out');
let changeShape = document.getElementsByClassName('btn')[1];
let inner = document.getElementById('square');

let color = ["#e91e63","#00bcd4","#ffeb3b","#129d17","#d736f4","#171010","blueviolet"];
let i = 0;
changeColor.addEventListener('click', function(){
    if(i == 7){
        i = 0;
    }
    outer.style.backgroundColor = color[i++];
});

let shape = ["square", "triangle", "circle"];
let j = 0;
changeShape.addEventListener('click', function(){
    if(j == 3){
        j = 0;
    }
    inner.id = shape[j++];
});