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
while (i < lista.lenght && lista[i] !== cognome) {

  if (lista[i] == cognome) {
  document.getElementById("posizione").innerHTML = "la posizione del nuovo elemento è: " + i;
  }
  i++;

}
