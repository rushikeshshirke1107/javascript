const newobj= new Object()
console.log(newobj);

const user={
    id:"12asdf",
    user:"anuj",
    isLoggedIn:true
}
console.log(user);

newobj.id="15";
console.log(newobj);

const employee={
    id:"154fdd",
    fullname:{
        name:{
            firstName:"tushar",
            lastName:"Sankpal"
        }
    },
    salary:[15000,154200,85769],
    isLoggedIn:true
}

console.log(employee);
console.log(employee.fullname);
console.log(employee.fullname.name);
console.log(employee.salary[1]);

const arr=[
  {
    id:"4566",
    name:"tush"
},
{
    id:"n",
    name:"jeev"
},
{
    id: "785",
    name:"anj"
}
]

console.log(arr);
console.log(arr[1].name);

//const merge=Object.assign(arr,employee)
//console.log(merge);

//combine using spread object
const combine ={...arr,...employee}
console.log(combine);
console.log(arr);

//to check a object has a specific property

console.log(user.hasOwnProperty("user"));









