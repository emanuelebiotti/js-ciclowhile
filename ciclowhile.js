//creo l'array dei cognomi
var cognomi = ['kenobi', 'vader', 'sidious', 'binks', 'windu'];

//chiedo all'utente quale sia il suo cognome
var tuocognome = prompt('Qual è il tuo cognome?');

//creo una variabile che dichiara che il cognome non è presente nell'array
var presente = false;

//inizializzo variabile i per ciclo while
var i=0;

// ciclo while
while (i < cognomi.length && !presente) {
  //console.log(cognomi[i]);
  if(cognomi[i] === tuocognome) {
    // console.log('fai già parte del club dei saggi');
    presente=true;
  }
  // console.log(cognomi[i]);
  i++;
}

if (presente) {
  console.log('fai già parte del club dei saggi');
} else {
  cognomi.push(tuocognome);
}
console.log(cognomi.sort());
document.writeln(cognomi.sort());
