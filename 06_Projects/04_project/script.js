const input=document.getElementById('input');
const submit=document.querySelector('#sbmt')
const prevguess=document.querySelector('#prevguess');
const remslots=document.querySelector('#remainingslots');
const lowhigh=document.querySelector('#lowhigh')
const container=document.querySelector('.container')

const p=document.createElement('p');
const previous=[]
let totalchances=1;
const random=parseInt(Math.random())*10+1


const startgame=true
if(startgame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess=parseInt(input.value);
        console.log(input.value)
        validatenum(guess);
    });
}
function validatenum(guess){
    if(isNaN(guess)){
        alert(`Please enter a valid number ${guess}`);
    }else if(guess>100){
        alert("Please enter a number less than 100");
    }else if(guess<1){
        alert("Please enter greater than 1");
    }else{
        previous.push(guess);
        if(totalchances===0){
            displaymessage(`the random Number is ${random}`)
            endgame();
        }
    }
}
function checkvalue(guess){
    if(random===guess){
        displaymessage("You guessed correct number")
        displayguess(guess);
        endgame();
    }else if(random>guess){
        displaymessage("the number is too small")
    }else{
        displaymessage("the number is too high")
    }
}
function displaymessage(message){
}

function displayguess(guess){
    input.value=''
    remslots.innerHTML += `$(guess), `;
    totalchances++;
    remslots.innerHTML=`${10-totalchances}`;
} 


function startgame(){
    
}

function endgame(){

}



