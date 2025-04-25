const diesSetmana = ['Dilluns', 'Dimarts', 'Dimecres', 'Dijous', 'Divendres']

// dia actual de la setmana que estem (modifcable)
const currentDay = diesSetmana[0]
const ButtonDay = document.querySelector('#buttonDay')

const buttonDiesSetmana = document.getElementById('listItemsButton')
const llistatDies = document.querySelector('#llistat')


// 1. mostra els dies de la setmnana a la consola separat per linies o missatges
ButtonDay.addEventListener('click', function() {
  // evitar que ens mostri el missatge més d'una vegada
  if (ButtonDay.classList.contains('active')) {
    return
  }

  // iterem pels elements de l'array
  for (let i=0; i<diesSetmana.length; i++) {
 
    // mostrem un missatge segons el dia de la setmana que estam
    if (currentDay === diesSetmana[0] ){
      console.log('Estamos en lunes')
    }
    else if ( currentDay === diesSetmana[4]){
      console.log('Es viernes!')
    }
    else{
      console.log('ns')
    }

    // Afegim classe per evitar que ens mostri el missatge més d'una vegada
    ButtonDay.classList.add('active')
}
})

// 2. Escriu a l'html des de js els dies de la setmana dintre de l'element html amb id 'llistat'
buttonDiesSetmana.addEventListener('click', addDays)

function addDays () {
  for (let i = 0; i < diesSetmana.length; i++) {
    // creem element abans d'afegir al DOM
    const li = document.createElement('li')
    // afegim propietats a l'element creat
    li.textContent = diesSetmana[i]
    // afegim al DOM
    llistat.appendChild(li) 
  }
}




