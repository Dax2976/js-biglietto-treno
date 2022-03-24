// il programma dovra chiedere all utente il n di km che vuole percorrere e l'eta per i minori sconto del 20%
//sconto del 40% over 65


// domande sul età e km da percorrere
let km = prompt('quanti km devi percorrere?')
let anni = prompt('quanti anni hai?')
console.log( 'l utente deve percorrere '+km+'km '+'l utente ha '+anni+' anni ' )
// prezzo biglietto a km 

const prezzo_biglietto = 0.21 
console.log('Prezzo biglietto per km ' + prezzo_biglietto + '€')


// sconto giovani e anziani

if (anni < 18) {
    var final = (`${(((km*0.21)*20)/100)}`)
}
else if (anni > 65) {
    var final = (`${(((km*0.21)*40)/100)}`)
}

// calcolo sconto giovani e anziani

let prezzo = km*0.21 - final
prezzo = Math.round(prezzo * 100) / 100
console.log(prezzo)

if (anni < 18){
    document.getElementById('costo_biglietto').innerHTML= `Il costo del biglietto sarà di €${prezzo}`
} else if (anni > 65){
    document.getElementById('costo_biglietto').innerHTML= `Il costo del biglietto sarà di €${prezzo}`
} 