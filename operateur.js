/* LES OPERATEURS */
 
/* Les opérateurs (comme leur nom l'indique) consistent à faire des opérations mathématiques en utilisant les symboles + , - , * , / , % */
 
// Pour calculer un résultat, j'ai besoin de stocker mes valeurs
 
let nb1 = 7; // à ne pas confondre avec "24" qui est un string (chaine de caractère)
let nb2 = 5;
 
// Addition ( + )
 
let resultatAddition = nb1 + nb2;
 
console.log(nb1 + nb2); // Affichera seulement le resultat des deux variables
console.log(resultatAddition); // Affichera le resultat des deux variables nb1 + nb2 STOCKEES dans la variable resultatAddition
 
resultatAddition = resultatAddition + 10; // resultatAddition sera égale à elle-meme (59) + 10;
 
console.log(resultatAddition);
 
 // Soustraction (-)
 let resultat_soustraction = nb1 - nb2;
 console.log(resultat_soustraction);

 // Multiplication (*)
 let resultat_Multiplication = nb1 * nb2;
 console.log (resultat_Multiplication);
 // Division (/)
 let resultatDivision = nb1 / nb2;
 console.log(resultatDivision);
 // Modulo (%)
 // -- Le modulo retourne le reste d'une division
 // -- modulo de nb1 % NB2 avec l'operateur "%"
 // Exemple : Si nb1 = = 12 et nb2 = 5 alors nb1 % Nb2 EST EGAL a 2 PARCE QUIL NOUS FAUT 5*2 = 10 et 2 pour arriver à 12;
 let resultatModulo = nb1 % nb2;
 console.log(resultatModulo)
 console.log("Resultat Seul :")

 let resultat = nb1 + nb2;
 resultat = nb1 - nb2;
 resultat = nb1 * nb2; 
 resultat = nb1 / nb2;
 resultat = nb1 % nb2;
 console.log(resultat); // Le resultat est égal a nb1 % NB2 car ses valeurs ont été remplacées dans la derniere ligne 
