// Les operateurs de comparaison

// !!! SURTOUT PAS (A+ B)
// L'operateur de comparaison == signifie   `egal a`
// Il permet de vérifier que les valeurs de 2 variable sont identiques
let nb1 = 123;
let nb2 = "123";
console.log(nb1 == nb2); // Retournera True (c'est vraie que les valeurs de nb1 et nb2 sont les memes)

// L'operateur de comparaison stricte --- signifie "egam a"
// Ala difference de --, il verifie egalement le type de la variable et sa valeur
console.log(nb1 === nb2); // RETOURNERA false (nb1 est dee type number et nb2 de type string)
// L'operateur different ! - signifie different de ...EN VALEUR 


console.log(nb1 != nb2); // Retournera FALSE (les valeurs ne sont pas differentes)
// L'operateur strictement !-- signifie "strictement" different de ... EN TYPE ET VALEUR 
console.log(nb1 !== nb2); // Retournera TRUE (les valeurs sont les memes mais les types sont differents)

// L'operateur > siginifie "plus grand que"
console.log(nb1 > nb2); // RETOURNE FALSE 
// L'operateur > siginifie "plus grand OU EGAL A"
console.log(nb1>= nb2); // RETOURNE true  
// L'operateur > siginifie "plus petit que"
console.log(nb1 < nb2); // RETOURNE FALSE 
// L'operateur > siginifie "plus petit que"
console.log(nb1 <= nb2); // RETOURNE true
// Conversion des types : 
nb2 = parseInt(nb2); // CONVERTI EN NOMBRE 
nb2 = parseFloat(nb2); //  CONVERTI EN DECIMAL
nb1 = nb1.toString(); // Converti en chaine de caractere 
console.log(typeof nb1, typeof nb2)
console.log (`Coucou`)