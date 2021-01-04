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
        times.innerHTML = "test - " + c.name + " " + c.age + " " + c.type;
    }
}
/*
 calculateTime( x : number ){
   return x / this.speed;
 }

 addSpeed( delta : number){
     return this.speed + delta;
     }
 }

function addVihecle(){
 let v = new vihecle (100, "volvo")
 let v2 = new vihecle(90 , 'picanto')
console.log(v.addSpeed(100))
*/
