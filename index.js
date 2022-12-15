function updateNumber(isIncreasing ,product,price){
    const inputValue = document.getElementById(product);
    let getValue = inputValue.value;
    if(isIncreasing == true){
        getValue = parseInt(getValue) +1;
    }
    else if(getValue > 0){
        getValue = parseInt(getValue) -1;
    }
    inputValue.value = getValue;
    
    const prize = document.getElementById(price);
    if(price == 'phone-price'){
        prize.innerText = getValue * 1000;
    }
    else{
        prize.innerText = getValue * 50;
    }
    calculation();
    
}

document.getElementById('phone-plus').addEventListener('click',function(){
    updateNumber(true,'phone-feild-value','phone-price');
});
document.getElementById('phone-minus').addEventListener('click',function(){
    updateNumber(false,'phone-feild-value','phone-price');
});
document.getElementById('case-plus').addEventListener('click',function(){
    updateNumber(true,'case-feild-value','case-price');
});
document.getElementById('case-minus').addEventListener('click',function(){
    updateNumber(false,'case-feild-value','case-price');
});

function calculation(){
    const feildValuePhone = document.getElementById('phone-feild-value').value;
    const feildValueCase = document.getElementById('case-feild-value').value;

    let phoneTotal = feildValuePhone *1000;
    let caseTotal = feildValueCase *50;

    const subtotal = phoneTotal + caseTotal;
    const tax = subtotal /10;
    const total = subtotal + tax;
    

    const subtotalfeild = document.getElementById('sub-total');
    subtotalfeild.innerText = subtotal;

    const taxfeild = document.getElementById('tax');
    taxfeild.innerText = tax;

    const totalfeild = document.getElementById('total');
    totalfeild.innerText = total;
}