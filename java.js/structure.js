// SYNTHAXE DE BASE

// Commentaire sur une ligne 

/* Commentaire 
sur 
plusieurs 
ligne
*/

// -- 1 ; Déclarer une variable en Javascript
// Déclarer une variable - le mot clé let suivi du nom de la variable
// On peut aussi faire let prenom = "Rayane";
let prenom;
var prenom2;
// -- 2 Affecter une valaur à une variable 
prenom= "Rayane";

console.log(prenom);
prenom= "Ilyes"
console.log(prenom);
prenom="Lorenzo"
console.log(prenom)
// -- 3 : Une instruction se termine toujours par un ; il est aussi posssible d'écrire plusieurs instructions sur une seul ligne 

// inst_1;
// inst_2;
// inst_2; inst_3;

// -- 4 : Afficher une boite de dialogue (2 façons)
// alert("Super tu est arrivé sur mon site !");
// window.alert("Super, tu es arrivé sur mon site !");

// -- 5 Afficher dans la console 
//  console.log("Coucou , je suis apprenant au poles");
 // -- 6 :Afficher dans la page web directement (writeln), Attention ne prennos pas l'habitude de l'utiliser

//  document.writeln("<h1> Hello World ! </h1>");
 // -- 7 : Demander à l'uitilisateur une valeur (2 façons de faire )
//  prompt("Questions : Quel jour de la semaine sommes nous ?");

//  window.prompt("Quel jour de la semaine sommes-nous?");

 // --Et pour manipuleur cette valeur je doit la stocker;

//  let jour = prompt ("Questions qui a les plus beaux cheveux de la terre");
//  console.log(jour);
//  document.writeln(jour);

 // --8 : Attention !! Le JS est sensible à la casse ('case sensitive'):mavariable-/- maVariable -/ - ma_variable
 // mavariable;
 // maVariable - camel case
 // let ma_variable - snake case; let ma_maison_parisienne; let chiffre_additionne ;
//  let chiffre_additionne
//  document.writeln
 (chiffre_additionne);
 // -- 9 : Régles des nom de variable  = variable ne peut pas commencer par un chiffre, elle doit contenir que des caractères alphanumériqques et ne peut pas étre un mot réservé (var, let , for , if des éléments natifs du language JS)
 /**
  * Les types de variables 
  */
 //-- 1 Chaines de caractéres (string)

 let vacances = "2017"
 let destination = "Australie"
  // -- 2 Nombre entier (Intégrer ou Int )

  let annee = "2017"
  let age = 24;
  // -- 3 Les nombres decimaux (Float) ATTENTION !!! en anglais les virgules sont des points 

  let decimal =2.5;

  // -- 4. Des booléens (Booléan = VRAI / FAUX + TRUE / FALSE)
    let unBooleenFalse = false;
    let unBooleenTrue = true;
 // -- 5 . Undefined (Non défini)
 let quelquechose; 
 // il sera undefined tant que je ne lui aurai pas donné de valeur
 // -- 6 . null (nulle);
 let nulle = null;
 // -- 7 Les constantes 
 /* La déclaration const permet de créer constante accessible uniquement lecture.
 uniquement en lecture. Contrairement à une variabble (let,var), sa valeur ne peut plus etre modifiée par réaffectation plus bas dans le code , une constante ne peut pas etre declarée à nouveau dans le meme */

  // -- Par convention les constantes sont en majuscules : 
  const PAYS = "france"; // Type  chaine de caractére (string)
  const AN  = "2025";   // Type de chaones de caractere  (string)
    const BIRTH = 2025; // Type Nombre Entier (int); 
    // -- 8 TypeOf permet d'identifier le type de ma variable

    console.log(PAYS);
    console.log(typeof PAYS);

    console.log(BIRTH);
    console.log(typeof BIRTH);

    const PASTRUE = false;
    console.log(typeof PASTRUE);
    


