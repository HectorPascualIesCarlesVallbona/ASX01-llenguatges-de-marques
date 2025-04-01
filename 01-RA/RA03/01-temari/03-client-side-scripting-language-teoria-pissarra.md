# **CLIENT-SIDE SCRIPTING LANGUAGE - PISSARRA 3** 

## Conditional
```javascript
    // Volem modificar el color de fons de pàgina segons
    // el valor del paràmetre del temps que ens arriba del servidor
    // Opcions del paràmetre => sunny (green), cloudy (blue), storm (red)
    const colors = ['red', 'green', 'blue']
    const currentWeather = 'sunny'

    if (currentWeather === 'sunny') {
        document.body.style.backgroundColor = 'green'
    } else if (currentWeather === 'cloudy') {
        document.body.style.backgroundColor = 'blue'
    } else {
        document.body.style.backgroundColor = 'red'
    }
```

## Bucle for loop
```javascript
    // Volem mostrar els números de l'1 al 10
    for (let i = 1; i <= 10; i++) {
        console.log(i)
    }
```

## Diferència entre `appendChild()` i `innerHTML`
La diferència principal entre `appendChild()` i `innerHTML` és **com afegeixen contingut al DOM** i **amb quin nivell de control ho fan**:

---

### `appendChild()`

- Afegeix **un node existent** (per exemple, un element creat amb `createElement`) com a **fill** d’un altre element.
- És més segur i recomanable quan treballes amb **elements del DOM**.
- No elimina el contingut anterior (afegeix sense substituir).
- Permet manipular l’element abans d’inserir-lo (assignar classes, atributs, esdeveniments...).

**Exemple:**
```javascript
    const li = document.createElement('li')
    li.textContent = 'Hola Trinidad'
    document.getElementById('llista').appendChild(li)
```

---

### `innerHTML`

- Afegeix **HTML en format de text** a l’interior d’un element.
- Pot substituir el contingut existent si no s’hi concatena.
- És més ràpid però **menys segur**, perquè pot introduir errors o vulnerabilitats si el text prové de l'usuari.
- Ideal per afegir grans blocs d’HTML d’un cop.

**Exemple:**
```javascript
    document.getElementById('llist').innerHTML += '<li>Hola</li>';'
```

## Esdeveniments en JavaScript (eventListener):

Els esdeveniments en JavaScript són accions que tenen lloc a la pàgina web i que poden ser detectades pel navegador, com ara fer clic amb el ratolí, passar el cursor, teclejar, desplaçar la pàgina o carregar el contingut.

Per gestionar aquests esdeveniments, fem servir la funció addEventListener(), que permet associar una funció (callback) a un determinat esdeveniment sobre un element del DOM.

```javascript
    element.addEventListener("tipusEsdeveniment", funcio)
```

```javascript
    element.addEventListener("tipusEsdeveniment", function () {
        ...
    })
```

## Detectar si element html té una classe

```javascript
    let caixa = document.getElementById("caixa")

    if (caixa.classList.contains('actiu')) {
        console.log("La classe 'actiu' està present")
    } else {
        console.log("L'element no té la classe 'actiu'")
    }
```



