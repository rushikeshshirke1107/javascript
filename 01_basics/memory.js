//******************************STACK MEMORY************************
//ONLY PRIMITIVE DADA TYPES (NUMBER,BIGINT,STRING,BOOLEAN,SYMBOL,UNDEFINED,NULL) ARE STORED IN STACK 
//IT PROVIDES COPY OF THE ACTUAL DATA SO NO CHANGES ARE HAPPENED IN ORIGINAL ONES.

let email="rushikesh@gmail.com"
let email2=email
console.log(email2);

email2="jeevan@123"
console.log(email2);
console.log(email);

//********************************** HEAP MEMORY***************************** */
//ONLY NON PRIMITIVE DATA TYPES (OBJECTS,FUNCTIONS,ARRAY) ARE STORED IN HEAP MEMORY.
// IT PROVIDES ACTUAL REFERENCE OF THE VALUE SO IT CAN BE CHANGED.

 let emp={
    name:"raj",
    phone:7756482795
}
let emp2=emp
console.log(emp);
emp2.name="anuj"
console.log(emp);
