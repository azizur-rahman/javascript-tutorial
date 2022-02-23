//// Passing a function to another function
function add(a, b) {
    return a + b;
}

let sum = add;

function average(a, b, fn) {
    return fn(a, b) / 2;
}

let result = average(30, 30, sum);
console.log(result);



/// Returning functions from functions
function compareBy(propertyName) {
    return function (a, b) {
        let x = a[propertyName],
            y = b[propertyName];

        if (x > y) {
            return 1;
        } else if (x < y) {
            return -1;
        } else {
            return 0;
        }
    };
}

let products = [
    { name: 'iPhone', price: 900 },
    { name: 'Samsung Galaxy', price: 850 },
    { name: 'Sony Xperia', price: 700 }
];

console.log('Products sorted by price:');
products.sort(compareBy('price'));

console.table(products);


/// JavaScript anonymous functions

(function () {

});

let show = function () {
    console.warn('Print Anonymous function');
}

show();

// setTimeout(() => {
//     console.warn('Execute later after 1 second.');
// }, 1000);

/// Immediately invoked function execution (IIEF)
(function () {
    console.warn('IIEF');
})();


let person = {
    FistName: 'Azizur',
    LastName: 'Rahman'
};

(function () {
    console.warn(person.FistName + ' ' + person.LastName);
})(person);

/// Arrow functions

let showArrowFn = () => console.log('Anonymous Function with arrow function');
showArrowFn();

function recursionSum(n) {

    if (n <= 1) {
        return n;
    }

    return n + recursionSum(n - 1);
}

console.warn(recursionSum(100));

/// JavaScript Default Parameters

function say(message = 'Hi !') {
    // console.log(typeof message);
    // message = typeof message !== 'undefined' ? message : 'Hi !';
    console.log(message);
}
say();
say(undefined);
say('Hello');

function sumN(x = 1, y = x, z = x + y) {
    return x + y + z;
}
console.log(sumN());

function subtract(x = y, y = 1) {
    return x - y;
}
subtract(10);
console.log(subtract(10));

function add(x, y = 1, z = 2) {
    console.log('arguments # ', arguments.length);
    return x + y + z;
}

add(10); // 1
add(10, 20); // 2
add(10, 20, 30); // 3