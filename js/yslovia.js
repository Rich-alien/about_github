// про условии
if(2*4 !== 8){
console.log("верно");
}
else{
    console.log("дебил, ошибка");
}


let num =50;
if(num<49){
    console.log("не верно");
}
else if (num>100){
    console.log("многовато");
}
else{
    console.log("Верно");
}

//упрощенный вариант записи условыий через ?
(num==50) ? console.log("True") : console.log("false");

num  = 50;
switch(num){
    case num < 49:
        console.log("false1");
        break;
    case num > 100:
        console.log("false2");
        break;
    case num > 80:
        console.log("false3");
        break;
    case  50 :
        console.log("true");
        break;
        default:
            console.log("erorr");    
            break;

}