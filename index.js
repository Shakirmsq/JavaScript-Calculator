//Take screen or Output:
let screen = document.getElementById('screen');

//Now Take all buttons: 
buttons = document.querySelectorAll('button');

let screenValue ='';
for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        console.log('Button Text is', buttonText);

        if(buttonText=='x'){
            buttonText='*';
            screenValue +=buttonText;
            screen.value= screenValue;
            //or we can do
            // screen.Value = buttonText;
        }
        else if (buttonText=='C'){
            screenValue="";
            screen.value = screenValue;
        }
        else if (buttonText=='='){
            screen.value= eval(screenValue);    
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}