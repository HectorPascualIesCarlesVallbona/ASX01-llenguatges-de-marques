# Què és una API REST?
API REST (o RESTful API) és una interfície de programació que permet que diferents aplicacions es comuniquin entre elles a través d’internet utilitzant el protocol HTTP, com ho fan les pàgines web.

## Desglossem els termes:
**API = Application Programming Interface**
És un conjunt de regles i definicions que permeten accedir a funcionalitats o dades d'una aplicació des de fora.

**REST = Representational State Transfer**
És un estil arquitectònic que defineix com construir APIs utilitzant les normes i verbs del protocol HTTP de manera clara i previsible.

## Exemple concret: API del temps
Pots tenir una API REST amb aquesta estructura:

| Ruta                         | Mètode HTTP | Acció                            |
|------------------------------|-------------|----------------------------------|
| `/api/temps/barcelona`       | GET         | Retorna el temps a Barcelona     |
| `/api/temps/girona`          | GET         | Retorna el temps a Girona        |

# Exemple de petició asíncrona de javascript al servidor via GET
```javascript
    const btnLoad = document.getElementById('loadBtn')
    const message = document.getElementById('message')

    boto.addEventListener('click', () => {  
        // Fem una petició GET asíncrona al servidor
        // Què significa fetch?
        // fetch és una funció que ens permet fer peticions HTTP a un servidor
        // i obtenir dades d'ell. En aquest cas, estem demanant un recurs
        // (un missatge) a l'URL especificat.
        // La url és el punt d’accés principal al servei o API, se li diu ENDPOINT
        fetch('https://exemple.com/api/message')
            // Quan rebem la resposta, la convertim a JSON
            // resposta és un objecte que conté la resposta del servidor,
            // es podria definir amb un nom diferent
            .then(res => res.json())
            // Quan tenim el JSON, accedim a la propietat 'text'
            // data és un objecte que conté les dades que hem obtingut del servidor
            // es podria definir amb un nom diferent
            .then(data => {
                // Mostrem el text al paràgraf
                message.textContent = data.text
            })
            // Si hi ha algun error (ex: no hi ha connexió), mostrem un missatge d'error
            // error es podria definir amb un nom diferent
            .catch(error => {
                message.textContent = 'Error al carregar el missatge.'
            })
    })
```
# JSON
JSON (JavaScript Object Notation) és un format de dades lleuger i fàcil d'usar per a l'intercanvi d'informació entre servidors i aplicacions. JSON és un format basat en text que utilitza una sintaxi similar a la dels objectes de JavaScript.

**Objecte**: Un objecte és una col·lecció de parells clau-valor. Cada clau és una cadena de text (string) i cada valor pot ser de qualsevol tipus de dades (string, número, booleà, array, objecte, etc.).

```json
    {
        "text": "Hola alumnes! Aquesta és una resposta asíncrona del servidor."
    }
```

# NESTED JSON
```json
    {
        "usuari": {
            "nom": "Carla",
            "edat": 28,
            "actiu": true,
            "adreça": {
            "carrer": "Av. Catalunya",
            "ciutat": "Lleida",
            "codiPostal": "25001"
            },
            "hobbies": ["pintura", "ciclisme", "lectura"],
            "contacte": {
            "email": "carla@example.com",
            "telefon": null
            }
        }
    }
```

```js
    const dades = {
        usuari: {
            nom: "Carla",
            edat: 28,
            actiu: true,
            adreça: {
                carrer: "Av. Catalunya",
                ciutat: "Lleida",
                codiPostal: "25001"
            },
            hobbies: ["pintura", "ciclisme", "lectura"],
            contacte: {
                email: "carla@example.com",
                telefon: null
            }
        }
    }
```

## Accedir a dades bàsiques:
```js
    console.log(dades.usuari.nom)        // "Carla"
    console.log(dades.usuari.edat)       // 28
    console.log(dades.usuari.actiu)      // true
```

## Accedir a objectes dins d’objectes:
```js
    console.log(dades.usuari.adreça.ciutat)       // "Lleida"
    console.log(dades.usuari.adreça.codiPostal)   // "25001"
```

## Accedir a valors d’un array:
```js
    console.log(dades.usuari.hobbies[0])  // "pintura"
    console.log(dades.usuari.hobbies[2])  // "lectura"

    for (const hobby of dades.usuari.hobbies) {
        console.log("Hobby:", hobby)
    }
```
