/** EXERCICE : Compte en banque
 *
 * J'ai 1000€sur mon compte
 * Chaque mois j'ajoute 50 €
 * Combien de me faut-il pour avoir 2000€ sur mon compte
 */

//  let compteactuel = 1000;
// //  let mois = 0;
//  for (let i = 0; compteactuel <= 2000; compteactuel += 50) {

//      mois++;
// }
// document.writeln("Mon compte est a " + compteactuel);
//     console.log(mois);

 


//  let compte = 1000;
//  let jour = 0;
// while (compte <= 2000 ){

//     document.writeln("<h2 style='color: blue'>Mon compte augmente tout les mois :" + jour + "periode" + compte + " </h2>");
//     jour++;
//     compte+= 50;
// }


/**
 * Exercice : NI OUI OU NON 
 * Demander a l'utilisateur s'il veut jouer a ni oui ni non, sinon on lui donne le nombre de tours qu'il a joue avant de perdre 
 */
//  let questions  = '';
//  let compteur = 0;
//  while (questions != 'oui' && questions != 'non'){
    

//      questions = prompt("Nous jouons a ni oui ni non");
//      console.log(questions);
//      compteur++;
    
//  }
//  document.writeln(`Nombre total de questions posées : ${compteur}`);


// Exercice PAIRS :
/**A L'aide d'une boucle, parcourez les nombre de 0 a 100 et document.write ceux qui sont pairs impairs mais pas la meme couleur
 * Boucles + conditions
 */
let i = 0;
for (i= 0; i<=100; i++){
    if (i%2==0){
        document.writeln("<h1 style='color: blue'>" + i + "</h1>")
    }
    else{

        document.writeln("<h1 style='color: red'>" + i + " </h1>")
    }
}