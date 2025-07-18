tableau = Array("Rayane", "Idriss", "Yass","Boubou");
console.log("Premier element",tableau[0]);
console.log("Dernier elements ",tableau[tableau.length -1]);

let fruits = ['peche', 'orange', 'cerises'];
fruits.push('Goyave');
console.log(fruits)



let ville = ['Madrid', 'Marbella', 'Cancun'];
ville.unshift('Rio');
console.log(ville);


let couleur = ['rouge', 'vert', 'bleu', 'violet'];
let rouge = couleur.shift();
console.log(couleur);

let animaux = ['Chien', 'Chat', 'Tigre', 'Lion', 'renard'];
let changement = animaux.splice(2,1); 
console.log(animaux);
console.log(changement);

let lettre = ['a', 'b', 'd',];
let remplacement = lettre.splice(2,0, "c" ); 
console.log(lettre);
console.log(remplacement);

let nombre = ['1', '2', '3','4', '5', '6'];
let remp = nombre.splice(2,3);
console.log(nombre);
console.log(remp);

let pays = ['France', 'Espagne', 'Colombie'];
console.log(pays.length);

let prenom = ["Bils","Toti","Robinho","Theo"];

for (let i = 0; i < prenom.length;i++){
    console.log(prenom[i]);
}

let tableauuu = [];
tableauuu.unshift('Rio', 'Benidorm');
tableauuu.push('Goyave','Paris','Lille');
let rio = tableauuu.shift();
let change = tableauuu.splice(2,1);
console.log(tableauuu);
