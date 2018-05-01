var fibi = [...Array(100)].map((x,i)=>(!(i%3)&&!(i%5))?x='FizzBuzz':x=i && !(i%3)?x='fizz':x=i && !(i%5)?x='buzz':x=i);
console.log(fibi);
