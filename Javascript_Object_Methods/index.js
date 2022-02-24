//// scenario 1
// let person = {
//     FirstName: 'Azizur',
//     LastName: 'Rahman'
// };

// person.greet = function () {
//     console.log('Hello World ! 1');
// }
// person.greet();

//// scenario 2

// let person = {
//     FirstName: 'Azizur',
//     LastName: 'Rahman'
// };

// function greet() {
//     console.log('Hello World! 2');
// }
// person.greet = greet;
// person.greet();


//// scenario 3

// let person = {
//     FirstName: 'Azizur',
//     LastName: 'Rahman',
//     greet: function () {
//         console.log('Hello world! 3');
//     }
// };

let person = {
    FirstName: 'Azizur',
    LastName: 'Rahman',
    greet() { /// for ES6
        console.log('Hello world! 3');
    },
    getFullName: function () {
        return this.FirstName + ' ' + this.LastName;
    }
};
console.log(person.getFullName());
// person.greet();