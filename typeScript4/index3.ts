
class Person{

constructor(
public fullName: string,
public age: number){
}
}

function start2(){
    let p = new Person ("Chen yaacov", 15)
    console.log(p.fullName)
    console.log(p.age)
}