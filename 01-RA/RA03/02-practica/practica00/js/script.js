console.log('Hola, món! 🎉')

// ----------------------------

const nom = 'Jordi'
let edat = 25
const ciutat = 'Barcelona'

console.log(`Hola, sóc ${nom}, tinc ${edat} anys i visc a ${ciutat}.`)
console.log('Hola me llamo Jordi...')

// ---------------------------

const num1 = 15
const num2 = 7

console.log(`La suma de ${num1} i ${num2} és:`, num1 + num2)
console.log(`La resta de ${num1} i ${num2} és:`, num1 - num2)
console.log(`La multiplicació de ${num1} i ${num2} és:`, num1 * num2)
console.log(`La divisió de ${num1} i ${num2} és:`, num1 / num2)
console.log(`El residu de ${num1} i ${num2} és:`, num1 % num2)

// ---------------------------

//const user = prompt('Quin és el teu nom?')
//console.log("El nom d'usuari és:", user)
//console.log(`El nom d'usuari és: ${user}`)
//alert(`El nom d'usuari és: ${user}`)

// ---------------------------
//edat = prompt('Quina edat tens?') // '25'
//edat = parseInt(edat) // 25

//if (edat >= 18) {
//    alert("Ets major d'edat")
//} else {
//    alert("Ets menor d'edat")
//}

// ----------------------------------
for(i=1; i < 11; i++) {
    console.log(`Número ${i}`)
}

// ----------------------------------
const a = 15
const b = 5

function suma() {
    return a + b
}

console.log(suma())

// ----------------------------------

function suma2(a,b) {
    return a + b
}

console.log(suma2(15, 5))

// ---------------------------------

function isEvenOrOdd(number) {
    // L’operador % (mòdul) calcula el residu de dividir numero per 2
    // Si numero és parell, el residu serà 0
    // Si numero és senar, el residu serà 1
    // 4 % 2  →  0  Parell
    // 7 % 2  →  1  Senar
    // 10 % 2 →  0  Parell
    // 15 % 2 →  1  Senar

    // L’operador === compara si els dos valors són exactament iguals
    // Si numero % 2 és 0, la comparació retorna true (és parell)
    // Si numero % 2 és 1, la comparació retorna false (és senar)
    
    if (number % 2 === 0) {
        console.log('és parell')
    } else {
        console.log('és senar')
    }
}

isEvenOrOdd(7)

// --------------------------
document.querySelector('.mostrarMissatge').addEventListener('click', function() {
    alert('Hello Trinidad')
})

// ----------------------------
// [] canvia color h1
// [] mida text h1
// [] canvia el text h1
// [] afegeix un paràgraf desprès del h1 
// [] elimina element del DOM
// [] aplica un estil del css


