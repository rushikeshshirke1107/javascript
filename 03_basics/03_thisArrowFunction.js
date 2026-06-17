const employee={
    name:"tushar",
    salary:558596,
    age:25,
    welcome:function(){
        console.log(`employee name is ${this.name}`);
        console.log(this)
    }
}
employee.welcome()
// employee.name="anuj"
// employee.welcome()      // this keword gives current context


//********************************* Arrow Function *********************************************

const add= (num1,num2)=>{   // Explicit arrow function needs return
    return num1+num2
}
console.log(add(15,42))

const sub=(num1,num2)=>num1-num2    // Implicit arrow function
console.log(sub(75,45));


const movie=(name)=> ({name:"kabali"})
console.log(movie());
