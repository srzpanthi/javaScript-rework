// Immediatately invoked function expression(IIFE)

// To prevent global scope pollution problem, IIFE is used
// ()()

(function tea(){
    console.log("Using IIFE")

}) (); // we need to add semicolon after IIFE to end it explicitly


(function code(){
    console.log("using IIFE")
} )();


((name)=>{
    console.log(`Welcome ${name}`)

})("Saroj");



(function anotherCode(){
    console.log("Another IIFE")
}) ()


// JavaScript execution context
//{}- global execution context -this
// function execution context
// Eval execution context


//1. memory execution phase
//2. Execution phase






