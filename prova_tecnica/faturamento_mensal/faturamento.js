let estados=[
    {'estado':'SP','faturamento':67836.43},
    {'estado':'RJ','faturamento':36678.66},
    {'estado':'MG','faturamento':29229.88},
    {'estado':'ES','faturamento':27165.48},
    {'estado':'Outros','faturamento':19849.53}];

let porcentagem=[
    {'estado':'sp','porcentagem':0},
    {'estado':'rj','porcentagem':0},
    {'estado':'mg','porcentagem':0},
    {'estado':'es','porcentagem':0},
    {'estado':'outros','porcentagem':0}];

let soma=0;

estados.map((num)=>{
    soma+=num['faturamento'];
})

function calculaPorcentagem(valor,total){
    let result1=valor*100;
    let result2=result1/total;

    return Math.round(result2);
}

let resultados=document.getElementById('resultados');

for(let i=0;i<estados.length;i++){
    porcentagem[i]['porcentagem']=calculaPorcentagem(estados[i]['faturamento'],soma);
    let row=document.createElement('tr');
    let td_estado=document.createElement('td');
    let td_valor=document.createElement('td');
    let td_porcentagem=document.createElement('td');

    td_estado.innerText=estados[i]['estado'];
    td_valor.innerText=estados[i]['faturamento'];
    td_porcentagem.innerText=porcentagem[i]['porcentagem']

    row.appendChild(td_estado);
    row.appendChild(td_valor);
    row.appendChild(td_porcentagem);
    

    resultados.append(row);
}