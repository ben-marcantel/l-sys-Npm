var canvas = document.getElementById('canvas')
var ctx = canvas.getContext("2d")
const LSystem = require('lindenmayer');



ctx.translate(canvas.width * 0.8, canvas.height / 15)
let counter=0;
let initNum;
let dataObject;

const randomNum =()=>{
   initNum= Math.floor((Math.random()*5)+1);   
} 

const setConditional = ()=>{
    
    if(initNum === 1){
        ctx.rotate((Math.PI/180) * 60) 
    }else if(initNum === 2){
        ctx.rotate((Math.PI/180) * 30) 
    }else if(initNum === 3){
        ctx.rotate((Math.PI/180) * 20) 
    }else if(initNum === 4){
        ctx.rotate((Math.PI/180) * 40) 
    }else {
        ctx.rotate((Math.PI/180) * 50) 
    }
    console.log("current",initNum)
}
const setConditional2 = ()=>{
    
    if(initNum === 1){
        ctx.rotate((Math.PI/180) * -60) 
    }else if(initNum === 2){
        ctx.rotate((Math.PI/180) * -30) 
    }else if(initNum === 3){
        ctx.rotate((Math.PI/180) * -20) 
    }else if(initNum === 4){
        ctx.rotate((Math.PI/180) * -40) 
    }else {
        ctx.rotate((Math.PI/180) * -50) 
    }
    console.log("current2",initNum)
}

let koch = new LSystem({
  axiom: 'X-[X]',
  productions: {'F': 'FF', 'X':'F[-X]-[X][-X]+FX'},
  finals: {
    '+': () => {randomNum(); setConditional2() },
    '-': () => { randomNum(); setConditional() },
    'F': () => {
      ctx.beginPath();
      ctx.moveTo(0,0);
      ctx.lineTo(0, 25/(koch.iterations + 1));
      ctx.shadowColor = 'red';
      ctx.shadowBlur = 70;     
      ctx.strokeStyle = "red";
      ctx.stroke();      
      ctx.translate(0, 25/(koch.iterations + 1))},
    '[': ()=>{ ctx.save()},
    ']':()=>{ctx.restore()}
  
   }
})
// randomNum()
koch.iterate(5)

koch.final()



console.log(koch.getString())


