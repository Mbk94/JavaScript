let prompte = prompt("Choisis un nombre");


console.log(prompte);

if (prompte < 0) {
  console.log(prompte + " le nombre est  inferieur a 0 ");
  {
    alert(" le nombre est inferieur");
  }
} else if (prompte > 0) {
  console.log(prompte + " le nombre est superieur 0 ");
  {
    alert(" le nombre est superieur");
  }
} else {
  console.log(" le nombre est nul");
  {
    alert(" le nombre est nul");
  }
}
let prompte1 = prompt("Quel votre age ");
if (prompte1 >= 18) {
  {
    alert(" Vous etes majeur");
  }
} else if (prompte1 < 18) {
  {
    alert(" Vous etes mineur");
  }
}

let prompte2 = prompt("Entrez un jour de la semaine");
switch (prompte2) {
  case `Lundi`:
  case `Mardi`:
    alert("Debut de semaine");
    break;
  case `Mercredi`:
  case `Jeudi`:
    alert("Millieu de semaine");
    break;
  case `Vendredi`:
    case `Samedi`:
        case `Dimanche`:

    alert("Fin de semaine");
    break;
  default:
    alert("Jour non reconnu");
    break;
}
let prompte3 = prompt(" Votre language de programmation préféré");
switch (prompte3) {
  case `Javascript`: 
  alert(" Ah super j'aime Java script  ");
  break;
  case `Python`:
    alert(" Vive les serpent ");
   break;

  case `php`:
    alert("  j'aimerais apprendre php ");
    break;
    
  case `Ruby`:
  
    alert("j'aimerais apprendre ruby aussi");
    break;

  
  default:
    
    alert("Language non reconnu");
    break;
}
let choix = prompt ("Vous voulez une entrée un plat ou un dessert");
if(choix== "entrée"){
    let entree = prompt ("Vous préféré soupe ou salade");
    if(entree == "soupe"){
        alert("Vous avez choisi la soupe");
       
    }
    else if (entree=="salade"){

        alert("Vous avez choisi salade");
    }
    else{
        alert("Ouvre tes yeux")
    }
}
if(choix== "plat"){
    let plat = prompt ("Vous préféré Couscous ou Brick");
    if(plat == "couscous"){
        alert("Vous avez choisi le couscous");
       
    }
    else if (plat=="brick"){

        alert("Vous avez choisi brick");
    }
    else{
        alert("Ouvre tes yeux")
    }
}
if(choix== "dessert"){
    let dessert = prompt ("Vous préféré tart au citron ou flan");
    if(dessert == "tarte au citron"){
        alert("Vous avez choisi tarte au citron");
       
    }
    else if (dessert=="flan"){

        alert("Vous avez choisi flan");
    }
    else{
        alert("Ouvre tes yeux")
    }
}
let num1 = parseFloat (prompt("Entrez le premier numéro ")) ;
let num2 = parseFloat (prompt("Entrez le deuxieme numéro ")) ;
let operation = prompt("Quel operation voulez-vous");


if(operation=="+"){
    alert(num1+num2);
}
else if(operation=="-"){
    alert(num1-num2)
}
if(operation=="/"){
    alert(num1/num2)
}
if(operation=="*"){
    alert(num1*num2)
}
else{
    alert("Operation non reconnu")
}
