class Vihecle {
    name: string = '';
    age: number = 1;
    type: string ='';
}

function culculateTimes(){
    const c = new Vihecle();
    c.name = 'chen';
    c.age = 30;
    c.type = 'man';


    let times = document.querySelector('#vihecles')
    if (times){
    times.innerHTML = `<span style="color:blue">test - ${c.name} ${c.age} ${c.type}`  
  }
}
