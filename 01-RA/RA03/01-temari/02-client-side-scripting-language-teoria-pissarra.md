# **📌 CLIENT-SIDE SCRIPTING LANGUAGE - PISSARRA 2**  

---

## **📌 Metodologia d'Entrega de Pràctiques i Examen**  

📌 **Criteris de qualificació:**  
- **Nota < 4 a la pràctica** → RA suspesa → Presentació obligatòria de la pràctica al juny.  
- **Nota < 4 a l'examen** → RA suspesa.  
- **Còpia d’un company** → RA suspesa → Caldrà **repetir TOTA la RA al juny**.  

📌 **Criteris de penalització en les pràctiques:**  
- **No seguir l'estructura del projecte o la nomenclatura indicada** → **-2 punts**, encara que sigui un detall mínim.  
- **Entrega fora de termini sense justificació vàlida** → **Nota automàtica de 0**.  
- **Les rutes en els arxius HTML han de ser relatives, no absolutes**. Si aquesta norma no es compleix → **-3 punts**.  

---

## **📌 Conceptes clau de la pissarra**  

### **📌 ECMAScript (ES)**
- **ECMAScript** és l'estàndard oficial en què es basa **JavaScript**.  
- Defineix la sintaxi, funcionalitats i comportament del llenguatge.  
- **Garanteix compatibilitat** entre navegadors.  
- Estableix un model d’evolució estructurat per a JavaScript.  

---

### **📌 `querySelector()` - Repàs**  
- Permet **seleccionar elements HTML** utilitzant selectors CSS.  

    ```javascript
        const title = document.querySelector('#title')  // Selecciona qualsevol element
        const info = document.querySelectorAll('.info');  // Selecciona qualsevol element (selecciona tots)
        const decription = document.getElementById('description');  // Només per ID #description
        const button = document.getElementByClassName('cta');  // Només per classe .cta
    ```
---

### **📌 Afegir un Element al DOM Dinàmicament**
    ```javascript
        const nouElement = document.createElement('p')
        nouElement.textContent = 'Això és un nou paràgraf!'
        // nouElement.innerHTML = 'Això és un nou paràgraf!'
        document.body.appendChild(nouElement);
    ```
🔹 **Explicació:**  
- `createElement('p')` → Crea un nou element `<p>`.  
- `textContent`, `innerHTML` → Assigna el text a l'element.  
- `appendChild(nouElement)` → Afegeix l'element al `body`.  

---

### **📌 Event Listeners - Gestors d'Esdeveniments**
- Permeten **executar codi en resposta a accions de l'usuari**.  
- Exemple de listener per al clic d'un botó:  

```javascript
    document.getElementById('boto').addEventListener('click', function() {
        alert('Has fet clic!')
    });
```

---

### **📌 DOM (Document Object Model)**  
📌 El **DOM** és la representació en forma d'arbre dels elements HTML d'una pàgina.  

🔹 **Exemple d’estructura generada pel navegador:**  
```
Document
└── html
    ├── head
    │   ├── title
    │   │   └── 'Exemple DOM'
    ├── body
        ├── h1#titol
        │   └── 'Hola, món!'
        ├── p.text
            └── 'Això és un paràgraf.'
```
🔹 **Explicació:**  
- Cada element HTML es converteix en un **node** dins de l’arbre del DOM.  
- JavaScript permet **modificar, afegir o eliminar** aquests nodes.  

---

### **📌 Objectes i Arrays en JavaScript**
📌 Exemple de **llista (array) de colors**:  

```javascript
const colors = ['vermell', 'blau', 'verd', 'groc'];
colors.push('groc');  // Afegeix 'groc' a l’array
console.log(colors.length);  // Output: 4
console.log(colors[2]);  // Output: 'verd'
```
🔹 **Explicació:**  
- `push('groc')` afegeix un nou element a l'array.  
- `length` retorna el nombre d'elements de l'array.  
- `colors[2]` accedeix a un element en una posició específica.  

---

### **📌 Canviar Estils de Múltiples Elements**
📌 Exemple de com modificar els **estils de diversos elements alhora**:

```javascript
const elements = document.querySelectorAll('.info');
elements.forEach(element, function () {
    element.style.backgroundColor = 'yellow'
});
```
🔹 **Explicació:**  
- `querySelectorAll('.info')` selecciona tots els elements amb la classe `.info`.  
- `forEach()` recorre cada element i li assigna un nou color de fons.  

