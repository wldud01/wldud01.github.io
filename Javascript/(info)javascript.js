let zero = "0";
if (zero) {
    alert("Hello");
}

let question = prompt("What's the official name of Javascript?","");

if (question == "ECMAScript"){
    alert("Right!");
}else{
    alert("You don't know? Try again");
}

let answer = (question=="ECMAScript") ? alert("Right!") : alert("Try Again");

let num = prompt("Number","")
if (num >0) {
    alert(1);
}else if (num <0){
    alert(-1);
}else{
    alert(0);
}

let result;
(a + b< 4) ? result = "below": result= "over";
let result = (a+b<4) ? "Below" : "over";

let message = (login == "Employee") ? "Hello":
(login == "Director") ? "Greatings":
(login == "") ? "No login":
"";

//or
alert(true||true); // true
alert(false||true); // true
alert(true||false); // true
alert(false||false); // flase

result = value1 || value2|| value3;
// 이경우에는 왼쪽에서 오른쪽으로 평가하는데 true인 경우 중지함

//and
alert(true&&true); // true
alert(false&&true); // false
alert(true&&false); // false
alert(false&&false); // false

alert( null &&5 ); // null
alert( 0 && "no matter what" ); // 0

let age =20;
if (age >=14 && age <=90){
    alert("inclusive");
}

if( !(age>=14 &&age <=90) );
if (age<14 || age>90);


let login = prompt("Who's there",'');
let ans = "TheMaster"
if(login === ans){
    let password = prompt("password?",'');
    if(password === ans) alert("welcome!");
    else if(password === '' ||password === null ) alert("cancled");
    else alert("wong");
}else if (login ==='' || login === null) alert("I don 't know");
else alert("cancled");
