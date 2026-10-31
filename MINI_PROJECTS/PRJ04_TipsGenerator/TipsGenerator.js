
let Money ;
let TipsPercentage;
let CalculatedTipsMoney;

function TipCalculation(){
    Money= document.getElementById("Money").value;
    TipsPercentage = document.getElementById("TipsPercentage").value;
    CalculatedTipsMoney= (Money*(TipsPercentage/100));

    document.querySelector('#CalculatedTipsMoney').value=`${CalculatedTipsMoney}`;
}

function TipCalculationReset(){
    Money=0;
    TipsPercentage=0;
    CalculatedTipsMoney='';

    document.querySelector('#Money').value=Money;
    document.querySelector('#TipsPercentage').value=TipsPercentage;
    document.querySelector('#CalculatedTipsMoney').value=CalculatedTipsMoney;
}