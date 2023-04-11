// click number
    // attach each button with event listner
//operate
//show result

//should use loops
//cant use evaluate
// = can submit or can operate with each set of nummbers
// useincludes method?
//array?
//

// use seperate class for number / operators/ =

// put limit of one operator
// how is it going to compute


const buttons = document.querySelectorAll("button");
const operators = document.querySelectorAll(".operators");
const equalsButton = document.getElementById('equals-button');
const clearButton = document.getElementById('clear');
const output = document.querySelector(".output");
const clock = document.querySelector(".clock");
let a =0
let b =0;

// let result = "";

//showing actual time
let today = new Date();
let time = today.getHours() + ":" + today.getMinutes()
clock.innerText = time;
// let currenttime =setTimeout(time, 60)


//trying to update the clock every minute
setInterval(() => {
    let today = new Date();
let time = today.getHours() + ":"+ today.getMinutes();


if (today.getMinutes() <10) {
    + "0" + today.getMinutes();
}
else {+ today.getMinutes()};


    clock.innerText = time; 
    console.log(time)
  }, 20000 )

//if minute <10 then add 0

// clock.innerText = time

 equalsButton.style.backgroundColor = "orange"; 


buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        output.innerText += button.value 
    });
  });

  let ops = '';

  operators.forEach(operator => {
    operator.addEventListener('click',() => {
        ops = operator.value;
        console.log(ops)
    })
  })


  equalsButton.addEventListener('click', () => {
    // Get the value of the input box
    const equation = output.innerText
     a= parseInt(equation.split(`${ops}`)[0])
     b= parseInt(equation.split(`${ops}`)[1])

    // use calculator function
    const result = calculator(a,ops,b);
  
    // Set the input box value to the result
    output.innerText = result;
  });



  clearButton.addEventListener("click", () =>  {
  output.innerText =""
  });



  //when = cliked on evaluate equation 
  // save fisrt digits to a variable 
  // save operator 
  // save second set of variable
  
function calculator(a,ops,b){
    if (ops == "+"){
       return a + b
    }
       else if (ops === '-') {return a - b;}
      else if (ops === '*') {return a * b;}
      else{ return a/b;}
    }


