// var compteur=2;
// function maFonction()
// {
//     var myVar=456;
//     console.log("myVar: "+myVar);
// }
// maFonction()

// if (compteur > 1)
// {
//     let myVar2="Wazza !";
//     console.log("myVar2 : "+myVar2);
// }


// console.log(typeof myVar);

// document.write("Votre âge est ");
// let age=35;
// let myLet=age;
// document.write(age);
// console.log("myLet:"+myLet);



// MyVar = "Bonjour";
// var myVar="Bonjour";
// window.alert(myVar);
// window.alert("chaîne de caractères");
// window.alert(myVar + "chaîne de caractères");
// console.log("myVar:" +myVar);


// var reponse1 = window.prompt("Saisissez votre nom");
// var reponse2 = window.prompt("Saisissez votre couleur préférée");

// if (window.confirm("Voulez-vous continuer ?") == true)
// {

// }


// alert("Vous avez confirmé !");
// console.log("alert : vous avez confirmé")


// var temperature=37
// if(window.prompt("temperature") > 37)
// {
//     alert("hospitaliser le patient");
// }

// var reponse = "oui";
// if (reponse == "oui")

// {
// console.log("Bonne réponse !");
// }


// // Condition avec ET
// let region="Ile de France"
// let ville="Paris"
// let Pays="France"

// if (region == "Ile de France" && ville == "Paris")
// {
// console.log("Pays : France");

// // Condition avec OU
// if (region == "Ile de France" || pays == "France")
// {
// console.log("Pays : France");
// }

// let reponse = "oui"
// if (reponse == "oui") {
//     console.log("Bonne réponse !");
// }
// else {
//     console.log("Mauvaise réponse !");
// }



// EXERCICES

// 1 - Parité
// Ecrivez un programme qui demande un nombre à l’utilisateur
// puis qui teste si ce nombre est pair. Le programme doit afficher
// le résultat « nombre pair » ou « nombre impair ». Vous devez
// utiliser l’opérateur modulo « % » qui donne le reste d’une division.
// a%2 donne le reste de la division de a par 2,
// si ce reste est égale à zéro, a est divisible par 2.

// let nombre = prompt("Entrer un nombre");
// alert;
// if (nombre%2==0) {
//     alert("nombre paire");
// }
// else {
//     alert("nombre impair");
// }


// 2 - Age
// Ecrivez un programme qui demande l’année de naissance à l’utilisateur.
// En réponse votre programme doit afficher l’âge de l’utilisateur et
// indiquer si l’utilisateur est majeur ou mineur.

// let age = prompt("Entrez Votre Âge");
// let letAge = 18;
// alert;
// if (age >= letAge) {
//     alert("Vous êtes Majeur")
// }
// else {
//     alert("Vous êtes Mineur")
// }


// 3 - Calculette
// Faire la saisie de 2 nombres entiers, puis la saisie 
// d'un opérateur '+', '-', '*' ou '/'.
// Si l'utilisateur entre un opérateur erroné, le programme affichera 
// un message d'erreur.
// Dans le cas contraire, le programme effectuera l'opération 
// demandée (en prévoyant le cas d'erreur "division par 0"), 
// puis affichera le résultat.


// // "parseInt" balise n'acceptant uniquement que des chiffres
// // "resuladd" pour avoir le resultat d'une opération

// let nombre1 = parseInt(prompt("Entrer un nombre"));
// let operateur = prompt("Entre une Opérateur");
// let nombre2 = parseInt(prompt("Entrer un nombre"));
// let resuladd;
// switch (operateur) {
//     case "+":
//         resuladd = nombre1 + nombre2;
//         break;
//     case "-":
//         resuladd = nombre1 - nombre2;
//         break;
//     case "*":
//         resuladd = nombre1 * nombre2;
//         break;
//     case "/":

//         if (nombre2 == 0) {
//             resuladd="erreur";
//         }
//         else{
//             resuladd = nombre1 / nombre2;
//         }
//         break;
// }
// alert(resuladd);



// 4 - Remise
// A partir de la saisie du prix unitaire PU d’un produit et de 
// la quantité commandée QTECOM, afficher le prix à payer PAP, 
// en détaillant le port PORT et la remise REM, sachant que :
// ▪ le port est gratuit si le prix des produits TOT est supérieur
//  à 500€. 
// Dans le cas contraire, le port est de 2% de TOT
// ▪ la valeur minimale du port à payer est de 6 €
// ▪ la remise est de 5% si TOT est compris entre 100 et 200 € et 
// de 10% au-delà


// let PU = parseFloat(prompt("Saisir un prix unitaire"));
// let QTECOM = parseInt(prompt("Saisir une quantité"));
// let PAP = 0;
// let PORT = 0;
// let REM = 0;
// let TOTAL = PU * QTECOM;
// if (TOTAL <= 500) {
//     PORT = TOTAL * 0.02;
//     if (PORT < 6) {
//         PORT = 6;
//     }
// } 
// if (TOTAL >= 100 && TOTAL <= 200) {
//     REM = TOTAL * 0.05;
// } else if (TOTAL > 200) {
//     REM = TOTAL * 0.1;
// } PAP = TOTAL + PORT - REM;
// console.log("TOTAL : " + TOTAL);
// console.log("PORT : " + PORT);
// console.log("REMISE : " + REM);
// console.log("TOTAL A PAYER : " + PAP);



// 5 - Participation
// Un patron décide de calculer le montant de sa participation
// au prix du repas de ses employés de la façon suivante :
// ▪ si il est célibataire : participation de 20%
// ▪ si il est marié : participation de 25%
// ▪ si il a des enfants : participation de 10% supplémentaires
// par enfant La participation est plafonnée à 50%
// Si le salaire mensuel est inférieur à 1200 € la participation
// est majorée de 10%.
// Ecrire le programme qui lit les informations au clavier et
// affiche pour chaque salarié, la participation à laquelle il a droit.


// let iParticipation = 0;
// let bStatutMarital = confirm("Êtes vous célibataire (OK)/ Marié(e) (Annuler)?");
// let iNbEnfants = parseInt(prompt("Combien d'enfants avez vous?"));
// let iSalaire = parseInt(prompt("Quel est votre salaire?"));
// if (bStatutMarital) {
//     iParticipation += 20;
// } else {
//     iParticipation += 25;
// }
// iParticipation += 10 * iNbEnfants; 
// if (iSalaire < 1200) {
//     iParticipation += 10;
// } if (iParticipation > 50) {
//     iParticipation = 50;
// } alert(iParticipation);


/*LES BOUCLES*/


// 1 - Saisie
// Créer une page HTML qui demande à l’utilisateur un prénom.
// La page doit continuer à demander des prénoms à l’utilisateur
// jusqu’à ce qu’il laisse le champ vide. Enfin, la page affiche 
// sur la console le nombre de prénoms et les prénoms saisis.


// let i = 1;
// let prenom;
// while (prenom !=""){
//     prenom = prompt("saisissez un prenom"+i);
//     i++;
//     console.log(prenom);
// }
// console.log(i + -2);





// 2 - Entiers inférieurs à N
// Ecrivez un programme qui affiche les nombres inférieurs à N.


/*let N = parseInt(prompt("Saisir"));
 
while(N>0){
    console.log(N--);
    alert(N);
}*/




/*let x = 9;

do {
    console.log(x);
    alert("x : " + x);
    x--;
}
while (x>0);*/


/*3 - Somme des entiers inférieurs à N
Ecrivez un programme qui affiche la somme des nombres inférieurs à N.*/

/*let N = parseInt(prompt("Entrer un nombre"));
let somme = 0;

while (N > 0) {
    console.log(N--);
    console.log(somme +=N);

}
alert(somme +=N);*/


/*4 - Somme d'un intervalle
Ecrivez un programme qui saisit deux nombres n1 et n2 
et qui calcul ensuite la somme des entiers de n1 à n2.*/

/*let n1 = parseInt(prompt("Entrer un nombre"));
let n2 = parseInt(prompt("Entrer un nombre"));
let somme = (n1+n2)-2;

while (n1 > 0 && n2 > 0) {
    console.log(n1--);
    console.log(n2--);
    console.log(somme);

}
alert(somme)*/


/*5 - Moyenne
Ecrire un programme qui saisit des entiers et en affiche 
la somme et la moyenne (on arrête la saisie avec la valeur 0)*/

/*let n1 = parseInt(prompt("Entrer un nombre"));
let n2 = parseInt(prompt("Entrer un nombre"));
let somme = n1 + n2;
let moyenne = somme / 2;

do {
    console.log(n1--, n2--);
    console.log(somme);
    console.log(moyenne);
}
while (n1 > 0 && n2 > 0)
alert(somme);
alert(moyenne);*/


/*LES FONCTIONS*/

function multiplication(x, y) {
    alert(x * y);
    console.log(x * y);
    return x * y;
}
var resultat = multiplication(3, 4);
alert(resultat)

