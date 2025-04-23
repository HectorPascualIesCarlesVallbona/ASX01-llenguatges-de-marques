const boto = document.getElementById("consultaBtn")
boto.addEventListener("click", consultaTemps)

function consultaTemps() {
    const localitat = document.getElementById('localitat').value.trim()
    const resultat = document.getElementById("resultat")

    if (!localitat) {
        resultat.innerHTML = "<p style='color:red;'>Introdueix una localitat.</p>"
        return
     }

    // Sense el encodeURIComponent
    // fetch(`https://exemple.com/api/temps/${localitat}`)
    // per defecte utilitza el mètode HTTP GET si no s'especifica cap altre mètode
    fetch(`https://exemple.com/api/temps/${encodeURIComponent(localitat)}`)
        .then(res => {
            if (!res.ok) throw new Error("Error en la resposta del servidor")
            return res.json();
        })
        .then(dades => {
            resultat.innerHTML = `
                <h2>Temps a ${dades.localitat}</h2>
                <ul>
                    <li>Temperatura: ${dades.temperatura} ${dades.unitat}</li>
                    <li>Condició: ${dades.condicio}</li>
                    <li>Humitat: ${dades.humitat}%</li>
                </ul>
            `;
        })
        .catch(error => {
            resultat.innerHTML = `<p style="color:red;">No s'han pogut obtenir dades: ${error.message}</p>`
        });
}


// Simulació de la resposta del servidor
// Aquesta part no es pot executar en un entorn real
// i només es fa servir per a la demostració
/*{
  "localitat": "Barcelona",
  "temperatura": 22,
  "unitat": "°C",
  "condicio": "Assolellat",
  "humitat": 58
}*/


// Exemple de json multidimensional
// {
//   "cursos": [
//     {
//       "nom": "Matemàtiques",
//       "professor": "Anna Puig",
//       "alumnes": [
//         {
//           "nom": "Jordi Garcia",
//           "edat": 17,
//           "qualificacions": {
//             "primer_trimestre": 8.5,
//             "segon_trimestre": 7.8,
//             "tercer_trimestre": 9.0
//           }
//         },
//         {
//           "nom": "Laia Roca",
//           "edat": 16,
//           "qualificacions": {
//             "primer_trimestre": 9.2,
//             "segon_trimestre": 8.9,
//             "tercer_trimestre": 9.5
//           }
//         }
//       ]
//     },
//     {
//       "nom": "Història",
//       "professor": "Marc Vidal",
//       "alumnes": [
//         {
//           "nom": "Pau Serra",
//           "edat": 17,
//           "qualificacions": {
//             "primer_trimestre": 6.5,
//             "segon_trimestre": 7.0,
//             "tercer_trimestre": 7.2
//           }
//         }
//       ]
//     }
//   ]
// }


// En entorns de desenvolupament professional, 
// s’utilitza la convenció 'snake_case' (amb guions baixos) 
// o 'camelCase' (sense espais, però amb majúscules interiors) 
// per a noms de propietats.
// 
// dades["primer trimestre"]  // OK
// dades.primer_trimestre     // Més net i habitual
// dades.primerTrimestre      // Més net i habitual
// dades["primer-trimestre"]  // Funciona, no recomanable
// dades.primer trimestre     // Error
// dades.primer-trimestre     // NO funciona, intenta restar variables!




