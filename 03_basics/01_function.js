function hello(){
console.log(" hello world");
}
hello()

function addition(num1,num2){
console.log(num1+num2);
}
addition(45,54)

function add(num1,num2){
return num1+num2;   // return only stores the value it doesnt print anything
}
console.log(add(45,54));

function welcome(name="raj"){                   // default parameter
    return `hello ${name} welcome to the jungle`
}

console.log(welcome("omkar"));

function mycart(price){
    console.log(price);
}
mycart(200);
mycart(200,300,500);    // in this function returns only first value so we use spread operator.

function myCart(...price){
    console.log(`the price of the cart is ${price}`)
}
myCart(200,500,1000);      //spread operator assigns all values in single array.

// Giving object as parameter

const emp={
    name:"raj",
    salary:"54000"
}
function empDetails(employee){
    return `name of the empolyee is ${employee.name} and salary is ${employee.salary}`
}
console.log(empDetails(emp));

//giving array as parameter

const arr=[200,500,752,888]

function getarray(array){
    console.log(array[2]);
    
    return array
}
console.log(getarray(arr));
