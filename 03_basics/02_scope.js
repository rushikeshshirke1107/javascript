let num=12;
function add(num2){     // here num is global and num2 is local 
   return num+num2
}
console.log(add(5))
//console.log(num2);  // we cant acess local stored parameteres.


movie()     // we can call a function before the fumction defination if it isdeclaired like this.
function movie(){
    const name="bahubali"
    function film(){
        const director="ss rajamouli"
        console.log(`the name of the movie is ${name}`);
    }
    //console.log(`the director of the movie is ${director}`); director is local variable
    film()
}
//movie()



//************************** Another Method to declaire a function *************************

employee("raj",500000) // function declaired of this type Cannot access (function) 'employee' before initialization

const employee=function(name,salary){
    console.log(`Name of the employee is ${name} and slary is ${salary}`)
}
//employee("raj",500000)