// Chiediamo una parola all'utente
const word = prompt("Inserisci una parola");

// Funzione per verificare se la parola è palindroma
function reverseWord(word) {
    let reversed = "";
    for (let i = word.length - 1; i >= 0; i--) {
        const singolo_carattere = word[i];
        reversed += singolo_carattere;
    }

  return reversed;
}

//funzione con return true o false
function isPalindrome(word) {
    const reversedWord = reverseWord(word);
    console.log(reversedWord);
  
    if (word === reversedWord) {
      return true;
    } else {
      return false;
    }
}
  
  //output palindroma o non palindroma
if (isPalindrome(word)) {
    console.log(`${word} è palindroma`);
} else {
    console.log(`${word} non è palindroma`);
}



