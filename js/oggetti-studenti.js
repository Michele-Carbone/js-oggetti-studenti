/*Descrizione:
ES 1
Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
Stampare a schermo (in pagina) attraverso un ciclo for-in tutte le proprietà dell'oggetto.
ES 2
Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
Consigli del giorno:

*/


//creo un Array studente con le seguenti proprietà: nome, cognome e età.
//stampo in pagina tutte le proprietà dell'Array

//Creare un array di oggetti di studenti.
//Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
//con 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. 



//Array studente
var student = {
    nome: 'Michele',
    cognome: 'Cardone',
    age: 79,
};

//console.log(student);
var display = document.getElementById('display');

var content = '';
for (var key in student) {
    //console.log(student[key]); //stampo il valore
    content += '<div><strong>' + key + ':<strong> ' + student[key] + '</div>';

}

display.innerHTML = content;




//Array studenti
var students = [
    {
        nome: 'Paolo',
        cognome: 'Merendina',
        age: 45,
    },
    {
        nome: 'Mino',
        cognome: 'Padella',
        age: 65,
    },
    {
        nome: 'Nino',
        cognome: 'Calabrese',
        age: 29,
    },
    {
        nome: 'Giovanni',
        cognome: 'Pedrone',
        age: 18,
    },
]


var displayStudents = document.getElementById('display-students');
//ciclo l'Array Students 
var content = '';

for (var i = 0; i < students.length; i++) {

    var currentStudents = students[i];
    //content += '<li><div><strong>Nome: <strong> ' + currentStudents.nome + '</div>' + '<span><strong>Cognome: <strong> ' + currentStudents.cognome + '</li>' + '<div><strong>Età: <strong> ' + currentStudents.age;
    content += '<li>';
    for (var keys in currentStudents) {
        content += '<div><strong><strong> ' + keys + ': </strong>' + currentStudents[keys] + '</div>';
    }


    content += '</li>'
}
displayStudents.innerHTML = content;

printObjectArray(students, displayStudents);

// chiedo i dati del nuovo studente
var newName = getWordUser('Inserisci il nome ')

var newSurname = getWordUser('Inserisci il cognome ');

var newAge = getNumberUser('Inserisci la sua età ');




//creo un Array per il nuovo studente
var newStudent = {
    nome: newName,
    cognome: newSurname,
    age: newAge,
}

//aggiungiamo i dati del nuovo utente all'interno dell Array degli studenti
students.push(newStudent);

printObjectArray(students, displayStudents);

// funzione
function printObjectArray(objectArray, targetElement) {

    var content = '';

    for (var i = 0; i < objectArray.length; i++) {

        var currentItem = objectArray[i];

        content += '<li>';
        for (var keys in currentItem) {
            content += '<div><strong><strong> ' + keys + ': </strong>' + currentItem[keys] + '</div>';
        }


        content += '</li>'
    }

    targetElement.innerHTML = content;
}


//function die prompt sui dati dello studente
function getWordUser(question) {
    var word = prompt(question);
    while (!word || word.trim() === '') {
        word = prompt(question);
    }

    return word;
}

//function die prompt sui dati dello studente
function getNumberUser(question) {
    var num = prompt(question);
    while (!num || isNaN(num) || num.trim() === '') {
        num = prompt(question);
    }

    return num;
}
