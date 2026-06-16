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