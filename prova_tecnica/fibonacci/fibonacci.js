function checkFibonacci(){
    let fibonacci=document.getElementById('fibonacci').value;
        let firstNumber=0;
        let secondNumber=1;
        let result;
        let feedback=document.createElement('p');
        let output=document.getElementById('result');
        output.innerText='';
        feedback.innerText='';

    for(let index=0;index<=(fibonacci);index++){
        let p=document.createElement('p');
        result=firstNumber+secondNumber;
        if(result==fibonacci){
            feedback.style.color='green';
            feedback.innerText='O Valor está na sequência de Fibonacci: '+result;
            output.appendChild(feedback);
            break;
        }
        p.innerHTML=result;
        firstNumber=secondNumber;
        secondNumber=result;

        feedback.style.color='#F00';
        feedback.innerText='O Valor não está na sequência de Fibonacci: '+fibonacci;
        output.appendChild(feedback);
    }
}