"use strict";
var Person = /** @class */ (function () {
    function Person(fullName, age) {
        this.fullName = fullName;
        this.age = age;
    }
    return Person;
}());
function start2() {
    var p = new Person("Chen yaacov", 15);
    console.log(p.fullName);
    console.log(p.age);
}
