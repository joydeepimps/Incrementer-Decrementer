let counter = 0;

//Get the Elements
const number = document.getElementById("number");
const inc = document.getElementById("increment");
const dec = document.getElementById("decrement");
const reset = document.getElementById("reset");

//Add event listeners
inc.addEventListener('click', incrementNumber);
dec.addEventListener('click', decrementNumber);
reset.addEventListener('click', resetNumber);



// Increment function
function incrementNumber() {
    counter++;
    number.innerText = counter;
}

//Decrement function
function decrementNumber() {
    counter--;
    number.innerText = counter;
}

//Reset Number
function resetNumber() {
    counter = 0;
    number.innerText = 0;
}




