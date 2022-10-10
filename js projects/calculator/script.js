let btn = document.getElementsByTagName('td');
let screen = document.getElementById('screen');
let operator = null;
let evaluated = false;
let pointUsed = false;

for(let i=0; i<btn.length; i++){
    btn[i].addEventListener('click', function(){
        let value = this.getAttribute('data-value');

        switch(value){
            case '+':
                if(operator != null){
                    break;
                } 
                operator = '+';
                screen.innerText += operator;
                evaluated = false;
                break;
            case '-': 
                if(operator != null){
                    break;
                } 
                operator = '-';
                screen.innerText += operator;
                evaluated = false;
                break;
            case '*': 
                if(operator != null){
                    break;
                } 
                operator = '*';
                screen.innerText += operator;
                evaluated = false;
                break;
            case '/': 
                if(operator != null){
                    break;
                } 
                operator = '/';
                screen.innerText += operator;
                evaluated = false;
                break;
            case '=': 
                screen.innerText = eval(screen.innerText);
                evaluated = true;
                pointUsed = false;
                break;
            case '%': 
                let operand1 = parseFloat(screen.innerText);
                screen.innerText = eval(operand1 + "/" + 100 );
                break;
            case 'AC':
                operator = null;
                pointUsed = false;
                screen.innerText = '0';
                break;
            default:
                operator = null;
                if(value == '.'){
                    if(pointUsed){
                        break;
                    }
                    pointUsed = true;
                }
                if(evaluated){
                    screen.innerText = '0';
                    evaluated = false;
                }
                if(screen.innerText == 'Infinity' || screen.innerText == 'NaN'){
                    screen.innerText = '0';
                }
                if(screen.innerText == '0'){
                    if(value != '.'){
                        screen.innerText = '';
                    }
                }
                screen.innerText += value;
        }
    });
}