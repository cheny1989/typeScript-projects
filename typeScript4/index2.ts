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

class Person1 {
    fullName:string;
    age: number; // חייב להתחל אותו
    constructor(firstName: string, lastName: string, age:number){
        this.fullName = `${firstName} ${lastName}`;
    //this.age = 0; אפשר גם מפה להתחל אותו - או או
    this.age = age;
    }
}

function start1 (){
let p = new Person1("john", "doe", 10);
console.log(p.fullName)
}