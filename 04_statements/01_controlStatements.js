// number is positive negative or zero
let num=5
if(num>0){
    console.log("num is positive");
}else if(num<0){
    console.log("number is negative");
}else{
    console.log("number is zero");
}

// even odd
if(num%2==0){
    console.log(`number ${num} is even`);
}else{
    console.log(`${num} is odd`);
    
}

// largest of three numbers

let a=5
let b=45
let c=15

if(a>b && a>c){
    console.log(`${a} is greater`);
}else if(b>a && b>c){
    console.log(`${b} is greater`);
}else{
    console.log(`${c} is greater`);
}

//leap year

year=2004
if(year%4==0){
    console.log(`${year} is leap`);
}else{
    console.log(`${year} is not a leap`);
}

//grades based on marks
let marks=1
if(marks>90 &&marks<=100){
    console.log("the grade is a");
}else if(marks>=81 &&marks<=89){
    console.log("the grade is b");   
}else if(marks>=71 && marks<=80){
    console.log("the grade is c");
}else if(marks>=61 && marks<=70){
    console.log("the grade is d");
}else if(marks<=60){
    console.log("result is fail");
}else{
    console.log("enter valid marks");
}

//write a program using switch to dispaly the week based on number
let day=5
switch(day){
    case 1:
        console.log("the day is Monday");
        break;
    case 2:
        console.log("the day is Tuesday");
        break;
    case 3:
        console.log("the day is wednesday");
        break;
    case 4:
        console.log("the day is thursday");
        break;
    case 5:
        console.log("the day is friday");
        break;
    case 6:
        console.log("the day is saturday");
        break;
    case 7:
        console.log("the day is sunday");
        break;       
}

// write a program using switch statement to create a simple calculator

let num1=52
let num2=75
let operator="/"

switch(operator){
    case"+":
    console.log("addition",num1+num2);
    break;
    case"-":
    console.log("Substraction",num1-num2);
    break;
    case"*":
    console.log("Multiplication: ",num1*num2);
    break;
    case"/":
    console.log("Division: ",num1/num2);
    break;
    
}