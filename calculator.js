let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';


for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
       
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else if(buttonText== 'sin'){
            
                screen.value=Math.sin(screen.value);
        }
        else if(buttonText== 'cos'){
            
            screen.value=Math.cos(screen.value);
         }
         else if(buttonText== 'tan'){
            
        screen.value=Math.tan(screen.value);
         }
        else if(buttonText== '√'){
        
        screen.value=Math.sqrt(screen.value);
        }
        else if(buttonText== 'lg'){
        
        screen.value=Math.log(screen.value);
        }
        else if(buttonText== '1/X'){
        
        screen.value=1/(screen.value);
        }

        else if(buttonText == '&#928;'){
    
        screen.value=Math.PI(screen.value);
        }
        else if(buttonText == 'X2'){
    
            screen.value=Math.pow(screen.value, 2);
            }
    


        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}