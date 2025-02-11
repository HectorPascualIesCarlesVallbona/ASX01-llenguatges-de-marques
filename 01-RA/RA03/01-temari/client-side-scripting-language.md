# **RA03 Manipulació de Documents Web**

## **3.1 Història de JavaScript: Desenvolupament i Evolució**

JavaScript és un dels llenguatges de programació més utilitzats avui dia, però el seu origen es remunta als anys 90, quan el desenvolupament web era encara una tecnologia emergent. A continuació, fem un recorregut per la seva història, des del seu naixement fins a les seves versions modernes, acompanyat d'exemples de codi que reflecteixen els canvis en la seva evolució.

---

### **1. Naixement de JavaScript (1995)**
L’any **1995**, Netscape Communications va contractar **Brendan Eich** per desenvolupar un llenguatge de programació per al seu navegador web Netscape Navigator. L’objectiu era permetre l’execució de scripts al navegador per fer les pàgines més dinàmiques. En **només 10 dies**, Eich va crear el primer prototip de **JavaScript** (originalment anomenat **Mocha**, després **LiveScript**, i finalment **JavaScript** per màrqueting).

✔ **Exemple de JavaScript primitiu (1995)**:
```html
<script>
    alert("Benvingut a la meva pàgina web!");
</script>
```
🔍 **Explicació**: Aquest codi simple mostra una alerta quan es carrega la pàgina. Això era el màxim que JavaScript podia fer en els seus primers dies.

---

### **2. JavaScript i l’ECMAScript (1997)**
El 1997, **ECMAScript (ES)** va ser creat com l’estàndard per JavaScript per garantir la seva compatibilitat entre diferents navegadors. **ECMAScript 1 (ES1)** va establir la primera especificació formal.

✔ **Exemple de JavaScript basat en ES1 (1997)**:
```javascript
var nom = "Anna";
function saluda() {
    return "Hola, " + nom;
}
console.log(saluda());
```
🔍 **Explicació**: En aquesta època, JavaScript només suportava **`var`** per declarar variables i encara no tenia funcions modernes com les funcions fletxa (`=>`).

---

### **3. L’era d’Internet Explorer i DHTML (2000-2005)**
Durant aquesta època, **Internet Explorer 6** va ser el navegador dominant. JavaScript es va començar a utilitzar per modificar el **DOM** de forma dinàmica, donant lloc a **DHTML (Dynamic HTML)**.

✔ **Exemple de manipulació bàsica del DOM (2001)**
```html
<button onclick="document.getElementById('missatge').innerText='Hola, món!'">
    Fes clic
</button>
<p id="missatge"></p>
```
🔍 **Explicació**: Això permetia canviar el text d’un paràgraf sense necessitat de recarregar la pàgina.

---

### **4. La Revolució d’AJAX (2005-2010)**
El 2005, Google va popularitzar **AJAX (Asynchronous JavaScript and XML)** amb aplicacions com **Gmail i Google Maps**. Aquest enfocament permetia carregar dades en segon pla sense necessitat de recarregar tota la pàgina.

✔ **Exemple de petició AJAX amb `XMLHttpRequest` (2005)**
```javascript
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        console.log(xhr.responseText);
    }
};
xhr.send();
```
🔍 **Explicació**: Aquest codi sol·licita dades a un servidor sense bloquejar la pàgina. Va ser clau en el desenvolupament de les aplicacions web modernes.

---

### **5. ECMAScript 5 (ES5) i l'entrada de JSON (2009)**
Amb la creixent popularitat de JavaScript, ES5 es va llançar el **2009** i va introduir millores significatives com **`JSON.parse()`**, **`map()`**, **`filter()`**, i el mode estricte (`"use strict";`).

✔ **Exemple d’ús de JSON amb ES5**
```javascript
var jsonString = '{"nom": "Joan", "edat": 25}';
var usuari = JSON.parse(jsonString);
console.log(usuari.nom); // Output: Joan
```
🔍 **Explicació**: JSON va permetre una millor manera d’intercanviar dades entre el navegador i el servidor.

---

### **6. ECMAScript 6 (ES6) i la Modernització de JavaScript (2015)**
ES6 (o **ES2015**) va ser la versió que va modernitzar completament JavaScript, introduint:

**`let` i `const`** (en comptes de `var`)  
**Funcions fletxa (`=>`)**  
**Classes i `import/export`**  
**`Promise` per gestió asíncrona**  

✔ **Exemple d’ES6 amb `let`, `const` i funcions fletxa**
```javascript
const suma = (a, b) => a + b;
console.log(suma(5, 3)); // Output: 8
```
🔍 **Explicació**: L’ús de **funcions fletxa** va simplificar l’escriptura de funcions.

---

### **7. ECMAScript Modern (2017 - Avui)**
Des del 2017, JavaScript s’ha anat actualitzant anualment, incorporant **async/await, opcions de mòduls dinàmics (`import()`), Nullish Coalescing (`??`), opcions de propagació (`...spread`), i més.**

✔ **Exemple amb `async/await` (ES8 - 2017)**
```javascript
async function obtenirDades() {
    let resposta = await fetch("https://jsonplaceholder.typicode.com/users");
    let dades = await resposta.json();
    console.log(dades);
}
obtenirDades();
```
🔍 **Explicació**: `async/await` facilita la gestió del codi asíncron.

---

### **8. L’actualitat i el futur de JavaScript**
**Avui dia**, JavaScript és la base de tecnologies com:
- **Frameworks front-end:** React.js, Vue.js, Angular.
- **Back-end amb Node.js:** JavaScript s’executa també al servidor.
- **Aplicacions mòbils:** React Native, Ionic.
- **WebAssembly i Intel·ligència Artificial:** La seva integració amb Python i TensorFlow.js.

✔ **Exemple de component React amb JavaScript modern**
```jsx
function Salutacio({ nom }) {
    return <h1>Hola, {nom}!</h1>;
}
export default Salutacio;
```
🔍 **Explicació**: React és un dels frameworks moderns que utilitza JavaScript per crear interfícies d’usuari.

---

### **Resum de l'evolució de JavaScript**
| Any  | Esdeveniment clau |
|------|------------------|
| 1995 | Creació de JavaScript per Brendan Eich a Netscape |
| 1997 | ECMAScript 1 (ES1) establert com a estàndard |
| 2005 | AJAX transforma les aplicacions web |
| 2009 | ES5 introdueix JSON, `map()`, `filter()` |
| 2015 | ES6 revoluciona JavaScript amb `let`, `const`, `classes`, `Promise` |
| 2017+ | **Async/Await, frameworks moderns, Node.js, WebAssembly...** |

---

## **3.2 Què és ECMAScript?**

### **Definició**
**ECMAScript (ES)** és l'estàndard oficial sobre el qual es basa **JavaScript**. És un llenguatge de programació especificat per l'organització **ECMA International**, que defineix com ha de funcionar JavaScript i estableix regles per a la seva sintaxi, funcions i comportament.

### **Per què és important ECMAScript?**
- **Garanteix compatibilitat entre navegadors.**  
- **Defineix l’evolució de JavaScript.**  
- **Assegura que les noves funcionalitats es desenvolupin de manera estructurada.**  

L’estàndard ECMAScript s'actualitza anualment des del **2015 (ES6)** per adaptar-se a les necessitats del desenvolupament web modern.

---

### **Història d’ECMAScript i Evolució**
| **Versió**  | **Any**  | **Novetats principals** |
|------------|---------|------------------------|
| **ES1**    | 1997    | Primera versió estandarditzada. |
| **ES3**    | 1999    | Millores en la gestió d’excepcions i expressió `try/catch`. |
| **ES5**    | 2009    | Introducció de `JSON.parse()`, `strict mode`, i millores en arrays (`map()`, `filter()`). |
| **ES6 (ES2015)** | 2015 | `let` i `const`, `arrow functions`, `classes`, `Promises`, `modules`. |
| **ES7 - ES13 (2016-2022)** | 2016-2022 | `async/await`, `fetch()`, `optional chaining`, `nullish coalescing`, `BigInt`, millores de rendiment. |

---

### **Diferències entre ECMAScript i JavaScript**
Moltes persones confonen **ECMAScript amb JavaScript**, però no són exactament el mateix:

| **ECMAScript** | **JavaScript** |
|---------------|---------------|
| És l’estàndard que defineix com ha de funcionar JavaScript. | És una implementació d’ECMAScript utilitzada en navegadors i entorns com Node.js. |
| No inclou funcionalitats específiques de navegador com el `DOM`. | Incorpora API’s de navegador com `document`, `window`, `fetch()`. |
| És la base sobre la qual es desenvolupen altres llenguatges com TypeScript o ActionScript. | És un llenguatge d'ús pràctic basat en ECMAScript. |

---

### **Exemples de l’evolució d’ECMAScript**

#### **1. ES5 (2009): Millores en Arrays i JSON**
```javascript
var noms = ["Anna", "Bernat", "Clara"];
var nomsMajuscules = noms.map(function(nom) {
    return nom.toUpperCase();
});
console.log(nomsMajuscules); // ["ANNA", "BERNAT", "CLARA"]
```
✔ **Introducció de `map()` i `JSON.parse()` en ES5.**

---

#### **2️. ES6 (2015): Introducció de `let`, `const`, `arrow functions`, i `modules`**
```javascript
const suma = (a, b) => a + b;
console.log(suma(5, 3)); // Output: 8
```
✔ **Millor llegibilitat i optimització del codi.**

---

#### **3️. ES7+ (2016+): `async/await` i gestió asíncrona**
```javascript
async function obtenirDades() {
    let resposta = await fetch("https://jsonplaceholder.typicode.com/users");
    let dades = await resposta.json();
    console.log(dades);
}
obtenirDades();
```
✔ **Facilita la gestió d’operacions asíncrones, evitant `callbacks` complexos.**

---

#### **4️. ES11+ (2020+): `Optional Chaining` i `Nullish Coalescing`**
```javascript
let usuari = { nom: "Pere", adreça: null };
console.log(usuari?.adreça?.carrer ?? "Adreça no disponible");
// Output: "Adreça no disponible"
```
✔ **Evita errors quan accedim a propietats inexistents d’un objecte.**

---

## **3.3 Client-Side Scripting Language: Característiques i sintaxi bàsica. Estàndards.**

Els client-side scripting languages són essencials per dotar de dinamisme i interactivitat les pàgines web. El principal llenguatge de guió de client és **JavaScript**, que permet manipular el **DOM** (Document Object Model), gestionar esdeveniments i realitzar operacions asíncrones.

Quan diem que JavaScript s'encarrega del **comportament** d'una pàgina web, ens referim a la seva capacitat per fer que una pàgina sigui dinàmica, interactiva i reactiva a les accions de l'usuari. Mentre que HTML defineix l'estructura i CSS l'estil, JavaScript permet modificar i controlar la pàgina en resposta a esdeveniments com clics (per exemple, mostrar un modal quan l'usuari clica un botó), moviments del ratolí (com destacar elements quan el cursor hi passa per sobre), entrades de teclat (com activar la cerca automàtica en temps real mentre l'usuari escriu) i molt més (com carregar contingut addicional sense recarregar la pàgina).

**Exemples reals:**

1. Formularis dinàmics i validació avançada  
Un cas comú en desenvolupament web és validar formularis de manera eficient i sense recarregar la pàgina. Aquest exemple usa 

2. Càrrega de contingut dinàmic amb AJAX  
En el món real, moltes pàgines carreguen contingut sense recarregar la pàgina gràcies a AJAX i `fetch()`, per exemple en aplicacions SPA (Single Page Applications).

3. Autocompletat en cercadors  
Aquest patró és habitual en motors de cerca com Google o formularis que suggereixen opcions basades en el text introduït.

4. Mode fosc i personalització d’estil  
Permet als usuaris canviar entre mode clar i fosc, molt comú en aplicacions modernes.

5. Comptador de caràcters en temps real  
Aquesta funcionalitat es troba en moltes aplicacions com Twitter o editors de text.


### **Característiques de JavaScript**

- **Interpretat:** No requereix compilació prèvia.
- **Tipatge dinàmic:** Les variables poden contenir diferents tipus de dades en diferents moments.
- **Basat en esdeveniments:** Pot reaccionar a accions de l'usuari (clics, moviments del ratolí, etc.).
- **Multiplataforma:** Funciona en qualsevol navegador modern.
- **Basat en prototips:** A diferència d'altres llenguatges, JavaScript utilitza prototips en lloc de classes tradicionals.
- **Execució asíncrona:** Permet treballar amb operacions asíncrones mitjançant **promises** i **async/await**.

### **Sintaxi bàsica de JavaScript**

#### **Declaració de variables**

```javascript
let nom = "Héctor";   // Variable que pot canviar
const edat = 30;       // Variable constant, no pot ser modificada
var ciutat = "Barcelona"; // Variable tradicional (no recomanada)
```

#### **Estructures de control**

```javascript
let puntuacio = 85;

if (puntuacio >= 90) {
    console.log("Excel·lent");
} else if (puntuacio >= 70) {
    console.log("Notable");
} else {
    console.log("Has de millorar");
}
```

#### **Funcions i àmbit de variables**

```javascript
function suma(a, b) {
    return a + b;
}

const resta = (a, b) => a - b;

console.log(suma(5, 3)); // Output: 8
console.log(resta(10, 4)); // Output: 6
```

#### **Treball amb arrays**

```javascript
let colors = ["vermell", "blau", "verd"];
colors.push("groc");
console.log(colors.length); // Output: 4
console.log(colors[2]); // Output: "verd"
```

#### **Iteració amb bucles**

```javascript
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}
```

---

## **3.4 Selecció i accés a elements (Document Object Model - DOM)**

### **Què és el DOM?**

El **DOM (Document Object Model)** és una representació en forma d'arbre de tots els elements d'una pàgina web. Quan un navegador carrega una pàgina HTML, crea un model jeràrquic on cada etiqueta HTML es converteix en un **node** que pot ser manipulat amb JavaScript.

**Exemple de representació del DOM**:

Per a aquest HTML:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Exemple DOM</title>
</head>
<body>
    <h1 id="titol">Hola, món!</h1>
    <p class="text">Això és un paràgraf.</p>
</body>
</html>
```

El navegador genera aquesta estructura del DOM:

```
Document
└── html
    ├── head
    │   ├── title
    │   │   └── "Exemple DOM"
    ├── body
        ├── h1#titol
        │   └── "Hola, món!"
        ├── p.text
            └── "Això és un paràgraf."
```

### **Com accedir als elements del DOM**

Podem utilitzar JavaScript per accedir i modificar elements del DOM. Els principals mètodes són:

#### **1. `getElementById()`**
```javascript
document.getElementById("titol").textContent = "Nou títol!";
```

#### **2. `getElementsByClassName()`**
```javascript
let elements = document.getElementsByClassName("text");
elements[0].style.color = "blue";
```

#### **3. `querySelector()` i `querySelectorAll()`**
```javascript
let primerParagraf = document.querySelector(".text");
primerParagraf.style.fontSize = "20px";

let totsElsParagrafs = document.querySelectorAll(".text");
totsElsParagrafs.forEach(p => p.style.backgroundColor = "yellow");
```

### **Exemples d'ús avançats**

#### **1️⃣ Modificació dinàmica del contingut**
```javascript
setTimeout(() => {
    document.getElementById("titol").textContent = "Text canviat després de 3 segons";
}, 3000);
```

#### **2️⃣ Afegir nous elements dinàmicament**
```javascript
let nouElement = document.createElement("p");
nouElement.textContent = "Això és un nou paràgraf!";
document.body.appendChild(nouElement);
```

#### **3️⃣ Esdeveniments i selecció d'elements**
```javascript
document.getElementById("titol").addEventListener("click", function() {
    alert("Has fet clic al títol!");
});
```

---

## **3.5 Creació i modificació d'elements**

Podem crear nous elements i modificar els existents amb JavaScript.

### **Creació d'elements**
```javascript
let nouElement = document.createElement("div");
nouElement.textContent = "Aquest és un nou element!";
document.body.appendChild(nouElement);
```

### **Modificació d'elements**
```javascript
let element = document.getElementById("titol");
element.textContent = "Nou text del títol";
```

---

## **3.6 Eliminació d'elements**

Podem eliminar elements existents del DOM.

### **1. `removeChild()`**
```javascript
let pare = document.getElementById("contenidor");
let fill = document.getElementById("element-a-eliminar");
pare.removeChild(fill);
```

### **2. `remove()`**
```javascript
document.getElementById("element-a-eliminar").remove();
```

---

## **3.7 Manipulació d'estils**

Podem modificar estils CSS amb JavaScript.

### **1. Modificació d'estils directament**
```javascript
let element = document.getElementById("titol");
element.style.color = "blue";
element.style.fontSize = "24px";
```

### **2. Afegir i eliminar classes**
```javascript
element.classList.add("nou-estil");
element.classList.remove("nou-estil");
```

### **3. Canviar estils de múltiples elements**
```javascript
let elements = document.querySelectorAll(".paragraf");
elements.forEach(el => {
    el.style.backgroundColor = "yellow";
});
```

### **4. Alternar classes dinàmicament**
```javascript
let boto = document.getElementById("boto");
boto.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});
```

Aquest document cobreix tot el **RA03 - Manipulació de Documents Web**, amb explicacions detallades i molts exemples de codi per facilitar-ne la comprensió i aplicació pràctica.

