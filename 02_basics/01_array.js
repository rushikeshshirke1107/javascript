const arr=[1,2,3,4,5,6,78,]
console.log(arr);
arr.push(10)        //insert element at the last
console.log(arr);
arr.pop()           //removes last element
console.log(arr);
arr.slice(1,3)      //creates new array with the given range excludes last elements
console.log(arr);
arr.splice(0,3)     //removes the element from the array and creates new array includes last elementconsole.log(arr);
console.log(arr);

console.log(arr.indexOf(78));
console.log(arr.includes(4));
arr.unshift(9)
console.log(arr);
arr.shift(9)
console.log(arr);

const newarr = arr.join()
console.log(arr);
console.log(newarr);

const marvel=["ironman"," thor","hulk"]
const dc=["superman","batman","flash"]
const allheros=marvel.concat(dc)
console.log(allheros);

const allnewheros=[...marvel,...dc]  // spreread is used to connect two arrays
console.log(allnewheros);

const arr1=[1,2,["raj","jeevan","anuj"],5,8,[1,21,5,8,45,65]]
const arr2=arr1.flat(Infinity);         //converts complex array into simple array
console.log(arr2)

console.log(Array.isArray("hitesh"));   //checks the given value is array or not
console.log(Array.from("hitesh"));      //converts given value into array




