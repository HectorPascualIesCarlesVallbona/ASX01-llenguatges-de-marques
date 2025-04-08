const boto = document.getElementById("consultaBtn");
boto.addEventListener("click", consultaTemps);

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
// i només es fa servir per a la demostració.
/*{
  "localitat": "Barcelona",
  "temperatura": 22,
  "unitat": "°C",
  "condicio": "Assolellat",
  "humitat": 58
}*/


