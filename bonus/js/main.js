//
var listaUp = [];
//creo una lista di cognomi non ordinata
var lista =["Rossi","Perri","Anastasio","Madia","Talarico","Campisano"];
//chiedo all'utente di inserire un cognome
var cognome = prompt("Ciao inserisci un cognome");
var cognomeUp = cognome.toUpperCase();
// prova
console.log(cognomeUp);
//stampo la lista non ordinata
document.getElementById("unordered").innerHTML = lista;

//trasformo ogni cognome della lista in maiuscolo
for (var i = 0; i < lista.length; i++) {
  listaUp[i] = lista[i].toUpperCase();
}


//inserisco il cognome nella lista
listaUp.push(cognomeUp);

//ordino la lista
listaUp.sort();

//trasformo ogni cognome della lista in minuscolo
for (var i = 0; i < listaUp.length; i++) {
  lista[i] = listaUp[i].toLowerCase();
}
//console.log(lista);
//stampo la lista ordinata
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
