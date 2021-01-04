class Animal{
    name: string = '';
    age: number = 1;

    addYears(years: number){
        this.age= this.age + years; // רק לדברים שהם חלק מהאובייקט this צריך
    }
}

class Yak extends Animal{
    weight : number = 0;
}

class BlondYak extends Yak{
    saySomting= "aaaaaa";
    
}

class Cat extends Animal{
    scratch(){
        console.log("mewww")
        //cat צריך להגדיר למטה את ה 
    }
}

function start(){
  const b = new BlondYak ();//
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
    const element = document.querySelector("#description");
    if(element){
        element.innerHTML =  `i'm ${b.name} and i'm ${b.age} years old, and my weight is ${b.weight} and my saySomting ${b.saySomting}`;
    }
}