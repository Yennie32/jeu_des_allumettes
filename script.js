// Demander a l'utilisateur combien d'allumettes il souhaite retirer tant qu’il y a des allumettes dans le tas. Pour rappel, on a 50 allumettes au départ.

let nombre_allumettes = 12


function fourchette_allumettes(){
   if(nombre_allumettes >= 0){
      return true
   } else {
      return false
   }
}

function tas_d_allumettes (retrait_allumettes) {
    retrait_allumettes = parseInt(prompt("Combien d'allumettes prends-tu ?"))
    while (nombre_allumettes > 0) {
     if (retrait_allumettes < 1 || retrait_allumettes > 6){
        alert("Tu peux retirer entre 1 et 6 allumettes")
     } else {
        nombre_allumettes = nombre_allumettes - retrait_allumettes
        alert(`Il reste ${nombre_allumettes} allumettes`) 
     } if (nombre_allumettes < 0){
      nombre_allumettes = nombre_allumettes + retrait_allumettes
      alert(`Tu as pris trop d'allumettes. Il reste ${nombre_allumettes} allumettes`) 
      return false
     } if (nombre_allumettes === 0){
        return alert("Bravo ! Il n'y a plus d'allumettes")}
     tas_d_allumettes()
     fourchette_allumettes()
     return true
    } 
    }
    
    
tas_d_allumettes()

