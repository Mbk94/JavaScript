/**
 *  Les fonctions
 * les fonctions sont des structures qui permettent de réutiliser le code à l'intérieur indéfinement selon les besoins
 * structure :
 * function nomdeelafonction(){
 * *... Code a éxécuter !
 * }
 */
// Les fonctions prédéfinies (native)
// indexof()
// Cherche la position d'un element dans une chaine de caractére (si l'element n'est pas trouvé il retourne -1 )
let phras = "pates";
let positio = phrase.indexOf("e");
// Cherche la positions du e dans pates
document.writeln("<span>" + position + "</span>");
// Includes()

// Verifie si une chiane de caractére contient un élement (retourne true ou false)
let email = prompt("quel est votre email ?");
if (email.includes("@")) {
  alert("Email valide");
} else {
  alert("Email invalide");
}
// tolowercase(), touppercase(), minuscule majuscule
// length : length retourne la longueur d'une chaine de caractere (ou le nombre d'élements d'un tableau)
let phrasee1 = "Nadia m'a demandé une phrase !";
document.writeln(phrase1.length);
// fonctions utilisateurs
// Les 4 types de fonctions personnalisées
/**
 * 1.fonctions sans paramétre sans valeur de retour
 * 
 */
function helloworld() {
  console.log("Coucou");
}
// 2. Function avec paramétre sans valeur de retour
function bonjourClasse(prenom) {
  document.writeln("Bonjour" + prenom);
}
// Je mets mon paramétre ici (dans les parenthèses)
bonjourClasse("sabrina");
bonjourClasse("Bintou");
bonjourClasse("Blabla");
// 3. Function sans parametre avec valeur de retour
function byeBye() {
  // on utilise le mot clé
  return "Au revoir";
}
// La spécificité ici, c'est que vu qu'il y'a un return, il nous retourne une valeur qu'on doit stocker
let ciao = byeBye();
console.log(ciao);
// 4.   Function avec parametre avec valeur de retour
function addition(num1, num2) {
  return num1 + num2;
}
let additioon1 = addition(4, 10);
document.writeln(addition1);

function bonjour() {
  document.writeln("BONJOUR!");
}
bonjour();
bonjour();
bonjour();
bonjour();
bonjour();
bonjour();
bonjour();
bonjour();
bonjour();
bonjour();



/**
 * LES FONCTIONS
 *
 * Les fonctions sont des structures qui permettent de réutiliser le code à l'interieur indéfiniment selon les besoins
 *
 * structure :
 *
 *  function nomdelafonction(){
 * ...Code à éxécuter !;
 * }
 */
 
// Les fonctions prédéfinies (native)
 
// indexof()
 
// Cherche la position d'un element dans une chaine de caractère (si l'élément n'est pas trouvé il retourne -1)
 
let phrase = "pates";
 
let position = phrase.indexOf("e"); // Cherche la position du e dans 'pates'
document.writeln('<span>' + position + '</span>');
 
// includes()
 
// Vérifie si une chaine de caractère contient un élément (retourne true ou false)
 
// let email = prompt("Quel est votre email ?");
 
// if (email.includes('@')) {
//     alert('Email Valide');
// } else {
//     alert('Email invalide');
// }
 
// toLowerCase(), toUpperCase() minuscule et majuscule
 
// length : length retourne la longueur d'une chaine de caractère (ou le nombre d'éléments d'un tableau)
 
let phrase1 = "Nadia m'a demandé une phrase !";
 
document.writeln(phrase1.length);
 
// Fonctions Utilisateurs
 
/**
 * Les fonctions utilisateur se distinguent en 4 types
 */
 
 
 
// 1 . Fonction sans paramètres sans valeur de retour
 
// On laisse les paramètre et la fonction ne dispose d'aucun return
function additionSansVSansR() {
    document.writeln("<p>" + (10 + 2) + "</p>"); // `<p> ${10 + 2} </p>`;
}
 
// J'appelle ma fonction
additionSansVSansR();
 
 
// 2 . Fonction avec paramètre sans valeur de retour
 
// On rempli le ou les paramètres et la fonction ne dispose d'aucun return
 
function additionAvecVSansR(num1, num2) {
    document.writeln(`<p> ${num1 + num2} </p>`);
}
 
// Je rempli mes paramètres à chaque fois que j'appelle ma fonction
 
additionAvecVSansR(30, 50);
additionAvecVSansR(60, 200);
 
// 3 . Fonction sans paramètre avec valeur de retour
 
function additionSansPAvecR() {
  
    return 20 + 30;
}
 
let addition1 = additionSansPAvecR(); // Egal à 50;
 
document.writeln(addition1);
 
 
// 4 . Fonction avec Parametre avec Valeur de retour
 
function additionAvecPAvecR(num1, num2) {
    return `Le résultat de ${num1} + ${num2} est égal à ${num1 + num2}`; // 'Le resultat de ' + num1 + '+' + num2 + ' est égal à ' + (num1 + num2);
}
 
let addition2 = additionAvecPAvecR(23, 34);
 
console.log(addition2);
 
 
 
// Quelques exemples
 
function bonjour() {
    document.writeln(`<p> Bonjour tout le monde </p>`);
}
 
bonjour();
 
 
function bonjourP(nom) {
    document.writeln(`<p> Bonjour ${nom} </p>`);
}
 
bonjourP('Rayane');
bonjourP('Nadia');
bonjourP('Lorenzo');
 
function bonjourR() {
    return `Bonjour tout le monde`;
}
 
let bonjour1 = bonjourR();
 
document.writeln(bonjour1);
 
function bonjourVR(nom) {
    return `Bonjour ${nom}`;
}
 
let sabrina = bonjourVR('Sabrina');
 
document.writeln(sabrina);
 
 
// Function avec PROMPT :
 
function meteo(saison, temperature) {
    let message = `Nous sommes en ${saison} et il fait actuellement ${temperature} degrès`;
 
    document.writeln(`<p> ${message} </p>`);
}
 
let saison = prompt("Donne moi une saison :");
let temperature = prompt("Donne moi une temperature");
 
meteo(saison, temperature);
 