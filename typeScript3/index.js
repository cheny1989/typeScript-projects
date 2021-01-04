"use strict";
var Vihecle = /** @class */ (function () {
    function Vihecle() {
        this.name = '';
        this.age = 1;
        this.type = '';
    }
    return Vihecle;
}());
function culculateTimes() {
    var c = new Vihecle();
    c.name = 'chen';
    c.age = 30;
    c.type = 'man';
    var times = document.querySelector('#vihecles');
    if (times) {
        times.innerHTML = "<span style=\"color:blue\">test - " + c.name + " " + c.age + " " + c.type;
    }
}
