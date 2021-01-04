"use strict";
//constructor://
/*class Person {
    firstName: string = '';
    lastName: string = '';

    fullName():string{
        return `${this.firstName} ${this.lastName}`
    }
}
*/
//במקום מה שלמעלה אפשר לכתוב כך://
var Person1 = /** @class */ (function () {
    function Person1(firstName, lastName, age) {
        this.fullName = firstName + " " + lastName;
        //this.age = 0; אפשר גם מפה להתחל אותו - או או
        this.age = age;
    }
    return Person1;
}());
function start1() {
    var p = new Person1("john", "doe", 10);
    console.log(p.fullName);
}
