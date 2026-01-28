/*
    Part Two
    --------------------
    In this part, we demonstrate:
        - The use of localStorage with an array of objects
        - Create a functions that wraps localStorage.setItem() and getItem()
*/

// An array to hold our people. Note that we used let
// instead of const because we will be reassigning the results
// to people when we retrieve our data
let people = []


// We create a function that calls localStorage.setItem() that
// takes in a key and a value for setItem. Because the function
// is calling setItem() as well as "stringify"-ing the value,
// we will just pass in the value.
function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

// We created a function for retrieving data from local
// storage for the same reason as above
function getFromLocalStorage(key) {
    const value = localStorage.getItem(key);

    // Note that we are using a ternary here. It translate to this:
    //  - return the parsed value if JSON.parse(value) results in a
    //    in a truthy value, otherwise return null
    return value ? JSON.parse(value) : null
}

// We created twoo object literals to represent people
const dan = {
    name: "Dan",
    age: 37,
    hobbies: ["hiking", "backpacking", "coding"]
}

const lucky = {
    name: "Lucky",
    age: 32,
    hobbies: ["muddin", "huntin", "stumpin"]
}

// We add dan and lucky to the array we declared
// at the top of the file
people.push(dan, lucky);

// Saving the people to local storage
saveToLocalStorage("people", people)

// Retrieving our people again, so that we can add another person
people = getFromLocalStorage("people");

// Creating our new person
const hank = {
    name: "Hank",
    age: 42,
    hobbies: ["propane", "propance accessories"]
}

// Before saving to local storage, we need to make sure to add
// it to the array first
people.push(hank);

// Saved and verified that Hank now exists in local storage
saveToLocalStorage("people", people);