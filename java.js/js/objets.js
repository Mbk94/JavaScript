// Les objets Javascript
/**
 * Qu'est ce qu'un objet ?
 * En javascript , un objet est une structure qui permet de stocker des paires clé/valeurs
 * Chaque propriéte est défini comme :
 * Clé : Valeur
 * Exemple :
 *
 */
const PERSONNE = {
  nom: "Robinho",
  aimeLeJavascript: true,
  age: 28,
};
console.log(PERSONNE);
// Comment acceder aux valeurs d'un objet
// Deux manières

console.log(PERSONNE["nom"]);
console.log(PERSONNE.nom);
// Modifier ou ajouter une propriété
// Modifier
PERSONNE.nom = "Ghislain";
console.log(PERSONNE);
PERSONNE.age = 18;
console.log(PERSONNE);
// Ajouter une propriété
PERSONNE.ville = "Vitry-sur-seine";
// Supprimer :
delete PERSONNE.aimeLeJavascript;
console.log(PERSONNE);
// Boucler sur un objet avec la boucle for ... in
for(let cle in PERSONNE){
    console.log(cle + ":" + PERSONNE[cle]);
}
// Fonctions dans un objet 
let classee = {
nbEleve: 11,
travaillentBien: true,
bonjour : function(){
    document.writeln("Bonjour tout le monde !");
}    

}
let classe = {
    // Propriétés : number, boolean, function, object
    nbEleve: 11,
    travaillentBien: true,
    bonjour: function () {
        document.writeln("Nous sommes " + this.nbEleve + " dans la classe");
    },
 
    sousClasse: {
        nbEleve: 38,
        travaillentBien: false,
        salut: function () {
            document.writeln("Nous sommes " + this.nbEleve);
        }
    }
}
classe.bonjour();

// J'appelle la fonction bonjour()
classe.bonjour();
// J'appelle la fonction salut qui se trouve dans l'objet sousClasse qui lui même est dans l'objet classe
classe.sousClasse.salut();
 
// Les Tableaux d'objets
 
let utilisateurs = [
    { nom: "Alice", age: 30 },
    { nom: "Bob", age: 25 }
];
 
document.writeln(utilisateurs[0].age);
// for of : Itère sur les VALEURS seulement
// User represente les objets en eux même
for (let user of utilisateurs) {
    console.log(user.age);
}
 
// for in :
let utilisateursObj = {
    utilisateur1: {
        nom: "Alice",
        age: 30
    },
    utilisateur2: {
        nom: "Bob",
        age: 25
    }
}
// user represente chaque clé de l'objet utilisateursObj (utilisateur1 et utilisateur2)
for (let user in utilisateursObj) {
    console.log(utilisateursObj[user].age);
}
