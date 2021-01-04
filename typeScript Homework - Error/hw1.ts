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
        times.innerHTML = `test - ${c.name} ${c.age} ${c.type}`  
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
  
 