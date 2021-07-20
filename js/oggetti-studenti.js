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



//variabile studente
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











