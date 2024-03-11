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
// CHALLENGE 3

// Write a method or function that accepts a number from 1-24 that represents the current time rounted to the closest hour in 24-hour military time.
// (i.e. 11 = 11:00 AM, 16 = 4:00 PM). The function should return a different greeting based on the time of day.

/** 4 AM - 11 AM: Good morning!
* 12 PM - 4 PM: Good afternoon!
* 5 PM - 8PM: Good evening!
* 9 PM - 3 AM: Good night!
*/

function greetByTimeOfDay(time){;
    var time = time;
    if (time >= 4 && time <= 11){;
        console.log(`Good morning! The time is ${time}:00.`)};
    if (time >= 12 && time <= 16){;
        console.log(`Good afternoon! The time is ${time}:00.`)};
    if (time >= 17 && time <= 20){;
        console.log(`Good evening! The time is ${time}:00.`)};
    if (time >= 21 || time <= 3){;
        console.log(`Good night! The time is ${time}:00.`)};
};

greetByTimeOfDay(10)
greetByTimeOfDay(13)
greetByTimeOfDay(19)
greetByTimeOfDay(23)
console.log(

)
// CHALLENGE 4 - OPTIONAL! Spicy!

// Write a method or function that accepts an array of 10 integers (between 0 and 9) and returns a string of those numbers in the form of a phone number.
// For example, if you were given [5, 5, 5, 1, 2, 3, 4, 5, 6, 7], the method or function will return 555-123-4567.

function makePhoneNumber(...telephonicAddress){;
    var digits = telephonicAddress;
    console.log(`Congrats! Your number is (${digits.slice(0, 3).join("")}) ${digits.slice(3, 6).join("")}-${digits.slice(6, 10).join("")}!`)
};

makePhoneNumber(8, 7, 3, 6, 2, 1, 1, 5, 0, 4)
makePhoneNumber(9, 9, 9, 4, 2, 5, 6, 4, 4, 1)
makePhoneNumber(7, 7, 5, 6, 7, 3, 8, 3, 2, 0)
console.log(

)
