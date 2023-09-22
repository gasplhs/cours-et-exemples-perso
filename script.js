"use scrict";

var prenom
prenom = "Gaspard"
console.log(prenom)  //console.log pour envoyer un mess dans la console

let nom = "Lehédois"
console.log(nom)
let nomcomplet = prenom + " "+ nom
let annéenaissance = "2005"
let annéeactu = "2023"
let age = annéeactu - annéenaissance
console.log (age)
console.log (typeof age)
// concaténation

let phrase = "je m'appelle " + prenom +" "+ nom +" "+ "et j'ai " + age + " ans"

let ouvert = true //boolean (true / false)
let total = 15.3 
let totalBis="15.3"

let nbavengers = 6 //number
let jules = "césar" //string
let étoiles = "y en a pleins" //string
let paillasson = "Welcolme !" //string
let faceid = true //boolean
let ordi = 1500 //number
let nains = "Zizou, Walter White, Geometry Dash, Guardiola, Misscuit, Doigby et Nord VPN merci pour la sponso" //string
let bg = "plop ^^ je me permets de te dm (j'ai pas l'habitude de faire ça xD) parce que j'ai vu que tu aimais bien les mangas/jeux-vidéos comme moi et je me suis dit tient c rare de croiser une geekette sur twitter (plutôt mignonne en +) voilà hésite pas si tu veux discuter je mords pas x')" //string
let naruto = "beaucoup beaucoup" //string
let défauts = "pyroman, perfectioniste, fan de Kenji Girac" //string
let anne = "frank XDDDDDD non c'est anne enft" //string
let amazon = "une config gamerzzzz avec pleins de cartess graphiques et tt masterclass l'écran 240hz appelez les condés la team" //string
let guerre100 = 100 //number
let biere = "de l'eau des bulles du fun UwU"//string
let president = "Moi ( au secours )" //string

const pseudo = "xxxtentation eh oui c'est moi ;)" //comme let mais pas modifiable pour données importante

//condition :

let prenom2 ="Pierre Palmade"
let legume = "jsuis dans une sacrée salade j'ai bsoin de 2 avocats"

let nbr1=5
let nbr2=8
let nbr3="5"

//si nbr1 egal nbr3 message d alert egalite
if(nbr1 == nbr3){
    alert("dans la vie ya différent types de profs n1 : le pédophile xDDD il pue de ouf jcrois que jtai dans la peau meme le matin t'es heau j'ai r^évé que de toi jusqu'à cque je die")
}
if(nbr1 === nbr3){
    alert("Idem bis")
}else{
    alert("GRRRRRRRRRR BAAAAAW c'est gazo grrrrr bam t'as capté enft on fait les trucs t'as capté la drill c'est un style de msik ta capté qui dénonce des trucs ta vue oeoeoe grrrrrr baw")
}

//si (){} sinon si (){}
if(nbr1>nbr2){
    alert("nbr1 est plus grand que le nbr2")
}else if(nbr1<nbr2){
    alert("nbr2 plus grand que le nbr1")
}else{
    alert("nbr1 égale nbr2")
}


//vérifier que ma variable prénom c'est bien mon prénom
if(prenom==="Gaspard"){
    alert("pas de faute de frappe bien jouer")
}else{
    alert("sale bouffon va")
}


//switch 
switch(nbr1){
    case 1:
        console.log("je suis le chiffre 1")
        break
    case 2:
        console.log("je suis le chiffre 2")
        break
    case 3:
        console.log("je suis le chiffre 3")
        break
    case 4:
        console.log("je suis le chiffre 4")
        break
    case 5:
        console.log("je suis le chiffre 5")
        break
    default:
        console.log("je suis différent")
} 

function saluer(){
    console.log("Bonjour, bienvenue")
}
saluer()

// et &&
if(nbr1==5 && nbr2 ==8){
    alert("je suis trop fort")
}else{
    alert("NOOB")
}

// ou pinèse marge ramène mon donut sucré au sucre
if(nbr1==5 || nbr2==5){
    alert("je suis trop fort ou l'autre")
}else{
    alert("GROS NULOS")
}

