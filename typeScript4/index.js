"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal() {
        this.name = '';
        this.age = 1;
    }
    Animal.prototype.addYears = function (years) {
        this.age = this.age + years; // רק לדברים שהם חלק מהאובייקט this צריך
    };
    return Animal;
}());
var Yak = /** @class */ (function (_super) {
    __extends(Yak, _super);
    function Yak() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.weight = 0;
        return _this;
    }
    return Yak;
}(Animal));
var BlondYak = /** @class */ (function (_super) {
    __extends(BlondYak, _super);
    function BlondYak() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.saySomting = "aaaaaa";
        return _this;
    }
    return BlondYak;
}(Yak));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.scratch = function () {
        console.log("mewww");
        //cat צריך להגדיר למטה את ה 
    };
    return Cat;
}(Animal));
function start() {
    var b = new BlondYak(); //
    b.name = "Jeck";
    b.age = 20;
    b.weight = 30;
    b.saySomting = "aaaaaa";
    /*
    const a = new Yak(); // המשקל לא יוצג - כי זה חד גיווני Animalאם נשנה ל
    a.name = "abc";
    a.age = 10;
    a.weight = 120;
    a.addYears(2)
    */
    var element = document.querySelector("#description");
    if (element) {
        element.innerHTML = "i'm " + b.name + " and i'm " + b.age + " years old, and my weight is " + b.weight + " and my saySomting " + b.saySomting;
    }
}
