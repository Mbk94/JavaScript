/* Les incrementation  */

//  -- incrementation
let nb1 = 245;
nb1 = nb1 + 1; // Fonctionne avec 1 ou tout autre chiffre
nb1 += 100; // nb1 = nb1 + 100;
// Ecriture simplifée
nb1++;
console.log(nb1);
// -- Decrementation
nb1 = nb1 - 1;
nb1--;

// Incrementation 2
// console.log ("Increm ++nb1 nb1++")
let nb2 = 5;
console.log(nb2);
let x = nb2++; // SI NB2++ ALORS LA VARIABLE X RECUPERE LA VALEUR DE NB2 AVANT L'incremnetation et sera donc egale a 5, 
// en revanche si ++nb2 alors l'incrementation est effectuée avanat la recuperation de la valeur , X sera doc egal a 6
console.log(x);
console.log(nb2);
