// ESERCIZIO A
let sum = 10 + 20;

// ESERCIZIO B
let random = Math.floor(Math.random() * 21); // genero un numero casuale tra 0 e 20 (inclusi)

// ESERCIZIO C
let me = {
name: "Mario",
surname: "Rossi",
age: 30
};

// ESERCIZIO D
delete me.age;

// ESERCIZIO E
me.skills = ["JavaScript", "HTML", "CSS"];

// ESERCIZIO F
me.skills.push("Python");

// ESERCIZIO G
me.skills.pop();

// ESERCIZIO 1
function dice() {
return Math.floor(Math.random() * 6) + 1; // genero un numero casuale tra 1 e 6 (inclusi)
}

// ESERCIZIO 2
function whoIsBigger(num1, num2) {
if (num1 > num2) {
return num1;
} else {
return num2;
}
}

// ESERCIZIO 3
function splitMe(str) {
return str.split(" ");
}

// ESERCIZIO 4
function deleteOne(str, bool) {
if (bool) {
return str.substring(1);
} else {
return str.substring(0, str.length - 1);
}
}

// ESERCIZIO 5
function onlyLetters(str) {
return str.replace(/[0-9]/g, "");
}

// ESERCIZIO 6
function isThisAnEmail(str) {
// Regex per la validazione di un indirizzo email
let emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
return emailRegex.test(str);
}

// ESERCIZIO 7
function whatDayIsIt() {
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let date = new Date();
let today = date.getDay();
return days[today];
}

// ESERCIZIO 8
function rollTheDices(num) {
let sum = 0;
let values = [];
for (let i = 0; i < num; i++) {
let diceValue = dice();
sum += diceValue;
values.push(diceValue);
}
return {
sum: sum,
values: values
};
}

// ESERCIZIO 9
function howManyDays(date) {
let today = new Date();
let differenceInTime = today.getTime() - date.getTime();
let differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
return differenceInDays;
}

// ESERCIZIO 10
function isTodayMyBirthday() {
let today = new Date();
let myBirthday = new Date(today.getFullYear(), 3, 15); // 15 aprile
if (today.getMonth() == myBirthday.getMonth() && today.getDate() == myBirthday.getDate()) {
return true;
} else {
return false;
}
}

// ESERCIZIO 11
function deleteProp(obj, str) {
delete obj[str];
return obj;
}