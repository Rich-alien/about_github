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