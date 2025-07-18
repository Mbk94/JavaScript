console.log("Coucou")
// LA CONCENATION 
let annee = 2025;
let futur = 3;

let resultat = annee + futur;
console.log(resultat);
// Concatenation : La concatenation est le fait de lier un type string avec d'autres types ou lui meme

let phrase1 = "Aujourd'hui je suis"
let phrase2 = "heureux, c'est Louis qui l'a dit "
// 3 Facons de concatener
document.writeln("<h1> l'annee" + annee + "+" + 
    futur + "=" + resultat + "</h1>");

    // Avec simples guillemets 
    document.writeln('<h2> Nous sommes actuellement en '
        + annee + '</h2>');
        // En backtick 
        document.writeln (`<h3> Nous sommes actuellement ${annee}`);  