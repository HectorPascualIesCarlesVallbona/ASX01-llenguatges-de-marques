# **📌 PRÀCTICA 03 - Manipulació d'Estils i Efectes**  

## **Objectiu**  
En aquesta pràctica treballaràs amb **manipulació avançada d'estils i efectes visuals** en una pàgina web utilitzant **JavaScript i CSS**. Hauràs d'implementar una sèrie de funcionalitats que permetran modificar dinàmicament els estils d'un element de la pàgina.  

Aprendràs a:  
✅ Modificar colors seguint una seqüència predefinida.  
✅ Alternar entre diferents formes geomètriques (quadrat, cercle, triangle).  
✅ Afegir i controlar animacions mitjançant un `slider` de velocitat.  
✅ Limitar accions en funció de l'estat actual de l'element.  
✅ Permetre a l'usuari ajustar manualment el radi del cercle.  

**A diferència de la Pràctica 2, aquí hauràs de gestionar interaccions avançades i limitar accions segons l'estat de l'element.**  

---

## **1️⃣ Estructura del projecte**  
**Abans de començar, assegura't que la teva estructura de fitxers sigui la següent:**  

```
RA03-javascript/
└── practica03/
    ├── index.html
    ├── css/
    │   └── styles.css
    ├── js/
        └── script.js
```

📌 **Si no es respecta aquesta estructura de fitxers, la pràctica es considerarà com a NO entregada.**  

---

## **2️⃣ Creació del fitxer `index.html`**  

**Crea el fitxer `index.html` amb aquest contingut inicial:**  

```html
<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pràctica 03 - Manipulació d'Estils i Efectes</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <h1>Manipulació Avançada d'Estils i Efectes</h1>

    <div class="controls">
        <button id="canviarColor">Canviar Color</button>
        <button id="canviarForma">Canviar Forma</button>
        <button id="activarAnimacio">Activar Animació</button>
        <input type="range" id="sliderVelocitat" min="0.5" max="5" step="0.1" value="2">
        <input type="number" id="inputRadi" min="0" max="50" placeholder="Radi (%)">
        <button id="reset">Restablir</button>
    </div>

    <div id="contenidor">
        <div class="caixa"></div>
    </div>

    <script src="js/script.js"></script>
</body>
</html>
```

📌 **Explicació:**  
- **Botons per controlar l'estil de la caixa:**  
  - `"Canviar Color"` → Canvia el color de la caixa seguint una seqüència predefinida.  
  - `"Canviar Forma"` → Alterna entre **quadrat, cercle i triangle**.  
  - `"Activar Animació"` → Activa un **moviment combinat amb rotació**.  
  - `sliderVelocitat` → Permet ajustar la **velocitat de l'animació** en temps real.  
  - `inputRadi` → Permet modificar **el radi del cercle**.  
  - `"Restablir"` → Torna la caixa al seu estat inicial.  

📌 **Important**: L'animació no ha de permetre canviar de forma mentre estigui activada.

---

## **3️⃣ Creació del fitxer `styles.css`**  

**Crea el fitxer `styles.css` i afegeix aquest codi:**  

```css
/* Estil general */
body {
    font-family: Arial, sans-serif;
    text-align: center;
    background-color: #f0f0f0;
    margin: 20px;
}

/* Estil botons i inputs */
button, input {
    padding: 10px;
    margin: 5px;
    font-size: 16px;
    cursor: pointer;
}

input[type="range"] {
    width: 200px;
}

/* Contenidor principal */
#contenidor {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
}

/* Caixa principal */
.caixa {
    width: 100px;
    height: 100px;
    background-color: blue;
    transition: all 0.5s ease-in-out;
}

/* Transformacions */
.cercle {
    border-radius: 50%;
}

.triangle {
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 100px solid red;
    background: none;
}

/* Animació avançada */
:root {
    --velocitat-animacio: 2s;
}

.animacio {
    animation: moviment var(--velocitat-animacio) infinite alternate ease-in-out;
}

@keyframes moviment {
    0% { transform: translateX(0) rotate(0); }
    100% { transform: translateX(150px) rotate(360deg); }
}
```

📌 **Explicació:**  
- **`.cercle`** → Converteix la caixa en un cercle.  
- **`.triangle`** → Converteix la caixa en un triangle amb només `border`.  
- **`.animacio`** → Aplica moviment lateral i rotació.  
- **`:root`** → Emmagatzema la velocitat de l'animació en una variable CSS que pot ser modificada amb JavaScript.  

---

## **4️⃣ Funcionalitats a implementar a `script.js`**  

**Crea el fitxer `script.js` i implementa les següents funcionalitats:**  

### 1️⃣ **Canviar color de la caixa**  
- La caixa ha de canviar de color **seguint una seqüència predefinida**:  
  - Vermell → Verd → Blau → Lila → Taronja → Vermell... (en bucle).  

### 2️⃣ **Canviar la forma de la caixa**  
- Ha d'alternar entre **quadrat, cercle i triangle**.  
- Si l'animació està activada, **no es pot canviar la forma** i ha de mostrar un `alert()`.  

### 3️⃣ **Activar i desactivar l'animació**  
- La caixa ha de moure's **cap als costats i girar alhora**.  
- La velocitat de l'animació ha de ser **controlable amb el `slider`**.  

### 4️⃣ **Modificar el radi del cercle**  
- L'usuari ha de poder ajustar el **radi del cercle** mitjançant un `input` numèric.  
- Si la forma no és un cercle, ha de mostrar un `alert()` dient que només es pot aplicar al cercle.  

### 5️⃣ **Restablir la configuració original**  
- El botó `"Restablir"` ha de tornar la caixa a:  
  - Color blau.  
  - Forma de quadrat.  
  - Sense animació.  
  - Sense personalitzacions addicionals.  

---

## **5️⃣ Entrega i correcció**  

**Criteris d'avaluació:**  
✅ **Cada funcionalitat completament (5) implementada (1,80 punts cadascuna)**  
✅ **El codi està estructurat i ordenat correctament (1 punt).**   

**Data límit d'entrega:** **19/03/2025 - 23:59**  

---

### **Requisits d'Entrega**  

**1️⃣ Estructura de fitxers i carpetes**  
- L'estructura ha de ser EXACTAMENT la demanada
- Els noms de fitxers i carpetes han de coincidir

**Si no es respecta l'estructura, la pràctica es considerarà NO ENTREGADA.**  

---

**2️⃣ Còpies entre alumnes**  
Si es detecten versions idèntiques o sospitosament similars:
- Tots els implicats rebran un **0 automàtic**.  
- **Es perdrà l'avaluació contínua** d'aquesta RA.  

---

**3️⃣ Ús d'Intel·ligència Artificial (IA)**  
Pots fer servir IA per ajudar-te, però:  
- Has d'entendre el codi generat  
- Se't pot preguntar sobre el funcionament del teu codi 
- Se't pot demanar que facis variacions en directe  

**Si no ho saps justificar, la nota es reduirà o la pràctica es puntuarà amb 0.**  

---

## **Entrega correcta = ✅ Estructura correcta + ✅ Comprensió del codi + ✅ Treball original**  
 
