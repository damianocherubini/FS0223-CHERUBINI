/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/


var a = 10
var b = 20
var sum = a + b

console.log(sum)

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/



const random = Math.floor(Math.random()* 21)

console.log(random)

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

console.log('***EsercizioC***')

const me = {
  name: "Luca",
  surname: "Iannice",
  age: 42,
}

console.log(me)

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
console.log('***EsercizioD***')


delete me.age

console.log(me)



/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
console.log('***EsercizioE***')

me.skills = ["javascript", "python", "C++"];

console.log(me)

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
console.log('***EsercizioD***')

me.skills.push("JAVA")

console.log(me)

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
console.log('***EsercizioD***')

me.skills.pop()

console.log(me)

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
console.log('***Esercizio1***')

function dice () {
  return Math.floor(Math.random()* 6)+1
}

console.log(dice())



/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

console.log('***Esercizio2***')


function whoIsBigger (num1,num2) {
  if(num1 !== num2) {
    if (num1 > num2) {
      return num1
    } else return num2
  } return "i due numeri sono uguali, riprova"
}

console.log(whoIsBigger(3,1))

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.
  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
console.log('***Esercizio3***')


function splitMe (stringa) {
  return stringa.split(" ")
} 

console.log(splitMe("Forza Bologna sempre!"))

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
console.log('***Esercizio4***')

function deleteOne (stringa, bool) {
if (bool == true) {
  return stringa.slice(1)
} else return stringa.slice(0, -1)
}

console.log(deleteOne("EPICODE", true))

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.
  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

console.log('***Esercizio5***')

function onlyLetters (stringa) {
  nuovaStringa = stringa.replace(/[0-9]/g, "");
  return nuovaStringa
}

console.log(onlyLetters("44 gatti in fila per 6"))


/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
console.log('***Esercizio6***')


function isThisAnEmail (stringa) {
  var validReGex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
 return (stringa.match(validReGex) ? true : false);
}

console.log(isThisAnEmail("luca.gmail.com"))

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
console.log('***Esercizio7***')

function whatDayIsIt () {
  const date = new Date();
  let day = date.getDay()
  var giorno = ["Domenica","Lunedi","Martedi","Mercoledi","Giovedi","Venerdi","Sabato"]
  return giorno[day]
}

console.log(whatDayIsIt())

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().
  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
console.log('***Esercizio8***')

function rollTheDices (num) {
  const oggetto = {
    sum:[],
  }
  somma = 0
  i = 0
  while (i < num) {
    somma += dice()
    i++
  } 
  oggetto.sum.push(somma)

  return oggetto
 
  }

console.log(rollTheDices(3))

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

console.log('***Esercizio9***')


function howManyDays (dataRandom) {
const today = new Date()
const diff = Math.floor(today.getTime() - dataRandom.getTime())/(1000*3600*24)
return diff
}

console.log(howManyDays(new Date("1980-09-23")))


//                                      *****ATTENZIONE!!!!******
  // HO COMMENTATO L'ESERCIZIO 10 PERCHE' PER QUALCHE MOTIVO (CHE NON CAPISCO) VISUALCODE NON RICONOSCE GETMONTH() E GETDAY() COME
  // METODI DI BIRTHDAY MA SOLO DI TODAY. PENSO CHE LA LOGICA DELL'ESERCIZIO SIA CORRETTA MA NON TROVO L'ERRORE 


/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

// console.log('***Esercizio10***')

// function isTodayMyBirthday (birthday) {
//   const today = new Date();

//   if (today.getMonth === birthday.getMonth() && today.getDay() === birthday.getDay()) {
// return true;
// }

// console.log(isTodayMyBirthday("1980-09-23"))

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]


/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
console.log('***Esercizi11***')

function deleteProp (oggetto, stringa) {
delete oggetto[stringa]
return oggetto
}

console.log(deleteProp ({nome: "Luca", cognome: "Iannice", età: 42, sport: "calcio"}, "sport"))

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
console.log('***Esercizio12***')

function newestMovie () {
  let recent = 0;
  let titolo;
  for (let i of movies) {
    if (Number(i.Year) > recent) {
      recent = Number(i.Year)
      titolo = i.Title
    }
  }
  return `il film piu' recente e' ${titolo} del ${recent}`
}

console.log(newestMovie())

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
console.log('***Esercizio13***')

function countMovies () {
  let numero = 0
  for (let i of movies) {
   if (i.Type === "movie") {
    numero++
   } 
  }
  return `il numero di film è ${numero}`
}

console.log(countMovies())

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
console.log('***Esercizio14***')

function onlyTheYears () {
  let anniUscita = [];
  movies.forEach(element => anniUscita.push(element.Year))
  return anniUscita
  // for (let i of movies) {
  //  anniUscita.push(i.Year)}
  //  return anniUscita
}

console.log(onlyTheYears())

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

console.log('***Esercizio15***')

function onlyInLastMillennium () {
  let oldMovies = movies.filter(element => Number(element.Year) < 2000)
  return oldMovies
  
}

console.log(onlyInLastMillennium())

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

console.log('***Esercizio16***')

function sumAllYears () {
  let years = movies.map(element => Number(element.Year));
  let totalYears = years.reduce((val,tot) => {
      return val + tot
  })
  return totalYears
}
console.log(sumAllYears())

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
console.log('***Esercizio17***')

function searchByTitle (stringa) {
  let selectedMovies = []
  selectedMovies.push(movies.filter(element => element.Title.includes(stringa)))
  return selectedMovies
 
}

console.log(searchByTitle("Lords"))

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/


console.log('***Esercizio18***')

function searchAndDivide (stringa) {
let oggetto = {
  match:[],
  unmatch: []
}
for (let i of movies) {
  if (!i.Title.includes(stringa)) {
    oggetto.unmatch.push(i.Title)
  } else oggetto.match.push(i.Title)
}

// oggetto.match.push(movies.filter(element => element.Title.includes(stringa)))

 return oggetto
}

console.log(searchAndDivide ("Lord"))

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/


console.log('***Esercizio19***')

function removeIndex (num) {
   movies.splice(num,1)
   return movies

}

console.log(removeIndex (4))

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

console.log('***Esercizio20***')

const contenitore = () => {
  let myContainer = document.getElementById("container");
  return myContainer
}

console.log(contenitore())

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

console.log('***Esercizio21***')

const tag = () => {
  let myTd = document.getElementsByTagName("td")
  return myTd
} 

console.log(tag())

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

console.log('***Esercizio22***')

const cicloTag = () => {
  let myTd = document.getElementsByTagName("td")
  for (let i of myTd) {
    console.log (i.innerText)
  }

}

cicloTag()

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

console.log('***Esercizio23***')

const backgroundA = () => {
  let myA = document.querySelectorAll("a");
  for (let i of myA) {
    i.style.backgroundColor = "red";
  }
}

backgroundA()

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

console.log('***Esercizio24***')

const newElement = () => {
  let myUl = document.getElementById("myList");
  let newLi = document.createElement("li")
  newLi.innerText = "nuovo li singolo"
  myUl.appendChild(newLi)
}

newElement()

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/


//                  *****ATTENZIONE!!******
// COMMENTI QUESTA FUNZIONE PER VEDERE L' LI DELL'ESERCIZIO PRECEDENTE!

//                  *****ATTENZIONE2!!******
// CONFRONTANDOMI COI MIEI COMPAGNI E CERCANDO SUL WEB HO VISTO CHE SI POTEVA RISOLVERE SEMPLICEMENTE CON .INNERHTML =""
// MA AVEVO GIA' PRECEDENTEMENTE PROVATO CON WHILE CHE MI DAVA RISULTATI MA NON RIUSCIVO A RISOLVERE IL PROBLEMA DEL LENGTH CHE DECRESCEVA
// AD OGNI CICLO
// LA LOGICA DELL'ESERCIZIO SOTTO L'HO OVVIAMENTE CAPITA MA LE SPECIFICHE VOCI COME "HASCHILDNODES" O "FIRSTCHILD" LE HO PRESE DA W3S

console.log('***Esercizio25***')

const emptyList = () => {
 let myList= document.getElementById("myList")
 while (myList.hasChildNodes()) {
  myList.removeChild(myList.firstChild);
 }
 } 
 emptyList()


/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/



console.log('***Esercizio26***')

const newClass =() => {
  let myTr = document.getElementsByTagName("tr");
  for( let i of myTr) {
    i.classList.add("test")
  }
}
  newClass()

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.
  Esempio:
  halfTree(3)
  *
  **
  ***
*/
console.log('***Esercizio27***')

const halfTree = (num) => {
  const mySymbolUnit = "*";
  let mySymbol = "*";
  i = 0
  while ( i < num) {
  console.log(mySymbol)
  mySymbol = mySymbol.concat(mySymbolUnit)
  i++
}
}

halfTree(7)

// halfTree(4)

// /* ESERCIZIO 28
//   Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

//   Esempio:
//   tree(3)

//     *
//    ***
//   *****

console.log('***Esercizio28***')

const tree = (num) => {

const mySymbolUnit = "*"
const mySpaceUnit = " "
for (i=0; i < num ; i++) {
  let newSpace = mySpaceUnit.repeat(num-i)
  let newSymbol = mySymbolUnit.repeat((i*2)+1)
  console.log(newSpace.concat(newSymbol))
}
}
tree(6)


/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

console.log('***Esercizio29***')

const isItPrime = (num) => {

  if (num <= 1) {
    return false
  } else if ( num > 1) {
  for (i=2; i < num ; i++) { 
  if ( num%i === 0 ) {
    return false
  }
} return true

}  
}
console.log(isItPrime(8))


--------------------------------------------------------


/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics


/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
    {
      Title: 'The Lord of the Rings: The Fellowship of the Ring',
      Year: '2001',
      imdbID: 'tt0120737',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
    },
  
    {
      Title: 'The Lord of the Rings: The Return of the King',
      Year: '2003',
      imdbID: 'tt0167260',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    },
    {
      Title: 'The Lord of the Rings: The Two Towers',
      Year: '2002',
      imdbID: 'tt0167261',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    },
    {
      Title: 'Lord of War',
      Year: '2005',
      imdbID: 'tt0399295',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
    },
    {
      Title: 'Lords of Dogtown',
      Year: '2005',
      imdbID: 'tt0355702',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
    },
    {
      Title: 'The Lord of the Rings',
      Year: '1978',
      imdbID: 'tt0077869',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
    },
    {
      Title: 'Lord of the Flies',
      Year: '1990',
      imdbID: 'tt0100054',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
    },
    {
      Title: 'The Lords of Salem',
      Year: '2012',
      imdbID: 'tt1731697',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
    },
    {
      Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
      Year: '1984',
      imdbID: 'tt0087365',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
    },
    {
      Title: 'Lord of the Flies',
      Year: '1963',
      imdbID: 'tt0057261',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
    },
    {
      Title: 'The Avengers',
      Year: '2012',
      imdbID: 'tt0848228',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
    },
    {
      Title: 'Avengers: Infinity War',
      Year: '2018',
      imdbID: 'tt4154756',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
    },
    {
      Title: 'Avengers: Age of Ultron',
      Year: '2015',
      imdbID: 'tt2395427',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
    },
    {
      Title: 'Avengers: Endgame',
      Year: '2019',
      imdbID: 'tt4154796',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
    },
  ]
  
  /* ESERCIZIO A
    Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
  */
  
  //Soluzione
  
  var sum = 10 + 20;
  
  console.log(sum);
  
  /* ESERCIZIO B
    Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
  */
  
  //Soluzione
  
  var random = Math.floor(Math.random() * 21);
  
  console.log(random);
  
  /* ESERCIZIO C
    Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
  */
  
  //Soluzione
  
  var me = {
    name: 'Giuseppe',
    surname: 'Petrucci',
    age: 28
  }
  
  /* ESERCIZIO D
    Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
  */
  
  //Soluzione
  
  delete me.age;
  
  console.log(me);
  
  /* ESERCIZIO E
    Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
  */
  
  //Soluzione
  
  me.skills = ['HTML', 'Css', 'Javascript'];
  
  console.log(me);
  
  /* ESERCIZIO F
    Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
  */
  
  //Soluzione
  
  me.skills.push('Angular');
  
  console.log(me);
  
  /* ESERCIZIO G
    Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
  */
  
  //Soluzione
  
  me.skills.pop();
  
  console.log(me)
  
  /* ESERCIZIO 1
    Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
  */
  
  //Soluzione
  
  
  function dice() {
    let casuale = Math.floor(Math.random() * 6 + 1);
    return casuale;
  }
  
  console.log(dice());
  
  /* ESERCIZIO 2
    Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
  */
  
  //Soluzione
  
  var whoIsBigger = (x, y) => {
    if (x > y) {
      console.log(x);
    } else if (x < y) {
      console.log(y)
    } else if (x === y) {
      console.log('I numeri inseriti sono uguali')
    }
  }
  
  whoIsBigger(5, 7);
  
  /* ESERCIZIO 3
    Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.
    Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
  */
  
  //Soluzione
  
  var splitMe = (stringa) => {
    let stringaDivisa = stringa.split(' ');
    return stringaDivisa;
  }
  
  console.log(splitMe('Ciao Sei Il Migliore'));
  
  /* ESERCIZIO 4
    Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
    Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
  */
  
  //Soluzione
  
  var deleteOne = (str, booleano) => {
    if (booleano === true) {
      return str.slice(1);
    } else if (booleano === false);
    return str.slice(0, -1);
  }
  
  console.log(deleteOne('Giuseppe', true));
  
  /* ESERCIZIO 5
    Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.
    Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
  */
  
  //Soluzione
  
  var onlyLetters = (str) => {
    let senzaNumeri = str.replace(/[0-9]/g, '');
    return senzaNumeri;
  }
  
  console.log(onlyLetters('Ho invitato 30 persone alla festa ma solo 15 mi hanno risposto'));
  
  /* ESERCIZIO 6
    Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
  */
  
  //Soluzione
  
  var isThisAnEmail = (str) => {
    let indirizzoEmail = /^[A-z0-9\.\+_-]+@[A-z0-9\._-]+\.[A-z]{2,6}$/;
    if (indirizzoEmail.test(str))
      console.log(true);
    else
      console.log('Indirizzo email non valido');
  }
  
  isThisAnEmail('petrucci238@gmail.com');
  
  /* ESERCIZIO 7
    Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
  */
  
  //Soluzione
  
  var data = new Date();
  
  var month = new Array();
  month[0] = "Gennaio";
  month[1] = "Febbraio";
  month[2] = "Marzo";
  month[3] = "Aprile";
  month[4] = "Maggio";
  month[5] = "Giugno";
  month[6] = "Luglio";
  month[7] = "Agosto";
  month[8] = "Settembre";
  month[9] = "Ottobre";
  month[10] = "Novembre";
  month[11] = "Dicembre";
  
  var day = new Array();
  day[0] = "Domenica";
  day[1] = "Lunedì";
  day[2] = "Martedì";
  day[3] = "Mercoledì";
  day[4] = "Giovedì";
  day[5] = "Venerdì";
  day[6] = "Sabato";
  
  var set, gg, mm, aaaa;
  
  var whatDayIsIt = () => {
    set = day[data.getDay()] + " ";
    gg = data.getDate() + " ";
    mm = month[data.getMonth()] + " ";
    aaaa = data.getFullYear();
    return set + gg + mm + aaaa;
  }
  
  console.log(whatDayIsIt());
  
  /* ESERCIZIO 8
    Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
    Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
    il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
    L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().
    Example:
    rollTheDices(3) => ritorna {
        sum: 10
        values: [3, 3, 4]
    }
  */
  
  //Soluzione
  
  var dadi = {
    risultato: 0,
    values: []
  }
  
  function rollTheDices(n) {
    for (let i = 0; i < n; i++) {
      let tiro = dice();
      let valori = dadi.values;
      valori.push(tiro);
      let somma = valori.reduce((tot, num) => tot + num, 0);
      dadi.risultato = somma;
  
    }
    console.log(dadi)
  }
  
  rollTheDices(3);
  
  
  /* ESERCIZIO 9
    Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
  */
  
  //Soluzione
  
  var scegliData = new Date(2022, 10, 01);
  
  var howManyDays = (z) => {
    let data2 = new Date()
    let giorniPassati = data2 - z;
    giorniPassati = Math.floor(giorniPassati / 1000 / 60 / 60 / 24);
    return `Dalla data indicata ad oggi cioè ${whatDayIsIt()} sono passati ${giorniPassati} giorni `;
  }
  
  console.log(howManyDays(scegliData));
  
  /* ESERCIZIO 10
    Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
  */
  
  //Soluzione
  
  
  var isTodayMyBirthday = (y) => {
    let attuale = new Date();
    let gg, mm, aaaa
    gg = attuale.getDate();
    mm = attuale.getMonth() + 1 + '/';
    aaaa = attuale.getFullYear() + '/';
    attuale = aaaa + mm + gg;
    if (y === attuale) {
      console.log(true);
    } else if (y !== attuale) {
      console.log(false);
    }
  }
  
  
  isTodayMyBirthday('2023/4/15');
  
  // Arrays & Oggetti
  
  // NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file
  
  /* ESERCIZIO 11
    Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
    in esso la proprietà chiamata come la stringa passata come secondo parametro.
  */
  
  //Soluzione
  
  const nuovoOggetto = {
    nome: 'Giuseppe',
    cognome: 'Petrucci',
    indirizzo: 'via Rossi'
  };
  
  var deleteProp = (ogg, str) => {
    for (let key in ogg) {
      if (str === key) {
        delete ogg[key];
      }
    }
  }
  
  deleteProp(nuovoOggetto, 'cognome');
  console.log(nuovoOggetto);
  
  /* ESERCIZIO 12
    Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
  */
  
  //Soluzione
  
  var newestMovie = (x) => {
    let nuovo = { Year: 1950 };
    for (let k = 0; k < x.length; k++) {
      let intero = parseInt(x[k].Year);
      if (intero > nuovo.Year) {
        nuovo = x[k];
      }
    }
    return nuovo;
  }
  
  console.log(newestMovie(movies));
  
  /* ESERCIZIO 13
    Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
  */
  
  //Soluzione
  
  var countMovies = (arr) => {
    return arr.length;
  }
  
  console.log(countMovies(movies));
  
  /* ESERCIZIO 14
    Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
  */
  
  //Soluzione
  
  var onlyTheYears = (arr) => {
    return arr.map((element) => element.Year);
  }
  
  console.log(onlyTheYears(movies));
  
  /* ESERCIZIO 15
    Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
  */
  
  //Soluzione
  
  var onlyInLastMillennium = (arr) => {
    let millennio = [];
    for (let j = 0; j < arr.length; j++) {
      if (parseInt(arr[j].Year) < 2000) {
        millennio.push(arr[j]);
      }
    }
    return millennio;
  }
  
  console.log(onlyInLastMillennium(movies));
  
  /* ESERCIZIO 16
    Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
  */
  
  //Soluzione
  
  var sumAllTheYears = (arr) => {
    let totale = 0;
    arr.forEach((element) => {
      totale += parseInt(element.Year);
    });
    return totale;
  }
  
  console.log(sumAllTheYears(movies));
  
  /* ESERCIZIO 17
    Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
  */
  
  //Soluzione
  
  var filmConStringa = [];
  
  var searchByTitle = (tit) => {
    movies.map((item) => {
      let cerca = item.Title.includes(tit);
      if (cerca == true) {
        filmConStringa.push(item);
      }
    });
  }
  searchByTitle('Lord');
  console.log(filmConStringa);
  
  /* ESERCIZIO 18
    Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
    "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
  */
  
  //Soluzione
  var inclusione = {
    match: [],
    unmatch: []
  }
  
  var searchAndDivide = (str) => {
    movies.map((item) => {
      let cerca = item.Title.includes(str);
      if (cerca == true) {
        inclusione.match.push(item);
      } else if (cerca == false) {
        inclusione.unmatch.push(item);
      }
    });
  }
  
  searchAndDivide('Lord');
  console.log(inclusione);
  
  /* ESERCIZIO 19
    Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
  */
  
  //Soluzione
  
  var removeIndex = (n) => {
    let par1 = n - 1;
    movies.splice(par1, 1);
  }
  
  removeIndex(14);
  
  console.log(movies);
  
  // DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)
  
  
  /* ESERCIZIO 20
    Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
  */
  
  //Soluzione
  
  var selezione = () => {
    let contenitore = document.getElementById('container');
    let titolo = document.createElement('h1');
    titolo.innerHTML = 'Questo è un titolo creato da js';
    contenitore.appendChild(titolo);
  }
  
  selezione();
  
  /* ESERCIZIO 21
    Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
  */
  
  //Soluzione 
  
  var tabelle = () => {
    let testoTd = document.querySelectorAll('td');
    for (let i = 0; i < testoTd.length; i++) {
      testoTd[i].innerHTML = 'Polpo';
    }
  }
  
  tabelle();
  
  /* ESERCIZIO 22
    Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
  */
  
  //Soluzione
  
  var tabText = () => {
    let cambio = document.querySelectorAll('td');
    for (let i = 0; i < cambio.length; i++) {
      cambio[i].innerHTML = 'Camaleonte';
    }
  }
  
  tabText();
  
  /* ESERCIZIO 23
    Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
  */
  
  //Soluzione
  
  var coloreFondo = function () {
    let selezLink = document.querySelectorAll('a');
    for (let i = 0; i < selezLink.length; i++) {
      selezLink[i].style.backgroundColor = 'red';
    }
  }
  
  coloreFondo();
  
  /* ESERCIZIO 24
    Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
  */
  
  //Soluzione
  
  var aggiunta = () => {
    let lista = document.getElementById('myList');
    let nuovaLi = document.createElement('li');
    nuovaLi.innerHTML = 'dieci';
    lista.appendChild(nuovaLi);
  }
  
  aggiunta();
  
  /* ESERCIZIO 25
    Scrivi una funzione per svuotare la lista non ordinata con id "myList".
  */
  
  //Soluzione
  
  var svuota = () => {
    let svuotaLi = document.querySelectorAll('li');
    for (let i = 0; i < svuotaLi.length; i++) {
      svuotaLi[i].innerHTML = '';
    }
  }
  
  svuota();
  
  /* ESERCIZIO 26
    Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
  */
  
  //Soluzione
  
  var aggTag = () => {
    let classe = document.querySelectorAll('tr');
    for (let i = 0; i < classe.length; i++) {
      classe[i].setAttribute('class', 'classeAgiunta');
    }
  }
  
  aggTag();
  
  // [EXTRA] JS Avanzato
  
  /* ESERCIZIO 27
    Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.
    Esempio:
    halfTree(3)
    *
    **
    ***
  */
  
  //Soluzione
  
  var asteri = '*'
  
  function halfTree(n) {
    for (let i = 0; i < n; i++) {
      console.log(`${asteri.repeat(i + 1)}`);
    }
  }
  
  halfTree(5);
  
  /* ESERCIZIO 28
    Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.
    Esempio:
    tree(3)
      *
     ***
    *****
  */
  
  //Soluzione
  
  var albero = '';
  
  var tree = (n) => {
    for (i = 1; i <= n; i++) {
      albero = '';
      for (j = i; j < n; j++) {
        albero += ' ';
      }
      for (k = 0; k < (i * 2) - 1; k++) {
        albero += asteri;
      }
      console.log(albero);
    }
  }
  
  tree(5);
  
  /* ESERCIZIO 29
    Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
  */
  
  //Soluzione
  
  var divisore = 1;
  var contatore = 0;
  
  var isItPrime = (n) => {
    if (n < 0) {
      console.log('Inserisci un numero positivo');
      return;
    }
  
    while (contatore <= 1 && divisore <= n / 2) {
      if (n % divisore == 0) {
        contatore++;
      }
      divisore++;
    }
  
    if (contatore == 1) {
      console.log(`Il numero ${n} è un numero primo`)
    } else {
      console.log(`Il numero ${n} non è un numero primo`)
    }
  }
  
  isItPrime(3);