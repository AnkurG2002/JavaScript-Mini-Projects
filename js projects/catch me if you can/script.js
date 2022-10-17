"use strict";
let box = document.getElementById('box');

let boxLeft = box.offsetLeft;
let boxTop = box.offsetTop;
let boxWidth = box.clientWidth;
let boxHeight = box.clientHeight;

// console.log(boxLeft, boxTop, boxWidth, boxHeight)

let browserW = document.documentElement.clientWidth;
let browserH = document.documentElement.clientHeight;

box.addEventListener('mouseenter', moveBox);

let newLeft,newTop;
function moveBox(event){
	newLeft = Math.floor(Math.random()*browserW);
	newTop = Math.floor(Math.random()*browserH);

	//newTop and newLeft will be different values than the previous ones
	while(newTop == boxTop && newLeft == boxLeft){
		if(newTop == boxTop)
			newTop = Math.floor(Math.random()*browserH);
		else
			newLeft = Math.floor(Math.random()*browserW);
	}

	let correctL = false , correctT = false;
	while(!correctL || !correctT){ //it wont go out of browser viewport
		if(newLeft + boxWidth <= browserW)
			correctL = true;
		else
			newLeft = Math.floor(Math.random()*browserW);

		if(newTop + boxHeight <= browserH)
			correctT = true;
		else
			newTop = Math.floor(Math.random()*browserH);
	}
	toDo(box.offsetTop, box.offsetLeft, newTop, newLeft);
}
let id ;
function toDo(intialTop, intialLeft, finalTop, finalLeft){
    id = setInterval(function(){
         sendToDesti(finalTop, finalLeft, id);
    }, 1);
}
function sendToDesti(finalTop, finalLeft, id){
	let intialTop = box.offsetTop;
	let intialLeft = box.offsetLeft;

    if(intialTop == finalTop && intialLeft == finalLeft){
        clearInterval(id);
        return;
	}
	if(intialLeft < finalLeft){
        if(intialLeft + 20<=finalLeft)
            intialLeft += 20;
        else
            intialLeft = finalLeft;
    }
	else{
		if(intialLeft - 20 >= finalLeft)
			intialLeft -= 20;
		else
			intialLeft = finalLeft;
	}

	if(intialTop < finalTop){
        if(intialTop + 20 <= finalTop)
            intialTop += 20;
        else
            intialTop = finalTop;
    }
	else{
		if(intialTop - 20 >= finalTop)
			intialTop -= 20;
		else
			intialTop = finalTop;
	}
	box.style.left = intialLeft + 'px';
	box.style.top = intialTop + 'px';
}