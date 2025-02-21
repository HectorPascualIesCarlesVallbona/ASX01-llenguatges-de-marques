# **RA03 - PRÀCTICA 1 - Manipulació del DOM amb JavaScript**  

## **Objectiu**
Aquesta pràctica et permetrà començar a **manipular elements d’una pàgina web amb JavaScript** utilitzant el **DOM (Document Object Model)**. Aprendràs a:  

✅ Seleccionar elements HTML amb JavaScript.  
✅ Canviar el contingut i els estils d’elements HTML.  
✅ Afegir i eliminar elements de la pàgina.  
✅ Gestionar esdeveniments de l’usuari.  

**A diferència de la Pràctica 0, aquí sí que modificarem el contingut d’una pàgina en temps real!**  

---

## **Preparació**  
1. **Crea una carpeta nova** per aquesta pràctica, que es digui `practica01` i estigui dins d'una altra carpeta anomenada `RA03-javascript`.  
2. **Dins la carpeta `practica01`, crea tres fitxers:**  
   - `index.html`  
   - `css/styles.css`  
   - `js/script.js`

   ```bash
        RA03-javascript/
        └── practica01/
            ├── index.html
            ├── css/
            │   └── styles.css
            └── js/
                └── script.js
   ```
3. **Crea l’estructura bàsica del `index.html` i assegura't d’enllaçar correctament els fitxers CSS i JavaScript.** 
   ```html
      <!DOCTYPE html>
      <html lang="ca">
         <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Pràctica 1 - Manipulació del DOM</title>
            <link rel="stylesheet" href="css/styles.css">
         </head>
         <body>

            <h1 id="titol">Hola, JavaScript!</h1>
            <p class="paragraf">Aquest és un text inicial.</p>
            <button id="canviarText">Canvia el text</button>
            <button id="afegirElement">Afegir element</button>
            <button id="eliminarElement">Eliminar últim element</button>

            <ul id="llista"></ul>

            <script src="js/script.js"></script>
         </body>
      </html>
   ```

---

## **PART 1: Seleccionar i Modificar Elements**
**Obre `script.js` i fes el següent:**  

1. **Selecciona elements HTML utilitzant JavaScript.**  
   - Selecciona l’element `<h1>` amb `id="titol"`.  
   - Selecciona l’element `<p>` amb `class="paragraf"`.  

2. **Modifica el contingut dels elements seleccionats.**  
   - Canvia el text del `<h1>` per un altre.  
   - Modifica el contingut del `<p>` i fes que tingui text en negreta.  

3. **Aplica estils mitjançant JavaScript.**  
   - Canvia el color del text del `<h1>`.  
   - Modifica la mida de la lletra del `<h1>`.  

---

## **PART 2: Afegir Esdeveniments d’Usuari**
**Fes que el botó "Canvia el text" canviï el text del títol quan es faci clic.**  

1. **Afegeix un esdeveniment al botó `id="canviarText"`.**  
   - Quan es faci clic, el text del títol ha de canviar.  
   - També ha de canviar el color del text.  

---

## **PART 3: Afegir i Eliminar Elements**
**Cada vegada que es premi un botó, es modificarà la llista.**  

1. **Fes que el botó `id="afegirElement"` afegeixi un nou element `<li>` dins de la llista `<ul id="llista">`.**  
   - El text de l’element ha de ser `"Nou element afegit!"`.  

2. **Fes que el botó `id="eliminarElement"` elimini l’últim element de la llista.**  
   - Només ha d’eliminar-se si hi ha elements dins la llista.  

---

## **PART 4: Aplicació d'Estils amb CSS**
**Obre `styles.css` i millora l’aspecte de la pàgina.**  

1. **Aplica un estil bàsic al cos (`body`) de la pàgina.**  
2. **Dissenya els botons perquè tinguin un estil agradable i canviïn de color quan es passi el ratolí per sobre.** 

---

### **PUNTUACIÓ**  
La puntuació de la pràctica es distribuirà de la següent manera:  

- **Part 1:** Seleccionar i modificar elements → **2 punts**  
- **Part 2:** Afegir esdeveniments d’usuari → **2 punts**  
- **Part 3:** Afegir i eliminar elements → **2 punts**  
- **Part 4:** Aplicació d’estils amb CSS → **2 punts**  
- **Codi net i ben estructurat:** Correcta indentació, noms de variables clars i bona organització del codi → **2 punts**  

**Total: 10 punts**  

---

### **ENTREGA**  
✔ **Data límit:** **26-02-2025** (inclòs aquest dia).  

✔ **Requisits d’entrega:**  
1. **L’estructura de fitxers i carpetes ha de ser EXACTAMENT la demanada.**  
   - Si no es respecta l’estructura o els noms de fitxers, la pràctica es considerarà **no entregada**.  

2. **Còpies entre alumnes:**  
   - Si es detecten **versions idèntiques o sospitosament similars**, es posarà un **0** a tots els implicats i es perdrà **l’avaluació contínua**.  

3. **Ús d’Intel·ligència Artificial (IA):**  
   - Pots utilitzar IA per ajudar-te, però **has d'entendre el codi generat**.  
   - Se’t pot preguntar sobre el funcionament del teu codi o se’t pot demanar **fer variacions**. Si no ho saps justificar, la nota es reduirà o la pràctica es valorarà amb **0 punts**.  

**Entrega correcte = estructura correcta + comprensió del codi + treball original.**

