// LES BOUCLES
 
/** Les boucles sont des structures qui servent à éxécuter du code autant de fois que necessaire
 *
 * Il existe plusieurs types de boucles mais les plus utilisées sont les suivantes : For / While
 */
 
// La boucle While (Tant que)
 
let compteur = 1;
 
// Tant que mon compteur est STRICTEMENT inférieur à 10 (c'est à dire tant qu'il n'est pas égal à 9), la boucle se relance jusqu'à ce que la condition soit false;
while (compteur < 10) {
    document.writeln("<h2 style='color: blue'> Voici mon compteur : " + compteur + " </h2>");
 
    // ATTENTION : ne pas oublier d'incrementer
    compteur+= 2;
}
let reponse = ``;
while (reponse!= `non`){
    reponse = prompt(`etes vous bloqué`)
    console.log(reponse);
}
 // Do ... WHILE :
//  A la difference de while , do while excetuera toujours le premier tour de sa boucle meme si la conditions es fausse

 let i = 0;
 do {

     document.writeln(i);
     i++;
 } while (i > 1);

//  La boucle ++For 
/** 
 For (3 arguments){
 ... Code a executer}
 for(let = i =0; i < 10; i++){
} Difference avec while
 let i = ;
 while (i<5){
 i++;}
  */
   for (let i = 0; i<= 20; i+= 2){
    document.writeln("<h3>Salut, je suis le numéro + i + </h3>")
   }