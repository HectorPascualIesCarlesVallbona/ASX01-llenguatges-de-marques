# **Diferència entre `==` i `===` en el que hem vist**
Quan comparem valors en JavaScript, podem utilitzar **`==` (comparació laxa)** o **`===` (comparació estricta)**. La diferència principal és que **`===` compara tant el valor com el tipus de dada**, mentre que **`==` només compara el valor i pot convertir automàticament els tipus de dades** (*type coercion*).

---

## **1️. Exemple amb `==` (comparació laxa)**
El doble igual (`==`) **compara només els valors, però no els tipus**. Si els tipus són diferents, JavaScript intentarà convertir-los automàticament.

```javascript
console.log(5 == "5");   // true  (JavaScript converteix "5" a número)
console.log(0 == false); // true  (JavaScript converteix false a 0)
console.log(1 == true);  // true  (true es converteix a 1)
```

**Perills de `==`**
- `5 == "5"` → JavaScript converteix `"5"` a un número i diu que són iguals.
- `0 == false` → JavaScript converteix `false` a `0` i diu que són iguals.
- `null == undefined` → JavaScript considera que aquests dos valors són "equivalents".

---

## **2️. Exemple amb `===` (comparació estricta)**
El triple igual (`===`) **compara tant el valor com el tipus de dada**. No fa conversions automàtiques.

```javascript
console.log(5 === "5");   // false (un és número, l'altre és string)
console.log(0 === false); // false (un és número, l'altre és boolean)
console.log(1 === true);  // false (un és número, l'altre és boolean)
console.log(5 === 5);     // true (mateix valor i mateix tipus)
```

✅ **`===` és més segur perquè evita errors inesperats de conversió.**

---

## **Aplicació en el nostre cas (`isEvenOrOdd`)**
**Si fem servir `==`, podríem tenir problemes si el número és un string!**

### **Exemple problemàtic amb `==`**
```javascript
function isEvenOrOdd(number) {
    if (number % 2 == 0) {  // Aquí JavaScript pot convertir "10" a número
        console.log("És parell");
    } else {
        console.log("És senar");
    }
}

isEvenOrOdd("10"); // "És parell" (però el paràmetre era un string!)
```
⚠️ **Problema**: `"10"` és un string, però JavaScript el converteix a número automàticament perquè fem servir `==`.

---

### **Solució correcta amb `===`**
```javascript
function isEvenOrOdd(number) {
    if (number % 2 === 0) {  // Comprovació estricta, evita problemes de tipus
        console.log("És parell");
    } else {
        console.log("És senar");
    }
}

isEvenOrOdd("10"); // "És senar" (perquè "10" no és un número real)
```

**Amb `===`, assegurem que només números siguin considerats com a parells o senars.**

---

## **📌 Resum**
| Comparació | Explicació | Exemple que retorna `true` |
|------------|-----------|-----------------------------|
| `==` (comparació laxa) | Compara només els valors, fa conversió automàtica de tipus | `5 == "5"` → `true` |
| `===` (comparació estricta) | Compara tant el valor com el tipus, **no fa conversions** | `5 === 5` → `true`, però `5 === "5"` → `false` |

✅ **Sempre és millor utilitzar `===` per evitar errors inesperats!** 🚀