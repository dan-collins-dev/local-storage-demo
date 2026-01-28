/*
    Part One
    --------------------
    In this part, we demonstrate:
        - Where to find local storage in your browser and how to clear it
        - The methods that exist on the localStorage object
            - setItem(key: string, value: string) -> void
            - getItem(key: string) -> string || null if the key does not exist in LS
            - removeItem(key: string) -> void

*/

// We create an entry in local storage with a key of person
// and a value of "Dan"
localStorage.setItem("person", "Dan");

// We retrieve the value associated with the "person" key
// which is "Dan" and store in a variable called person
const person = localStorage.getItem("person");

// While we are usually checking local storage in the browser,
// I logged out the person variable as well as the type to
// show that the type is of string
console.log(person, typeof person);

// We removed the "person" key, which also removes the associated
// value
localStorage.removeItem("person")

// When we try access person after deleting it, we receive null
// as the returned value
const personToRemove = localStorage.getItem("person");
console.log(personToRemove)