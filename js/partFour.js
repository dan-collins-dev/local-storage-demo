/*
    Part Four
    --------------------
    In this part, we demonstrate:
        - Cleaning up part 3's code by implementing a factory function
*/

let people = []

function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

function getFromLocalStorage(key) {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null
}

// Here is our factory function. Its sole purpose
// is to return a person object based on the arguments
// we provide and the object's shape
function createPerson(name, age, hobbies) {
    return {
        name: name,
        age: age,
        hobbies: hobbies
    }
}

// Creating the same people using our factory function
const dan = createPerson("Dan", 37, ["hiking", "backpacking", "coding"]);
const lucky = createPerson("Lucky", 32, ["muddin", "huntin", "stumpin"]);
const hank = createPerson("Dan", 37, ["propane", "propance accessories"]);

people.push(dan, lucky, hank)

saveToLocalStorage("people", people);