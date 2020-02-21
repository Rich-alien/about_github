// небольшой экскурс по js
// function showSomethingMes(text) {
//     alert(text);
//     return 
    
// }
// showSomethingMes("Hi");
//  let calc = function(a, b) {
//      return (a+b);
//  };
 let calc=(a, b) => a+b;
 //es6 про новые функции
 
 console.log( calc(6, 4) );
 console.log( calc(7, 4) );





 function reVar() {
     let num=50;
     return num;

 }
 let anorherNum = reVar();
 console.log(anorherNum);

 let str = "test";
 console.log(str.length);

 console.log( str.toUpperCase() );
 console.log( str.toLowerCase() );

 let twelve = "12.2px";

//  console.log( Math.round(twelve) );
console.log(parseInt(twelve));

console.log(parseFloat(twelve));

 let calceconom = (p, mc)=>((p-mc)/p) ;


 console.log(calceconom(130,70));
 console.log(calceconom(120,80));
 console.log(calceconom(140,80));
 console.log(calceconom(130,50));
 console.log(calceconom(120,70));
 console.log(calceconom(155,55));

 function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Вы согласны?",
    function() { alert("Вы согласились."); },
    function() { alert("Вы отменили выполнение."); }
  );

  let ask = (question, yes, no) =>{
      
  }
  
 