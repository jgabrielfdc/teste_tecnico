let input=document.getElementById('input');
let output=document.getElementById('output');

function reverter(){
    let string=input.value;
    let saida='';
    if(string!==''){
        for(let i=string.length;i>=0;i--){
        if(i>=0){
                saida+=string[i];
            }
         }

        saida=saida.replace('undefined','');
        saida=saida.trim()  
    }
   
    document.getElementById('input2').innerText=`Entrada: ${string}`;
    output.innerText=`Saida: ${saida}`;
}