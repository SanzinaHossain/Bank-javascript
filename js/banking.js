document.getElementById('deposite-submit').addEventListener('click',function() {
    const deposite=document.getElementById('deposite');
    const depoAmount=parseFloat(deposite.value);

    const depositeB=document.getElementById('deposite-b');
    const previous=  parseFloat(depositeB.innerText);
    const total=depoAmount+previous;
    depositeB.innerText=total;

    const totalB=document.getElementById('total-b')
    const balance=parseFloat(totalB.innerText);

    const t=balance+depoAmount;
    totalB.innerText=t;
    
    deposite.value='';


})


document.getElementById('withdraw-submit').addEventListener('click',function(){
       const withdraw=document.getElementById('withdraw');
       const withAmount=parseFloat(withdraw.value);

       const withdrawb=document.getElementById('withdraw-b');
       withdrawb.innerText=withAmount+parseFloat(withdrawb.innerText);

       const totalB=document.getElementById('total-b')
       const balance=parseFloat(totalB.innerText);

       const t=balance-withAmount;
        totalB.innerText=t;
       withdraw.value='';
})