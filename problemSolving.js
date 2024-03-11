// CHALLENGE 1

// Write a method or function that accepts a string. The method or function should return a boolean that describes whether or not
// the string has an even number of characters.

function testWordEvenOrOdd(string){;
    var word = string;
    if (word.length % 2 === 0){;
       console.log(`The word ${string} is even.`)};
    if (word.length % 2 !== 0){;
       console.log(`The word ${string} is odd.`)};
   };
   
   testWordEvenOrOdd("antidisestablishmentarianism")
   testWordEvenOrOdd("shwifty")
   console.log(
   
   )
// CHALLENGE 2
   
// Update your previous method or function so it accepts an array. The method or function
// should return a boolean that describes whether or not the array's length is an even number.
   
function testListEvenOrOdd(...input){;
    var list = input;
    if (list.length % 2 === 0){;
        console.log("This list is even.")};
    if (input.length % 2 !== 0){;
        console.log("This list is odd.")};
    };
   
testListEvenOrOdd("eggs", "cheese", "milk", "beer")
testListEvenOrOdd("Halo", "Division", "Warframe")
// FOR ME: solved using an array as a parameter but using '...' before my declaration.
console.log(

)
