let sym1= Symbol("jeevan")

const newuser={
    name:"Raj",
    [sym1]:"@",
    DOB:23/0o2/2003,
    position:"Developer",
    salary:65000

}

console.log(newuser.name);
console.log(newuser["position"]);
console.log(newuser.salary);
console.log(newuser[sym1]);

const greetings=function(){
    console.log("hello world");
    
}
console.log(greetings());



