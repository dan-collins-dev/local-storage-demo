/*
    Part Two
    --------------------
    In this part, we demonstrate:
        - The use of localStorage with an array of strings
        - The use of JSON.stringify() and JSON.parse() to
          store and retrieve our array correctly

*/


// We set up an array of hobbies
const hobbies = ["hiking", "backpacking", "coding"];

// We store the hobbies array in local storage with a key of "hobbies"
localStorage.setItem("hobbies", hobbies);

// We retrieve the hobbies from local storage and
// assign it to storedHobbies
const storedHobbies = localStorage.getItem("hobbies");

// We decide to add another hobby to the array...or at least
// what we would think would be an array
storedHobbies.push("reading");

// We store our new array that has the added hobby. However
// line 24 will fail because it is a string. We will use
// JSON.stringify() and JSON.parse() to fix this
localStorage.setItem("hobbies", storedHobbies);





// Uncomment this entire block of code after working through the above.
// Make sure to comment out the code above when doing this.

/*
const hobbies = ["hiking", "backpacking", "coding"];
localStorage.setItem("hobbies", JSON.stringify(hobbies));

const storedHobbies = JSON.parse(localStorage.getItem("hobbies"));
storedHobbies.push("reading");

localStorage.setItem("hobbies", JSON.stringify(storedHobbies));
*/