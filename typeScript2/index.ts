interface Person{  // interface is only public
    // אין מימוש 
    name: string;
    saySometing():string;
}

class Student implements Person{
    name: string = ''; // חייב להתחל את זה
    saySometing(): string {
        console.log(this.name);
        return '';
    }
    
}
///////////////////////////  

interface CanFly{
    fly(): void; //void = היעדר משהו
}

class Airplain implements CanFly{
    fly(): void {
        console.log("Airplain");

    }  
}

class Bird implements CanFly{
    fly(): void {
        console.log("bird");
    }
}

function start2(){
    let f: CanFly;
    f = new Airplain(); //canfly חייב לרשום 
    f.fly();
    f = new Bird ();
    f.fly();
}

/////////////////////////

abstract class Employee {
    constructor( //  class כאן הם מגיעים כבר מאותחלים ולא צריך להשוות אותם לכלום או לאפס למטה מתחת  
        public name: string,
        public salary: number,
        )
        {
    }
    toHtml(): string{
        //<div>avi cohen</div>
        return `<${this.elementName()}> ${this.name}</${this.elementName()}>` //this is Programmer
                    // {this.elementName()} change to 'button' latter
    }
    abstract elementName(): string; //class abstract - יש לפחות מתודה אחת שחסר לה מימוש ולכן אי אפשר לממש אובייקטים
}//new אסור לעשות לה abstract אם יש לנו מחלקת של 

class Programmer extends Employee{
    elementName(): string {
        return "button"; //divאפשר לשנות ל  
    }
    constructor(firstName: string,
                lastName: string, 
                s:number,
                protected linesOfCode:number){
       //נהיה חייבים להגדיר אותו למעלה קודם כי הוא לוקח ממנו את הירושה lineOfCode אם נרצה להוסיף את ה 
       // public כמובן שאפשר לרשום גם protected לא יקרא את האחרון אם לא נרשום 
       super(`${firstName} ${lastName}`, s)// super  => constructor לקרוא ל
    }
    addLine(line: string): void{ // void=לא מוחזר מכאן ערך 
        this.linesOfCode ++;
    }
    // toHtml (): string{
    //     return `<li>${super.toHtml()}</li>`;
    // }
}

class TeamLeader extends Programmer{
        public programmer: Programmer[]=[]; // הפעלת מערךך ריק - רק להתחול

    addLine(line: string): void{
        super.addLine("//+1" + line);
        super.addLine("//+2" + line);
        super.addLine("//+3" + line);
        super.addLine("//+4" + line);

    }
    addProgrammer(newProgrammer: Programmer){
        this.programmer.push(newProgrammer)
    }
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

function start(){
    // const e = new Employee("a", 5);
    const p = new Programmer ("avi", "cohen", 100, 800);
    const p1 = new Programmer ("avi", "cohen", 100, 800);
    const p2 = new Programmer ("avi", "cohen", 100, 800);
    const p3 = new Programmer ("avi", "cohen", 100, 800);


    const t = new TeamLeader ("dani", "dini", 30000, 23);
    t.addProgrammer(p);
    t.addProgrammer(p1);
    t.addProgrammer(p2);
    t.addProgrammer(p3);


    t.addLine("bla bla"); //הכי קרוב addLine הוא מחפש את ה  

    const container = document.getElementById("container")!;
    container.innerHTML = t.toHtml(); //P במקום eאפשר לשנות ל
    console.log(p); // t או p או eכאן נשנה ל 
//   במידה והם לא מוצאים - הם עולים אחד למעלה להכי קרו .constructor הם צריכים לחפש  
}