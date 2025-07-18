/**
 * eXERCICE FERMIER 
 * Un fermier vous demande lui dire combien de pattes peuvent etre comptées parmi tout ses animaux. Il y'a 3 espèces :
 * 
 * 1 : Poulets - 2 pattes
 * 2 : Vaches - 4 pattes
 * 3 : Chevaux - 4 pattes
 * 
 * Il faut que vous demandiez au fermier le nombre qu'il a :
 * - Combien il a des poulets, combien il a de vaches et combien il a de chevaux
 * 
 * Vous devez implementer une fonction qui RENVOIE le nombre total et afficher dans une balise <p>
 */

let poulet = prompt("Combien il y'a de poulet");
let vaches = prompt("Combien il y'a de Vaches");
let chevaux = prompt("Combien il y'a de chevaux");
function pates(poulet,vaches,chevaux){
poulet*=2; vaches*=4; chevaux*=4;
    return poulet+vaches+chevaux;
  
 
 
}
let animaux = pates(poulet,vaches,chevaux);
document.writeln(`<p> Voici le resultat du nombre de pates ${animaux}</p>`);

