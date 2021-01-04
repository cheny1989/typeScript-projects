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
var Student = /** @class */ (function () {
    function Student() {
        this.name = ''; // חייב להתחל את זה
    }
    Student.prototype.saySometing = function () {
        console.log(this.name);
        return '';
    };
    return Student;
}());
var Airplain = /** @class */ (function () {
    function Airplain() {
    }
    Airplain.prototype.fly = function () {
        console.log("Airplain");
    };
    return Airplain;
}());
var Bird = /** @class */ (function () {
    function Bird() {
    }
    Bird.prototype.fly = function () {
        console.log("bird");
    };
    return Bird;
}());
function start2() {
    var f;
    f = new Airplain(); //canfly חייב לרשום 
    f.fly();
    f = new Bird();
    f.fly();
}
/////////////////////////
var Employee = /** @class */ (function () {
    function Employee(//  class כאן הם מגיעים כבר מאותחלים ולא צריך להשוות אותם לכלום או לאפס למטה מתחת  
    name, salary) {
        this.name = name;
        this.salary = salary;
    }
    Employee.prototype.toHtml = function () {
        //<div>avi cohen</div>
        return "<" + this.elementName() + "> " + this.name + "</" + this.elementName() + ">"; //this is Programmer
        // {this.elementName()} change to 'button' latter
    };
    return Employee;
}()); //new אסור לעשות לה abstract אם יש לנו מחלקת של 
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer(firstName, lastName, s, linesOfCode) {
        var _this = 
        //נהיה חייבים להגדיר אותו למעלה קודם כי הוא לוקח ממנו את הירושה lineOfCode אם נרצה להוסיף את ה 
        // public כמובן שאפשר לרשום גם protected לא יקרא את האחרון אם לא נרשום 
        _super.call(this, firstName + " " + lastName, s) // super  => constructor לקרוא ל
         || this;
        _this.linesOfCode = linesOfCode;
        return _this;
    }
    Programmer.prototype.elementName = function () {
        return "button"; //divאפשר לשנות ל  
    };
    Programmer.prototype.addLine = function (line) {
        this.linesOfCode++;
    };
    return Programmer;
}(Employee));
var TeamLeader = /** @class */ (function (_super) {
    __extends(TeamLeader, _super);
    function TeamLeader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.programmer = []; // הפעלת מערךך ריק - רק להתחול
        return _this;
        // toHtml(): string{
        //     let html = `<h1>${this.name}:</h1>`
        //     html += "<ul>"
        //     for(let p of this.programmer){
        //         html += p.toHtml();
        //     }
        //     html += "<ul>";
        //     console.log(html)
        //     return html;
        // }
    }
    TeamLeader.prototype.addLine = function (line) {
        _super.prototype.addLine.call(this, "//+1" + line);
        _super.prototype.addLine.call(this, "//+2" + line);
        _super.prototype.addLine.call(this, "//+3" + line);
        _super.prototype.addLine.call(this, "//+4" + line);
    };
    TeamLeader.prototype.addProgrammer = function (newProgrammer) {
        this.programmer.push(newProgrammer);
    };
    return TeamLeader;
}(Programmer));
function start() {
    // const e = new Employee("a", 5);
    var p = new Programmer("avi", "cohen", 100, 800);
    var p1 = new Programmer("avi", "cohen", 100, 800);
    var p2 = new Programmer("avi", "cohen", 100, 800);
    var p3 = new Programmer("avi", "cohen", 100, 800);
    var t = new TeamLeader("dani", "dini", 30000, 23);
    t.addProgrammer(p);
    t.addProgrammer(p1);
    t.addProgrammer(p2);
    t.addProgrammer(p3);
    t.addLine("bla bla"); //הכי קרוב addLine הוא מחפש את ה  
    var container = document.getElementById("container");
    container.innerHTML = t.toHtml(); //P במקום eאפשר לשנות ל
    console.log(p); // t או p או eכאן נשנה ל 
    //   במידה והם לא מוצאים - הם עולים אחד למעלה להכי קרו .constructor הם צריכים לחפש  
}
