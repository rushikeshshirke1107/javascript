const calculate=document.getElementById("btn")
calculate.addEventListener('click',function(e){
    e.preventDefault()
    const height=parseInt(document.getElementById('height').value)
    const weight=parseInt(document.getElementById('weight').value)
    const bmi=weight/(height**2);
    const result=document.getElementById("result");
    result.textContent=`BMI: ${bmi.toFixed(2)}`;
})



