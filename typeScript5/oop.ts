class Person {
    FirstName: string;
    LastName: string;

    fullName():string{
        return `${this.FirstName} ${this.LastName}`;
    }
}
    function start (){
for (let index = 0; index < 100; index++) {
    const element = new Person;
    element.FirstName = "Student" + index;
}

        let p = new Person(); //  חדש person אובייקט= // מייצרים
        let p2 = new Person(); // חוקי לגמרי להשוות את זה לאותו ערך -כי  אנחנו יוצרים אובייקט חדש גם אם יש לו את אותו השם
            //  אנחנו מגדירים אובייקט  new  כל פעם שאנחנו רושמים
        p.FirstName = "a";
        p.FirstName = "b";
        console.log(p.fullName());
    }
        