//creo una lista di cognomi non ordinata
var lista =["Rossi","Perri","Anastasio","Madia","Talarico","Campisano"];
//chiedo all'utente di inserire un cognome
var cognome = prompt("Ciao inserisci un cognome");


//stampo la lista non ordinata
document.getElementById("unordered").innerHTML = lista;

//inserisco il cognome nella lista
lista.push(cognome);

//stampo la lista ordinata
lista.sort();
document.getElementById("surname").innerHTML = lista;

var i = 0;
var trovato = false;
while (i < lista.length && !trovato) {

  if (lista[i] == cognome) {
  trovato = true;
  var  position = i + 1;
  document.getElementById("posizione").innerHTML = "la posizione del nuovo elemento è: " + position;

  }

  i++;

}
