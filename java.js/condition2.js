/* LES CONDITIONS */
 
// -- Structure de base : if
 
if (true) { // Par defaut la condition à vérifier (le if vérifie si elle est vraie)
    /* Code à éxecuter */
}
 
// EXEMPLE :
 
let nb1 = 10;
 
if (nb1 < 50) {
    console.log('nb1 est inférieur à 50');
}
 
if (true) {
    /* Code si la condition est vraie */
} else {
    /* code si la condition est fausse */
}
 
/* if(hakim me demande de baisser la lumiere de la tv et que je suis d'accord){
    je baisse la lumiere de la tv
} else {
    je ne baisse pas la lumiere de tv
} */
 
if (nb1 > 50) {
    console.log("nb1 est supérieur à 50");
} else {
    console.log("nb1 n'est pas supérieur à 50");
}
 
 
// ELSE IF
 
// Else if est reservé au cas où une autre condition serait acceptable pour notre code
 
let nb2 = 50;
 
let nb3 = 60;
 
if (nb2 > nb3) {
    console.log(`${nb2} est supérieur à ${nb3}`);
} else if (nb2 == nb3) {
    console.log(`${nb2} est égal à ${nb3}`);
} else {
    console.log("tu m'embetes avec tes conditions");
}
 
// SWITCH
 
// Le switch vérifie UNE variable selon des cas
 
let str = 'Nadia';
 
switch (str) {
    case 'Nadia':
        str = "Je m'appelle Nadia";
        break;
    case "Sabrina":
        str = "Je m'appelle Sabrina";
        break;
    case "N'Golo":
        str = "Je m'appelle N'Golo";
        break;
    default:
        str = "Je n'ai aucun prénom";
        break;
}
 
console.log(str);
 
 
// En utilisant les prompts
 
// let prompteur = prompt("Quelle est la couleur de vos yeux");
 
 
// switch (prompteur) {
//     case "bleus":
//         document.writeln("<h1> Les yeux bleus rappellent la couleur de l'ocean </h1>");
//         break;
//     case "verts":
//         document.writeln("<h1> Les yeux vert rappellent les emeraudes </h1>");
//         break;
//     case "marrons":
//         document.writeln("<h1> Les yeux marrons rappellent les plus troncs d'arbres de la foret </h1>");
//         break;
//     case "vairons":
//         document.writeln("<h1> Les yeux vairons rappellent la mixtité de ce monde </h1>");
//         break;
//     default:
//         document.writeln("<h1> Merci d'écrire une vraie couleur !!!!!!! </h1>");
//         break;
// }
 
 
// OPERATEURS LOGIQUES
 
// -- L'opérateur ET : &&
/* => prenom === prenomLogin
=> age === ageLogin
 */
 
// let email = prompt("Quel est votre adresse mail");
// let emailBDD = "groupe@gmail.com";
 
// let mdp = prompt("Quel est votre mot de passe ? ");
// let mdpBDD = "X3F6OOKM";
 
// Pour afficher mon console.log, il faut ABSOLUMENT que mes deux conditions SOIENT VRAIES
 
/** BASE DES TRUE ET FALSE
 * FALSE && FALSE : FALSE;
 * FALSE && TRUE : FALSE;
 * TRUE && FALSE : FALSE;
 * TRUE && TRUE : TRUE;
 */
// if (email == emailBDD && mdp == mdpBDD) {
//     console.log('Vous êtes connecté');
// } else {
//     console.log("Votre email ou MDP est incorrect");
// }
 
// OU ( || )
// À la différence de && (ET), OU (||) ne demande que l'une des deux minimum conditions soit vraie
/**
 *  FALSE || FALSE : FALSE
 *  FALSE || TRUE : TRUE
 *  TRUE || FALSE : TRUE
 *  TRUE || TRUE : TRUE
 */
 
let prenom = "Nadia";
let prenom2 = "N'Golo";
 
let age = 22;
let age2 = 23;
 
if (prenom == prenom2 || age == age2) {
    console.log('Tu es dans la vérité !');
} else if (prenom == "Nadia" || age2 == 19) {
    console.log('Tu es dans le bien !');
} else if (prenom2 == 'rien' && age == 37) {
    console.log("Tu es dans l'excellent");
} else {
    console.log("Ciao");
}
 
 
// ^ XOR (Opérateur OU Exclusif)
/*
    Bases TRUE ET FALSE :
 
    TRUE ^ TRUE : FALSE
    TRUE ^ FALSE : TRUE
    FALSE ^ TRUE : TRUE
    FALSE ^ FALSE : FALSE
*/
 
/* Exemple : Une soirée en boite de nuit, l'entrée est gratuite SOIT aux blondes, SOIT aux chatains */
 
let cheveux = "blonde", cheveux2 = "chatain-clair";
 
 
if (cheveux == "blonde" ^ cheveux2 == "rousse") {
    console.log("Vous pouvez entrer");
} else {
    console.log("Vous devez payer pour entrer, 50€");
}
 
// L'opérateur PAS (!) "!" signifie que c'est le contraire de .
 
let utilisateurConnecte = true;
 
if (!utilisateurConnecte) {
    console.log("Oui, il est connecté");
} else {
    console.log("non, il n'est pas connecté");
}
 
// ça revient à écrire
 
if (utilisateurConnecte == false) {
    console.log('Oui il est connecté');
} else {
    console.log('non, il est déconnecté');
}
 
 
let nombres = 23;
 
if (!(nombres == 23)) { // RESULTAT = FALSE parce que le nombre EST egal à 23.
    console.log('23');
} else {
    console.log("FALSSEEEEEEEEE");
}
 
