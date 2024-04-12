let x = true;
let y = false;
console.log(x);
console.log(y);

let result = x && y; 
console.log( result); "det blir false för att det är AND och båda måste vara true"

let results = x || y;
console.log( results); "Det blir true för att det är OR och då måste bara en variabel vara true"

let NOTresult = !x;
console.log(NOTresult); "Det är NOT så då är det motsatta mot true som är false"

let yresult = !y;
console.log(yresult); "det är NOT så då är det motsatta mot false som är true"

let str1 = "Help";
let str2 = "Me";
console.log(str1);
console.log(str2);
let concatenatedString = str1 + " " + str2; "Det här sätter ihop orden från str1 och str2 så det blir Help Me"
console.log(concatenatedString);
console.log(concatenatedString.length); "Det är gör så att vi ser hur lång Help Me är med bokstäver och mellanslag"

let num1 = 10;
let num2 = 5;
console.log(num1);
console.log(num2);

let summan = num1 + num2; "Här plussar man ihop num1 och num2 så blir det 10 + 5 som är 15"
console.log(summan);

let Skillnad = num1 - num2; "Här gör jag minus num1 och 2 så det blir 10 - 5 som är 5"
console.log(Skillnad);

let Multi = num1 * num2; "Här gör jag gånger med stjärntecknet som blir 10 gånger 5 = 50"
console.log(Multi);

let Divison = num1 / num2; "Här använder jag delat med / och det blir 10 delat med 5"
console.log(Divison);

let remainder = num1 % num2; "Man hittar remainder av två tal med % som blir 0"
console.log(remainder);

num1++; "Med increment och ++ så adderas 1 till num1 som är 10 så det blir 11"
console.log(num1);

num2--; "Med Decrement och -- så blir det minus 1 till num2 som är 5 så det blir 4"
console.log(num2);

let OPresult = (3 * 5) + (10 / 2) - (6 % 4); "det blir 15 + 5 - 2 = 18"
console.log(OPresult);

