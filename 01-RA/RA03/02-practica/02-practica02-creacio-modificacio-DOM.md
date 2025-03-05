# **📌 PRÀCTICA 02 - Creació i Modificació d’Elements Dinàmics**  

## **🎯 Objectiu**  
Aquesta pràctica et permetrà treballar amb **elements HTML generats dinàmicament** mitjançant **JavaScript**, incloent:  

✅ Creació d’elements HTML des de zero i afegir-los al DOM.  
✅ Modificació del contingut i propietats dels elements creats.  
✅ Interacció amb elements nous i existents.  
✅ Creació d'una funcionalitat avançada on els elements **siguin editables** sense eliminar-los.  

---

## **📌 Estructura del projecte**  
**Crea aquesta estructura abans de començar:**  

```
RA03-javascript/
└── practica02/
    ├── index.html
    ├── css/
    │   └── styles.css
    ├── js/
        └── script.js
```

---

## **1️⃣ Configuració inicial - `index.html`**  

**Crea el fitxer `index.html` amb aquest contingut inicial:**  

```html
<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pràctica 02 - Creació i Modificació d’Elements Dinàmics</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <h1>Gestió d’Elements Dinàmics</h1>

    <div id="contenidor">
        <input type="text" id="textElement" placeholder="Escriu un text">
        <button id="afegirElement">Afegir Element</button>
    </div>

    <ul id="llistaElements"></ul>

    <script src="js/script.js"></script>
</body>
</html>
```

---

## **2️⃣ Esquema visual dels elements**  

**Com quedaria**  

```html
<body>
    <h1>Gestió d’Elements Dinàmics</h1>

    <div id="contenidor">
        [Input de text] [Botó: Afegir Element]
    </div>

    <ul id="llistaElements">
        <li>
            <span class="editable">Text de l'element 1</span>
            [Botó: Editar] [Botó: Eliminar]
        </li>
        <li>
            <span class="editable">Text de l'element 2</span>
            [Botó: Editar] [Botó: Eliminar]
        </li>
        <li>
            <span class="editable">Text de l'element 3</span>
            [Botó: Editar] [Botó: Eliminar]
        </li>
    </ul>
</body>
```

📌 **Cada element creat ha de contenir:**  
- **Un `span` amb el text editat.**  
- **Un botó "Editar" per modificar el text.**  
- **Un botó "Eliminar" per esborrar l'element.**  

---

## **3️⃣ Aplicació d’estils - `styles.css`**  

**Copia i pega a styles.css**  

```css
body {
    font-family: Arial, sans-serif;
    text-align: center;
    margin: 20px;
}

button {
    padding: 10px;
    margin: 5px;
    font-size: 16px;
    cursor: pointer;
}

ul {
    list-style: none;
    padding: 0;
}

li {
    background-color: #f0f0f0;
    padding: 10px;
    margin: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
}

.editable {
    border: none;
    background: none;
    font-size: 16px;
    width: 100%;
    cursor: text;
}
```

---

## **4️⃣ Implementació de la funcionalitat - `script.js`**  

**Requeriments de la funcionalitat:**  
1️⃣ **Afegir un nou `<li>` dinàmicament** en clicar el botó **Afegir Element**.   
2️⃣ **No permetre afegir elements buits** (cal validar l’`input`)  
3️⃣ **Cada element de la llista ha de contenir un text editable.**  
4️⃣ **Cada element ha de tenir un botó "Editar" que activi la edició en línia.**  
5️⃣ **El text ha de canviar de color cada vegada que es faci clic sobre ell.**  
6️⃣ **El botó "Eliminar" ha de permetre eliminar l’element.**  
7️⃣ **El text editable s’ha de desactivar quan l'usuari guardi els canvis.**  

**Copia i pega al teu document script.js**  

```javascript
// 1️. 


// 2️.


// 3️.


// 4️.


// 5️.


// 6️. 


// 7️. 

```

---

## **5️⃣ Entrega i Correcció**  

**Criteris d'avaluació:**  
| **Criteri** | **Punts** |
|------------|----------|
| ✅ La pràctica funciona completament | **5 punts** |
| ✅ Es valida que l’`input` no sigui buit | **1 punt** |
| ✅ El text es pot editar en línia | **1.5 punts** |
| ✅ El botó eliminar funciona correctament | **1.5 punts** |
| ✅ Es manté una estructura neta i organitzada en el codi | **1 punt** |

**Data límit d’entrega:** **🗓️ 12/03/2025 - 23:59**  

---

### **Requisits d’Entrega**  

**1️⃣ Estructura de fitxers i carpetes**  
- L’estructura ha de ser EXACTAMENT la demanada
- Els noms de fitxers i carpetes han de coincidir

**Si no es respecta l’estructura, la pràctica es considerarà NO ENTREGADA.**  

---

**2️⃣ Còpies entre alumnes**  
Si es detecten versions idèntiques o sospitosament similars:
- Tots els implicats rebran un **0 automàtic**.  
- **Es perdrà l’avaluació contínua** d’aquesta RA.  

---

**3️⃣ Ús d’Intel·ligència Artificial (IA)**  
Pots fer servir IA per ajudar-te, però:  
- Has d’entendre el codi generat  
- Se’t pot preguntar sobre el funcionament del teu codi 
- Se’t pot demanar que facis variacions en directe  

**Si no ho saps justificar, la nota es reduirà o la pràctica es puntuarà amb 0.**  

---

## **Entrega correcta = ✅ Estructura correcta + ✅ Comprensió del codi + ✅ Treball original**  


