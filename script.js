// click number
    // attach each button with event listner
//operate
//show result



//should use loops
//cant use evaluate
// = can submit or can operate with each set of nummbers
// includes?
//array?
//


// use seperate class for number / operators/ =

// put limit of one operator
// how is it going to compute


const buttons = document.querySelectorAll("button");
// const numbers = document.querySelectorAll(".number");

// const button1 = document.querySelector(".button1")
// const button2 = document.querySelector(".button2")
// const button3 = document.querySelector(".button3")
// const plusbutton = document.querySelector(".plusbutton")
// const equalsbutton = document.querySelector(".equals")

const output = document.querySelector(".output");
let a =0;
let b =0;

let result = "";

// buttons.style.backgroundColor = "blue"; 


buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        output.innerText += button.value 
    });
  });


// addEventListener('click', (event)=> {
//     result+=1
//     output.innerText = result;
//     a += 1
//    }
//    )

// button1.addEventListener('click', (event)=> {
//  result+=1
//  output.innerText = result;
//  a += 1
// }
// )

// button2.addEventListener('click', (event)=> {
// result+=2
// output.innerText = result;
// b = 2
// }
// )

// button3.addEventListener('click', (event)=> {
// result+=3
// output.innerText = result;
// }
// )
// plusbutton.addEventListener('click', (event)=> {
// result+="+"
// output.innerText = result;
// }
// )
// equalsbutton.addEventListener('click', (event)=> {
//     output.innerText = a+b;
// }
// )



// function ops(a,operator,b){
//     if (operator === "+"){
//        return a + b
//     }
//        else if (operator === '-') {return a - b;}
//       else if (operator === '*') {return a * b;}
//       else{ return a/b;}
//     }


