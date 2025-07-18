let prenom = " Rayane";
let age = "24ans";
let ville = "Paris";

document.writeln(`Je m'apelle${prenom},J'ai${age} ans,J'habite a ${ville}`);

let longueur = parseFloat(prompt("Quel est la longeur du rectangle"));
let largeur = parseFloat(prompt("Quel est la largeur du rectangle"));

alert(largeur * longueur);

let pair = parseInt(prompt("Votre nombre est pair ou impair "));

if (pair % 2 == 0) {
  document.writeln("<h1 pair style='color: blue'>" + pair + " pair </h1>");
} else {
  document.writeln("<h1 impair style='color: red'>" + pair + "  impairs </h1>");
}


function direbonjour(prenomd){
document.writeln(`<p>  Voici mon prenom ${prenomd}</p>`)

}
direbonjour("rayane")
let num1 = prompt("Choisissez un chiffre")
let num2 = prompt ("Choissisez son petit frére")
function calcull(nb1,nb2){
    if (isNaN(nb1)|| isNaN(nb2)){
    document.writeln('Me saoule pas avec tes lettres')
    return;
    }
    if (nb1>nb2){
    document.writeln(`le numero ${nb1} est plus grand que le numéro
        ${nb2}`)
    }else if (nb1<nb2){
        document.writeln (`le numero ${nb1} est plus grand que le numéro
        ${nb2}`)
    }else {
        document.writeln()
    }


}
let nb1 = prompt ('Choisis un nombre')
let nb2 = prompt ('Choisis un deuxieme nombre')
let operation= prompt('Quelle opération voulez vous faire ?')
function calculer(n1,n2,caculation){
    let resultat;
    if(caculation == '+'){

        resultat = n1 + n2;
    }
     else if(caculation == '-'){

         resultat = n1 - n2;
     }
    else if(caculation == '*'){

        resultat = n1 * n2;
    }
     else if(caculation == '/'){

         resultat = n1 / n2;
     }
    else{

        resultat = "L'operation n'existe pas !"
    }
    return resultat;
}

let operation2 = calculer(nb1,nb2,operation);
document.writeln(`Le calcul de ${nb1} ${operation} ${nb2} est égal à ${operation2}`);


/**
 * EXERCICE FERMIER :
 *
 *  Un fermier vous demande de lui dire combien de pattes peuvent être comptées parmi tous ses animaux. Il y'a 3 espèces :
 *
 *
 * 1 : Poulets - 2 pattes
 * 2 : Vaches - 4 pattes
 * 3 : Chevaux - 4 pattes
 *
 *
 *  IL faut que vous demandiez au fermier le nombre d'animaux qu'il a :
 *
 * - Combien il a de poulets, combien il a de vaches et combien il a de chevaux.
 *
 * Vous devez implementer une fonction qui RENVOIE le nombre total de pattes et afficher dans une balise <p> </p>.
 */
 
// let poulet = parseInt(prompt('Combien as tu de poulets ?'));
// let vache = parseInt(prompt('Combien as tu de vaches ?'));
// let chevaux = parseInt(prompt('Combien as tu de chevaux ?'));
 
// function ferme(param1, param2, param3) {
//     let total = (param1 * 2) + (param2 * 4) + (param3 * 4);
//     return total;
// }
 
// let fermeBlabla = ferme(poulet, vache, chevaux);
// console.log(fermeBlabla);
// document.writeln(`<p>Il y'a exactement ${fermeBlabla} pattes dans la ferme du gentil monsieur</p>`);
 
/**
 *
 * Exercice PDF
 *
 */
 
// 1 . Présentation
 
/**
 * Créer des variables pour stocker ton prénom, ton age et ta ville.
 * Afficher une phrase du type : "Je M'appelle {prenom}, j'ai {age} ans et j'habite à {ville}"
 */
 
let prenomm = "Sabrina";
let agee = 18;
let villle = "Vitry-sur-seine";
 
// document.writeln("Je m'appelle " + prenom + ", j'ai " + age + " ans et j'habite à " + ville);
let affichageTexte = "Je m'appelle " + prenom + ", j'ai " + age + " ans et j'habite à " + ville;
 
console.log(affichageTexte);
document.writeln(affichageTexte);
 
/**
 * 2 . Calcul de surface
 *
 * Demander à l'utilisateur la longueur ET la largeur d'un rectangle
 *
 * Calculer et afficher sa surface (longueur * largeur)
 */
 
// let longueur = prompt('Veuillez entre votre longueur');
// let largeur = prompt('Veuillez entrer votre largeur');
 
// let total = longueur * largeur;
 
// console.log(total + 'm²');
 
/**
 * 3. Pair ou Impair
 *
 * Demander un nombre à l'utilisateur
 *
 * Afficher pair si ce nombre est divisible par 2, sinon impair
 */
 
// let ask = prompt("Donne moi un nombre, je te dirai s'il est pair ou impair");
 
// if (ask % 2 == 0) {
//     document.writeln('TADAMMM, ton numéro est pair');
// } else {
//     document.writeln('TADAMMM, ton numéro est impair');
// }
 
/**
 * Exercice 4 : Fonction de bienvenue
 *
 * Créer une fonction "direBonjour()" qui prend un prénom en paramètre et affiche "Bonjour {prenom}";
 */
 
// function direBonjour(prenom) {
//     document.writeln(`<p> Bonjour ${prenom} </p>`);
// }
 
// direBonjour("Rayane");
// direBonjour("Dylan");
 
/**
 * Exercice 5 : Comparaison de deux nombres
 *
 * Demander 2 nombres à l'utilisateur
 *
 * Créer une fonction qui affiche lequel est le plus grand (ou s'ils sont égaux);
 */
 
// let num1 = prompt("Choisissez un chiffre");
// let num2 = prompt("Choisissez son petit frère");
 
// function calcul(nb1, nb2) {
// if (isNaN(nb1) || isNaN(nb2)) {
//     document.writeln('Me saoule pas avec tes lettres');
//     return;
// }
 
//     if (nb1 > nb2) {
//         document.writeln(`le numéro ${nb1} est plus grand que le numéro ${nb2} `);
//     } else if (nb1 < nb2) {
//         document.writeln(`le numéro ${nb2} est plus grand que le numéro ${nb1} `);
//     } else {
//         document.writeln(`Les deux sont égaux (ou c'est une chaine de caractère petit malin !)`);
//     }
// }
 
// calcul(num1, num2);
 
 
/**
 * Exercice 6 : Calculateur simple
 *
 * Demande deux nombres et une opération
 *
 * Créer une fonction calculer qui éffectue l'opération et retourne le resultat
 */
 
// let nb1 = parseInt(prompt('Choisis un nombre'));
// let nb2 = parseInt(prompt('choisis un deuxieme nombre'));
 
// let operation = prompt('Quelle opération voulez vous faire? (Indiquez simplement + - * /)');
 
// function calculer(n1, n2, calculation) {
//     let resultat;
 
//     if (calculation == '+') {
//         resultat = n1 + n2;
//     } else if (calculation == '-') {
//         resultat = n1 - n2;
//     } else if (calculation == '*') {
//         resultat = n1 * n2;
//     } else if (calculation == '/') {
//         resultat = n1 / n2;
//     } else {
//         resultat = "L'opération n'existe pas !";
//     }
//     return resultat;
// }
 
// let operation2 = calculer(nb1, nb2, operation);
 
// document.writeln(`Le calcul de ${nb1} ${operation} ${nb2} est égal à ${operation2}`);
 
 
/**
 * 7. Age minimum pour voter
 *
 * Demander l'âge de l'utilisateur.
 *
 * Créer une fonction qui renvoie true si la personne peut voter, sinon false
 */
 
// let age1 = parseInt(prompt("Quel est votre âge"));
 
// function verification(param1) {
//     let result;
//     if (param1 >= 18) {
//         result = true;
//     } else {
//         result = false;
//     }
//     return result;
// }
 
// let verif1 = verification(age1);
 
// if (verif1) {
//     document.writeln(`<p> Super, Vous êtes majeur(e)`);
// } else {
//     document.writeln('<p> Pas super, vous êtes mineur </p>');
// }
 
 
/**
 * Exercice 8 : Message selon l'heure
 *
 * Demander une heure (Entre 0 et 23)
 *
 * Affiche bonjour entre 6h et 11h, Bon apres midi entre 12h et 17h et bonsoir entre 18h et 22h, bonne nuit pour le reste
 */
 
// let heure = prompt("A quelle heure tu t'es levé ?");
 
// if (heure >= 6 && heure <= 11) {
//     console.log('Bonjour');
// } else if (heure >= 12 && heure <= 17) {
//     console.log('Bon apres midi');
// } else if (heure >= 18 && heure <= 22) {
//     console.log('Bonsoir');
// } else {
//     console.log('Bonne nuit');
// }
 
/**
 * Convertisseur de température
 *
 * Demande une température en Celcius
 *
 * Créer une fonction qui convertit en Fahrenheit et retourne le résultat
 *
 * Formule = Fahrenheit = Celcius * 1.8 + 32;
 */
 
// let temperature = prompt("Quelle température tu as ?");
 
// function convert(resultat) {
//     // let calcul = resultat * 1.8 + 32;
//     return resultat * 1.8 + 32; // Return calcul;
// }
 
// let fahrenheit = convert(temperature);
// console.log(`La température convertie donne ${fahrenheit}`);
 
/**
 * Exercice 10 : Calcul d'un prix TTC
 *
 * Demande un prix HT (hors taxe) et un taux de TVA.
 *
 * Créer une fonction qui retourne le prix TTC
 *
 * Formule : HT + HT * TVA / 100;
 */
 
// let ht = parseInt(prompt("Donnez moi un prix HT"));
 
// let tva = parseInt(prompt("Donnez moi un taux de TVA"));
 
// function ttc(n1, n2) {
//     let ttc = (n1 + n1 * n2 / 100);
 
//     return ttc;
// }
 
// let ttc1 = ttc(ht, tva);
 
// document.writeln(`Le prix hors taxe ${ht} avec un taux de TVA de ${tva}% est égal en TTC à ${ttc1}`);
 
// Quelle est la différence entre let const et var ?
// Exemple différence Let et Var
// Const ne peut pas avoir sa valeur changée
function testVarLet() {
    if (true) {
        var x = 1;
        let y = 2;
    }
 
    //console.log(x); // ✅ Accessible, car var est visible dans toute la fonction
    //console.log(y); // ❌ Erreur : y is not defined (car let est bloqué dans le if)
}
 
testVarLet();
 
// Que se passe-t-il si tu déclares une variable sans lui donner de valeur
let vide; // Il ne se passe rien si je laisse la valeur vide
 
// Est ce qu'on peut changer la valeur d'une variable déclarée avec const :
 
const YES = "oui";
 
// YES = "non";
//Uncaught TypeError: Assignment to constant variable.
// Réponse : non
console.log(YES);
 
// 4 : Que va afficher ce code ?
 
let x;
 
console.log(x);
 
// 5 . Que se passe-t-il si aucune condition if ou else if n'est vraie ?
 
if (2 > 3) {
    console.log('oui');
} else if (3 < 0.5) {
    console.log('non');
} else {
    console.log("je suis else");
}
 
 
// 6. Que va afficher ce code SI note = 15 :
 
// if (note >= 16) {
//     console.log("Très bien");
// } else if (note >= 12) {
//     console.log("Assez bien"); // ICI 15 est supérieur à 12;
// } else {
//     console.log("Insuffisant");
// }
 
// 7. Quelle est la différence entre / et % en JS ?
 
// "/" est l'opérateur de division alors que % est l'opérateur de modulo
 
 
// 8. Que vaut 7 % 3 ?
 
// 2 * 3 = 6 pour arriver jusqu'à 7 il reste 1
 
 
// 9 . Que fait l'opérateur + si on l'utilise entre une chaine de caractère et un nombre ?
 
console.log("30" + 30); // Il affichera 3030
 
// 10. Que vaut TRUE && FALSE ?
/**
 * TRUE && TRUE = TRUE
 * TRUE && FALSE = FALSE
 * FALSE && FALSE = FALSE
 *
 * if(true && false) {
 *  console.log('hgighigigigi')
 * }
 *
 */
 
// 11. Que vaut FALSE || TRUE ?
 
// Il vaut TRUE et valide la condition
 
 
// 12. Que fait l'opérateur ! (non logique)?
// Il vérifie si la variable à la valeur contraire à celle true
 
 
 