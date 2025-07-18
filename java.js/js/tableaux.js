/** LES TABLEAUX
 *
 * À quoi sert un tableau ?
 *
 * Il sert à stocker plusieurs valeurs (ou données Ilyes) dans une variable, au lieu d'une seule valeur
 */
 
// Créer un tableau
 
// 1. let tableau = new Array(element0, element1, element2);
let tableau1 = new Array("Rayane", "Nadia", "Dylan");
// 2. let tableau = Array(element0, element1, element2);
tableau1 = Array("Rayane", "Louis", "Sabrina");
// 3. let tableau = [element0, element1, element2];
tableau1 = ["N'Golo", "Hakim", "Bintou"];
 
// Un tableau est composé d'index (c'est la place de l'element dans le tableau), l'index commence TOUJOURS par 0
let fruits = ['pommes', 'bananes', 'cerises'];
console.log(fruits); // !!! Attention, afficher un tableau entier ne fonctionnera pas sur PHP
 
let first = fruits[0]; // On copie le premier élément du tableau fruits et on le stock dans la variable first
 
console.log(first); // Affichera pommes
 
document.writeln("Mon fruit est : " + fruits);
// Boucler sur un tableau
// let i = 0 (il representera l'emplacement initial dans le tableau vu que le tanleau commence TOUJOURS par 0)
let couleurs = ["red", "green", "orange"];
for (let i = 0; i < fruits.length; i++) {
    document.writeln(`<p style="color: ${couleurs[i]}"> fruit numéro ${i} est ${fruits[i]} </p>`);
    // document.writeln("<p style='color:" + couleurs[i] + ";'> fruit numéro " + (i + 1) + " est " + fruits[i] + "</p>");
}
 
// Méthode push : Ajoute un nouvel élément au tableau MAIS retourne la nouvelle longueur du tableau
 
// Ajouter le dernier element
 
fruits.push('Oranges'); // Ajoute Orange au tableau fruits
console.log(fruits);
 
// Supprimer le dernier élément
 
let oranges = fruits.pop(); // Supprime 'Oranges' du tableau
console.log(oranges); // = 'oranges';
console.log(fruits);
 
// fruits = ['Pommes','Bananes','Cerises'];
 
// supprimer le premier element d'un tableau
 
let pommes = fruits.shift(); // Supprime 'Pommes' du tableau
console.log(pommes); // = 'Pommes'
 
// fruits = ['Bananes','Cerises'];
 
// Ajouter au début du tableau
let nouvelleLongueur = fruits.unshift('Papaye');
console.log(fruits); // fruits = ['papaye','Bananes','Cerises'];
console.log(nouvelleLongueur); // 3
 
// Trouver l'index d'un élément dans le tableau
let pos = fruits.indexOf("bananes");
console.log(pos); // 1
 
fruits.push('Lol', 'mdr', 'ptdr', 'ok');
 
console.log(fruits);
// Supprimer un élément par son index
let removeItem = fruits.splice(pos, 2); // removeItem sera égal à 'bananes';
console.log(fruits);
console.log(removeItem);
 
 
// Slice :
 
// Méthode qui renvoie un tableau, contenant une partie superficielle d'une portion du tableau d'origine, elle est définie par un index de début et un index de fin (exclus)
 
let animaux = ['Chat', 'Chien', 'Lama', 'ornithorynque', 'chinchilla', 'ratel', 'perroquet'];
 
let newAnimal = animaux.slice(1, 5); // retourne de Chien à Chinchilla
let list = animaux.slice(1); // retourne de chien à perroquet
let chien = animaux.slice(1, 2);
 
 
 
// newAnimal = ['Chien','Lama','ornithorynque','chinchilla'];
// list = ['Chien','Lama','ornithorynque','chinchilla','ratel','perroquet'];
 
newAnimal.unshift('Chat');
console.log(newAnimal);
 