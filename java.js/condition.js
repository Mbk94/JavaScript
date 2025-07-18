/*  Les conditions */
//-- Structure de base .if
if(true){ // Par defaut la condition à verifier (le if vérifie si elle est vraie)
   /* Code a executer  */
}
// Exemple :
let nb1= 10;
if(nb1 < 50){
    console.log('nb1 est inférieur a 50');
}
if(true){
    /* Code si la condition est vraie */
    
} else {
    /* Code si la condition est fausse */
}
if(nb1 > 50){
    console.log('nb1 est supérieur a 50');
}

// ELSE IF
// Else if est reservé au cas ou une autre condition serait acceptable pour notre code 
let nb2 = 50;
let nb3 = 60;
if(nb2 > nb3){
    console.log(`${nb2} est superieur a ${nb3}`);
}
else if (nb2 == nb3){
    console.log (`${nb2} est égal a ${nb3}`);
}
else {
    console.log ("tu m'embetes avec tes conditions");
}

// Switch 
// Le switch verifie une variable selon des cas
let str = `Rayane`;
switch(str){
    case `amal`:
    str = "Je m'apelle amal";
    break;
    case `Rayane`:
        str = "Je m'apelle Rayane";
        break;
        case `N'golo`:
            str = "Je m'apelle N'golo";
            break;
            default:
                str = "Je n'ai aucun prenom"
                break;
}
console.log(str);
// En utilsant les prompts 
let prompteur = prompt ("Quelle est la couleur de vos yeux");
switch(prompteur)
{
    case"bleus":
    document.writeln("<h1> Les yeux bleus rappelent la couleur de l'ocean </h1>")
    break;

    case"verts":
    document.writeln("<h1> Les yeux vert rappelent les emeraudes </h1>")
    break;

    case"marrons":
    document.writeln("<h1> Les yeux marrons rappelent les plus troncs d'arbrees de la foret </h1> ")
    break;

    case"vairons":
    document.writeln("<h1> Les yeux vairons rappelent la mixité de ce monde </h1>")
    break;
     
    default: document.writeln("<h1> Merci d'écrire une vraie couleur !!!!!! </h1>")

}
console.log (prompteur)
