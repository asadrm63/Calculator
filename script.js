
const buttons = document.querySelectorAll("button");
const operators = document.querySelectorAll(".operators");
const equalsButton = document.getElementById('equals-button');
const clearButton = document.getElementById('clear');
const output = document.querySelector(".output");
const clock = document.querySelector(".clock");
const percent = document.querySelector("#percent");
const negative = document.querySelector("#neg");
let a =0
let b =0;


//showing actual time
let today = new Date();
let time = today.getHours() + ":" + today.getMinutes()
clock.innerText = time;
// let currenttime =setTimeout(time, 60)


//trying to update the clock every minute
setInterval(() => {
    let today = new Date();
let time = today.getHours() + ":"  + today.getMinutes()
}, 20000 )

//if minute <10 then add 0
if (today.getMinutes() <10) {
    "0" + today.getMinutes().toString();
}
else {+ today.getMinutes()};


    // clock.innerText = time; 
    // console.log(time)
 

 equalsButton.style.backgroundColor = "#f1a33c"; 

// attach each button with event listner
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
    // Get the values of the display and save as variables
    const equation = output.innerText
     a= parseInt(equation.split(`${ops}`)[0])
     b= parseInt(equation.split(`${ops}`)[1])

    // use calculator function
    const result = calculator(a,ops,b);
  
    // Set the display value to the result
    output.innerText = result;
  });


  percent.addEventListener('click', (e) => {
    let numpercent = parseInt(output.innerText)/100 
    output.innerText = numpercent
});

negative.addEventListener('click', (e) => {
    let negpos= parseInt(output.innerText)*-1
    output.innerText = negpos
});

  clearButton.addEventListener("click", () =>  {
  output.innerText =""
  });

  
function calculator(a,ops,b){
    if (ops == "+"){
       return a + b
    }
       else if (ops === '-') {return a - b;}
      else if (ops === '*') {return a * b;}
      else{ return a/b;}
    }


