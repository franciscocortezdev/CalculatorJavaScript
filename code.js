const container = document.getElementById("container-grid"),
        screen = document.querySelector('.screenP');

var op1 = false;
var numero1;
var numero2; 
var operationSelected;
     


container.addEventListener('click', e =>{
    console.log(e.target.innerHTML);
    const t = e.target.classList;
    if(t[0] == 'number'){
        nameBtn =  e.target.innerHTML;
        if(nameBtn == '.' && screen.textContent.includes('.')){
           
        }else{
            showInScreen(nameBtn);
        }

    }else if(t[0] == 'math'){
        nameMath =  e.target.innerHTML;
        operationSelected = nameMath;
        operationMath(nameMath);

        
    }else if(t[0] == 'operation'){
        nameOP = e.target.innerHTML;
        if(nameOP == 'C'){
            screen.textContent = '';

        }else{
            resultado();
        }
        
    }
});

const showInScreen = nameBtn =>{
    if (op1){
        screen.textContent = nameBtn;
        op1 = false; 
    }else{
        screen.textContent += nameBtn;
        
    }
    
}

const operationMath = nameMath =>{
    if (screen.textContent == nameMath){
        
    }else{
        if(screen.textContent.length == 0){
            
        }else{
        numero1 = parseFloat(screen.textContent);
        op1 = true;
        
        screen.textContent = nameMath;
        }
        
        
        
    }
    

}

const resultado = ()=>{
    
    if (numero1 == ''){
        console.log('nel');
    }else{
        numero2 = parseFloat(screen.textContent);
        let resultado;
    
    switch (operationSelected) {
        case '+':
          resultado = numero1 + numero2;
          screen.textContent = resultado;
          numero1 = '';
          numero2 = '';
        break;
        case '/':
            resultado = numero1 / numero2;
            screen.textContent = resultado;
        break;
        case '*':
            resultado = numero1 * numero2;
            screen.textContent = resultado;
        break;
        case '-':
            resultado = numero1 - numero2;
            screen.textContent = resultado;
        break;
      }
    }
    



}