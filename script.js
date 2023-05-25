//add function

function add(num1, num2) {
    return (num1 + num2);
};

//subtract dunction

function subtract(num1,num2) {
    return (num1 - num2);
};

//multiply function
function multiply(num1, num2) {
    return (num1 * num2);
};

//divide function

function divide(num1, num2) {
    return (num1 / num2);
};


// create an input variable for dig1 dig2 and operator . These inputs will be collected from user input from calculator buttons. 
// counter variable added in order to store whether or not the operator buttons have pressed. 

let dig1 = "";
let dig2 = "";
let operator = "";
let counter = 0;

//operator function for making the correct mathmetical operation


function operate(dig1, dig2, operator) {
    if (operator == "+") {
        return add(dig1, dig2);
    } else if (operator == "-") {
        return subtract(dig1, dig2);
    } else if (operator == "*") {
        return multiply(dig1, dig2);
    } else if (operator == "/") {
        return divide(dig1,dig2);
    };
};

// functions to populate display div when clicked the corrospoding number button.

const displayBoard = document.getElementById("display");


const buttonSeven = document.getElementById("seven");
buttonSeven.addEventListener("click", () => {
    if (operator != '') {
        if (counter == 1) {counter = 0;
            dig1 = Number(displayBoard.innerHTML); 
            displayBoard.innerHTML="";
                            };};
    displayBoard.innerHTML += Number(7)
    ;});
    

const buttonEight = document.getElementById("eight");
buttonEight.addEventListener("click", () => {
    if (operator != '') {
        if (counter == 1) {counter = 0;
            dig1 = Number(displayBoard.innerHTML); 
            displayBoard.innerHTML="";
                            };}; 
        displayBoard.innerHTML += Number(8);});

const buttonNine = document.getElementById("nine");
buttonNine.addEventListener("click", () => {
    if (operator != '') {
        if (counter == 1) {counter = 0;
            dig1 = Number(displayBoard.innerHTML); 
            displayBoard.innerHTML="";
                            };}; 
        displayBoard.innerHTML += Number(9);});

const buttonDivide = document.getElementById("divide");
buttonDivide.addEventListener("click", () => {
    if (operator == "") {operator = "/";
    counter = 1;} 
    else if (dig1 != "" && dig2 == "") {
        dig2 = Number(displayBoard.innerHTML); 
        dig1 = operate(dig1, dig2, operator);
        displayBoard.innerHTML = dig1;
        dig2 = "";
        counter = 1;
        operator = "/" } });

const buttonFour = document.getElementById("four");
buttonFour.addEventListener("click", () => {
    if (operator != '') {
        if (counter == 1) {counter = 0;
            dig1 = Number(displayBoard.innerHTML); 
            displayBoard.innerHTML="";
                            };};
        displayBoard.innerHTML += Number(4);});

const buttonFive = document.getElementById("five");
buttonFive.addEventListener("click", () => {
    if (operator != '') {
        if (counter == 1) {counter = 0;
            dig1 = Number(displayBoard.innerHTML); 
            displayBoard.innerHTML="";
                            };};
        displayBoard.innerHTML += Number(5);});

const buttonSix = document.getElementById("six");
buttonSix.addEventListener("click", () => {
    if (operator != '') {
        if (counter == 1) {counter = 0;
            dig1 = Number(displayBoard.innerHTML); 
            displayBoard.innerHTML="";
                            };};
        displayBoard.innerHTML += Number(6);});

const buttonMultiply = document.getElementById("multiply");
buttonMultiply.addEventListener("click", () => {
    if (operator == "") {operator = "*";
    counter = 1;} 
    else if (dig1 != "" && dig2 == "") {
        dig2 = Number(displayBoard.innerHTML); 
        dig1 = operate(dig1, dig2, operator);
        displayBoard.innerHTML = dig1;
        dig2 = "";
        counter = 1;
        operator = "*" } });

const buttonOne = document.getElementById("one");
buttonOne.addEventListener("click", () => {
    if (operator != '') {
        if (counter == 1) {counter = 0;
            dig1 = Number(displayBoard.innerHTML); 
            displayBoard.innerHTML="";
                            };};
        displayBoard.innerHTML += Number(1);});

const buttonTwo = document.getElementById("two");
buttonTwo.addEventListener("click", () => {
    if (operator != '') {
        if (counter == 1) {counter = 0;
            dig1 = Number(displayBoard.innerHTML); 
            displayBoard.innerHTML="";
                            };};
        displayBoard.innerHTML += Number(2);});

const buttonThree = document.getElementById("three");
buttonThree.addEventListener("click", () => {
    if (operator != '') {
        if (counter == 1) {counter = 0;
            dig1 = Number(displayBoard.innerHTML); 
            displayBoard.innerHTML="";
                            };};
        displayBoard.innerHTML += Number(3);});

const buttonSubtract = document.getElementById("subtract");
buttonSubtract.addEventListener("click", () => {
    if (operator == "") {operator = "-";
    counter = 1;} 
    else if (dig1 != "" && dig2 == "") {
        dig2 = Number(displayBoard.innerHTML); 
        dig1 = operate(dig1, dig2, operator);
        displayBoard.innerHTML = dig1;
        dig2 = "";
        counter = 1;
        operator = "-" } });

const buttonZero = document.getElementById("zero");
buttonZero.addEventListener("click", () => {
    if (operator != '') {
        if (counter == 1) {counter = 0;
            dig1 = Number(displayBoard.innerHTML); 
            displayBoard.innerHTML="";
                            };};
        displayBoard.innerHTML += Number(0);});

// Equals button should trigger the operate function . 

const buttonEquals = document.getElementById("equals");
buttonEquals.addEventListener("click", () => {
    if (dig1 != ""){dig2 = Number(displayBoard.innerHTML);
    displayBoard.innerHTML = operate(dig1, dig2, operator);
    dig1 = displayBoard.innerHTML;
    operator = "";
    counter = 1;};

});

const buttonPlus = document.getElementById("plus");
buttonPlus.addEventListener("click", () => {
    if (operator == "") {operator = "+";
    counter = 1;} 
    else if (dig1 != "" && dig2 == "") {
        dig2 = Number(displayBoard.innerHTML); 
        dig1 = operate(dig1, dig2, operator);
        displayBoard.innerHTML = dig1;
        dig2 = "";
        counter = 1;
        operator = "+" } });

// Reset and delete buttons

const buttonReset = document.getElementById("reset");
buttonReset.addEventListener("click", () => {location.reload();});

const buttonDelete = document.getElementById("delete");
buttonDelete.addEventListener("click", () => {displayBoard.innerHTML = displayBoard.innerHTML.toString().slice(0,-1);});


//if operator pressed store the existing number to dig1
