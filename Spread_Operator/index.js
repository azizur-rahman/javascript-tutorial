var studentObj = {
    Name: "Azizur"
}

// var cloned = studentObj; /// Shallow clone
// var cloned = Object.assign({}, studentObj); ///  Deep clone  This will create a new space/memory for this object
// var cloned = JSON.parse(JSON.stringify(studentObj)); ///  another way of Deep clone
var cloned = { ...studentObj }; ///  another way of Deep clone ES6


console.log(cloned, "CLONED OBJECT, before changing the main object");

studentObj.Role = 1;
console.log(cloned, "CLONED OBJECT, after changing the main object");
console.log(studentObj, "Main object after changing");

