//call back функции
function first(){
    setTimeout( function(){
        console.log(1);
    }, 500 );
}

function second(){
    console.log(2);
}
first();
second();

function learnJS(lang, callback, number) {
    console.log("я учу " + lang);
    callback(number);
}
function done(number){
    console.log("я прошел " +number+" урок");
}
learnJS("javaScript", done, 3 );