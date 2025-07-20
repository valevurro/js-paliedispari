// Chiediamo una parola all'utente
const parolaUtente = prompt("Inserisci una parola");

// Funzione per verificare se la parola è palindroma
function èPalindroma(parola) {
    const parolaInversa = parola.split('').reverse().join('');
    return parola === parolaInversa;
}

// Verifica e stampa il risultato
if (èPalindroma(parolaUtente)) {
    console.log("La parola è palindroma!");
} else {
    console.log("La parola NON è palindroma.");
}


