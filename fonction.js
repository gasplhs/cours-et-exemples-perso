"use strict"

function saluer(){
    console.log("Bonjour, bienvenue")
}
saluer()

let pseudo="Doigdrip"
function saluerQqun(prenom){
    console.log("Bonjour"+ prenom)
}
saluerQqun(" Bob")
saluerQqun(" "+ pseudo)

//tableau

let tableauFruit=["Grenade","Mangue","Cerise"]
//ne pas oublier que l'index d'un tableau commence à 0 et pas 1
console.log(tableauFruit)
console.log(tableauFruit[0])
console.log(tableauFruit.length)
console.log(tableauFruit.push("Fraise"))
console.log(tableauFruit[1]="Goyave")
//boucle
for(let i=0;i<tableauFruit.length;i++){ //i++ = i+1 "i" étant l'index
     console.log(tableauFruit[i]);
}


//for(let i=10;i>5;i++){ boucle infini peut casser le pc faut faire gaff
   // console.log(i)
//}

// i++ = i+1
// i-- = i-1
// i+=2 = i+2


// boucle qui écrit "bonjour numéro x" jusqu'à 10  
/*for(let i=0;i<10;i++){
    console.log("Bonjour numéro ",i+1)
}
*/

for(let i=9;i>=0;i--){
    console.log(i+1)
    if(i==0){
        console.log("Bonne année !")
    }
}

   