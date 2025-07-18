let age = prompt("Quel votre age");

let carte = prompt("Avez vous une carte de membre ");

if (age <= 12 || carte == "oui") {
  console.log("entree gratuite");
} else console.log("Paiement requis");

let utilisateur = prompt("etes vous connecté");
let administrateur = prompt("etes vous administrateur ? ");

if (utilisateur == "oui" && administrateur == "oui") {
  console.log("vous etes administrateur est connecté");
} else console.log("vous etes pas connecté et ni administrateur");
let feu = prompt("Quel couleur est le feu ");
let route1 = prompt(" est ce que la route est degagée");
let rouge = "couleur rouge";
let orange = "couleur orange";
let vert = "couleur vert";
let route = "route degagée";

if (vert == "couleur vert" && route == "route degagée") {
  console.log("VOUS POUVEZ PASSER");
} else
  console.log(
    "Vous pouvez pas passer parce que la route n'st pas degagée et la couleur et orange ou vert"
  );

let age1 = prompt("Quel votre age");
let etudiant = prompt("etes vous etudiant");

if (age1 <= 26 || etudiant == "oui") {
  console.log("une reduction s'applique pour les moins de 26 ans et etudiant");
} else console.log("Aucune reduction");
let nom = prompt("Avez vous un nom d'utilisateur");
let utilisateur1 = "Mbk";

let mdp = prompt("Entre votre mot de passe");
let mdpp = "123456";
if (nom == utilisateur1 && mdp == mdpp);
{
  console.log("Connexion en cours");
}
let meteo = prompt("QUEL EST LA Meteo");
let pluvieux = true;
let vent = true;
if (pluvieux && vent) {
  console.log("Alerte météo");
}
let porte = prompt("la porte est verouillée de l'interieur ou l'exterieur");
if ((porte == "porte interieur") ^ (porte == "porte exterieur")) {
  console.log("Porte sécurisée");
  {
  }
} else "Merci de repondre pour ouvrir sinon elle restera fermé";
let reduction = prompt ("Avez vous un bon  de reduction");
let cart = prompt ("Avez vous un bon  de reduction");
if (cart == "oui"||reduction == "oui"){
    console.log("Achat possible");
}
else{
    console.log("Achat non possible");
}
let vote = prompt("la porte est verouillée de l'interieur ou l'exterieur");
if ((vote == "vote en ligne") ^ (vote == "vote en personne")) {
  console.log("Vote valide");
  {
  }
} else "Vote non valide";
let velo = prompt ("Vous rouler en trotinette?");
let trotinette = prompt ("Vous rouler en velo?");
if (velo == "oui"||trotinette == "oui"){
    console.log("Le port du casque est obligatoire ");
}
else("Sinon vous pouvez rouler sans");


