// //массивы и псевдомассивы;
// let arr = [1,"first",2,3,"last",4,5];

// arr.pop();// удаление с конца
// arr.push("4"); // доавбление в конец массива
// arr.shift(); // удаление полсденего эллемента
// arr.unshift('4'); // доавление в начало массива
// console.log(arr);
// //length возвращает последнией индекс массива +1) не забудь

// for(let i = 0; i< arr.length; i++) {
//     console.log((i+1)+"-"+arr[i]);
// }
// arr.forEach(function(item, i, mass ) {  
//     console.log(i + ': ' + item+ " (массив" + mass + ')');
// }); //item -елементы   i-индекс  arr- тот массив который мы используем

// let mass = [1,2,3,4,6,8,3,2];
// // при случае с for in он берет ключи(индексы)
// for (let key in mass) {
//     console.log(key); 
// }
// // при случае с for of он берет значения которые нас интересовали
// for (let key of mass) {
//     console.log(key); 
// }

// let answer = prompt("", ""),
//     arrA = [];

// arrA = answer.split(','); // берет каждый эллемент нашего массива и разделяет
// console.log(arrA); 

// let arr = ["2ggfdg", 'dfdfds', 'dfs' , "dfs"],
//     i =arr.join(", "); // берет каждый эллемент нашего массива и склеивает в одну строку внутри скобок наш разделитель

// console.log(i);

let arr = ["adsd","cdcds","dcdcdvd", "asd"],
    i =arr.sort(); // стортировка

console.log(i);

// для работы с цифрами нужен call-back func

let arrA = [1,24,4],
    index =arrA.sort(compareNum); // стортировка

function compareNum(a,b) {
    return a-b;
}
console.log(index);