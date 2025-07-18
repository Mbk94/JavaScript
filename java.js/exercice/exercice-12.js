const ANIMAL ={
    espece : "Chat",
    age: "25",
    estDomestique:"race"
};
console.log(ANIMAL)
console.log(ANIMAL.espece)

ANIMAL.espece = 10;
console.log(ANIMAL)
ANIMAL.couleur = "rouge";
console.log(ANIMAL)
delete ANIMAL.estDomestique;
console.log(ANIMAL )

for (let user in ANIMAL){
    console.log(ANIMAL [user])
}
const VOITURE ={
    marque: "BMW",
    année:2016,
    présentation : function(){
        document.writeln("Cette voiture est une" + this.marque + "de" + this.année );
    }
}
VOITURE.présentation();

const ECOLE ={
    nom: "Lycée Jean Moulin",
  classe: {
    nbEleves: 28,
    info: function() {
      console.log(`Nombre d'élèves dans la classe : ${this.nbEleves}`);
    }
  }
}
ECOLE.classe.info();


let produits = [
    { nom: "Alice", prix: 30 },
    { nom: "Bob", prix: 25 },
];
console.log(produits[0].prix);
for (let user of produits) {
    console.log(user.nom);
}
