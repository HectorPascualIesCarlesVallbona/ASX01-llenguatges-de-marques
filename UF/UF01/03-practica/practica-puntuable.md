**UF01 - Pràctica 01: Capçalera HTML5**

### Índex

- [Objectiu](#objectiu)
- [Requisits](#requisits)
  - [Capçalera HTML5](#capçalera-html5)
  - [Pàgines](#pàgines)
  - [Navegació sense contingut](#navegació-sense-contingut)
  - [Validació](#validació)
- [Esquema de la capçalera](#esquema-de-la-capçalera)
- [Exemples per resoldre dubtes](#exemples-per-resoldre-dubtes)
- [Esquema de l'estructura d'arxius](#esquema-de-lestructura-darxius)
- [Esquema del repositori GitHub](#esquema-del-repositori-github)
- [Instruccions per crear el repositori i estructura de carpetes](#instruccions-per-crear-el-repositori-i-estructura-de-carpetes)
  - [1. Crear el repositori a GitHub](#1-crear-el-repositori-a-github)
  - [2. Crear l'estructura de carpetes al teu ordinador](#2-crear-lestructura-de-carpetes-al-teu-ordinador)
  - [3. Inicialitzar el repositori Git i pujar els canvis a GitHub](#3-inicialitzar-el-repositori-git-i-pujar-els-canvis-a-github)
  - [4. Com pujar nous canvis](#4-com-pujar-nous-canvis)
- [Validació](#validació-1)

---

**_Hèctor Pascual_**  
<hector.pascual@iescarlesvallbona.cat>  
IES Carles Vallbona (Granollers)  
2024-2025  

---

## Objectiu

Aquesta pràctica consisteix en crear la **capçalera d'una pàgina web** utilitzant **HTML5**. Encara no afegirem cap estil visual (CSS) ni funcionalitats avançades. La capçalera estarà composta per:

- Un **logo**.
- Botons amb icones de xarxes socials (LinkedIn obligatori).
- Una **navegació** amb enllaços a diferents seccions de la pàgina.

## Requisits

### Capçalera HTML5

1. **Capçalera HTML5**:
   - Un logo personal o de referència, col·locat a la part esquerra de la capçalera.
   - Botons amb icones de xarxes socials. El botó de **LinkedIn** és obligatori i ha de redirigir a la pàgina de LinkedIn en una **pestanya nova** (`target="_blank"`). Pots afegir més botons de xarxes socials si ho desitges (Facebook, Twitter, etc.).
   - Una barra de navegació amb enllaços a les següents seccions:
     - **Inici**: Enllaç a la pàgina principal (actual).
     - **Presentació**: Enllaç a la pàgina de presentació professional. Has de crear aquesta pàgina i incloure una descripció breu del que estudies i a què et dediques.
     - **Pràctiques**: Enllaç a la pàgina on llistaràs totes les pràctiques que facis a les assignatures de tutoria, marcatge i fonaments.
     - **CV**: No cal crear aquesta pàgina en aquesta pràctica, però el botó ha de ser present a la barra de navegació.
     - **Contacte**: Crear una pàgina de contacte. Pots deixar-la amb un missatge simple indicant que està en construcció.

### Pàgines

2. **Pàgines**:
   - **Presentació**: Aquesta pàgina ha de tenir una descripció professional de tu mateix, explicant què estàs estudiant, els teus interessos i si estàs treballant en algun projecte.
   - **Pràctiques**: Aquesta pàgina ha de contenir un enllaç a totes les pràctiques que aneu fent a les assignatures de **Tutoria**, **Marcatge** i **Fonaments**. Pots utilitzar una llista no ordenada (`<ul>`) amb els títols i enllaços a les pràctiques.
   - **Contacte**: Pots deixar aquesta pàgina en construcció o afegir-hi un text indicant que estàs desenvolupant la secció.

### Navegació sense contingut

3. **Navegació sense contingut**:
   - Els botons de navegació cap a les pàgines **CV** i **Contacte** han d'estar presents, encara que no cal que omplis el contingut de les pàgines en aquesta pràctica. Només es crearà la pàgina **Presentació** i la de **Pràctiques**.

### Validació

4. **Validació**:
   - Valida el teu codi HTML5 amb el [W3C HTML Validator](https://validator.w3.org/) per assegurar-te que compleix els estàndards.

## Esquema de la capçalera

A continuació es presenta l'esquema complet de la capçalera amb la col·locació dels elements que en pràctiques posteriors posarem al seu lloc corresponent

```

+---------------------------------------------------------+
| +----------+     +--------------------------+           |
| |  LOGO    |     | Xarxes Socials:           |          |
| |          |     | [LinkedIn] [Twitter]      |          |
| +----------+     +--------------------------+           |
|                                                         |
| +-----------------------------------------------------+ |
| | Inici | Presentació | Pràctiques | CV | Contacte    | |
| +-----------------------------------------------------+ |
+---------------------------------------------------------+

```

## Exemples per resoldre dubtes

1. **Com inserir una imatge de logo?**

```html
<img src="logo.png" alt="Logo personal">
```

2. **Com crear un enllaç que obri una pestanya nova per LinkedIn?**

```html
<a href="https://www.linkedin.com/in/elnomdelteuperfil" target="_blank">
  <img src="linkedin-icon.png" alt="LinkedIn">
</a>
```

3. **Com crear un enllaç de navegació simple?**

```html
<a href="presentacio.html">Presentació</a>
```

4. **Com validar l'HTML?**

- Ves al [W3C Validator](https://validator.w3.org/), enganxa el teu codi o la URL del teu lloc i valida que no hi hagi errors.

## Esquema de l'estructura d'arxius

L'estructura d'arxius del projectevseria la següent:

```
practica01/
│
├── index.html
├── presentacio.html
├── practiques.html
└── contacte.html
```

## Esquema del repositori GitHub

```
ASX01-Llenguatge-de-marques/
│
├── README.md
│
└─── UF01/
     └─── practica01/
          ├── index.html
          ├── presentacio.html
          ├── practiques.html
          └── contacte.html
```

## Instruccions per crear el repositori i estructura de carpetes

### 1. Crear el repositori a GitHub

1. Ves a [GitHub](https://github.com/) i inicia sessió amb el teu compte.
2. Fes clic a **New Repository**.
3. Escriu com a nom del repositori: **ASX01-Llenguatge-de-marques**.
4. Assegura't que el repositori sigui **públic** o privat segons la teva preferència.
5. No afegeixis cap fitxer README ni `.gitignore` per ara.
6. Fes clic a **Create repository**.

### 2. Crear l'estructura de carpetes al teu ordinador

1. Obre una terminal al teu ordinador i crea una carpeta localment:

```bash
mkdir -p ASX01-Llenguatge-de-marques/UF01/practica01
cd ASX01-Llenguatge-de-marques
```

2. Afegeix els fitxers HTML a la carpeta `practica01`. Per exemple:

```bash
touch UF01/practica01/index.html
touch UF01/practica01/presentacio.html
touch UF01/practica01/practiques.html
```

### 3. Inicialitzar el repositori Git i pujar els canvis a GitHub

1. Inicialitza el repositori localment:

```bash
git init
```

2. Afegeix el repositori remot de GitHub:

```bash
git remote add origin https://github.com/EL

TEUNOMDEUSUARI/ASX01-Llenguatge-de-marques.git
```

3. Afegeix els fitxers al control de versions:

```bash
git add .
```

4. Fes el primer commit:

```bash
git commit -m "Primera pujada - estructura inicial de la pràctica 01"
```

5. Puja els canvis al repositori remot de GitHub:

```bash
git push -u origin master
```

### 4. Com pujar nous canvis

Quan hagis modificat algun fitxer o afegit més contingut, segueix aquests passos per sincronitzar els canvis amb GitHub:

1. Comprova l'estat dels teus fitxers:

```bash
git status
```

2. Afegeix els canvis que vols pujar:

```bash
git add .
```

3. Fes un commit amb un missatge descriptiu:

```bash
git commit -m "Descripció dels canvis"
```

4. Puja els canvis a GitHub:

```bash
git push
```

## Validació

Utilitza el validor de HTML5 del W3C per assegurar-te que el codi és correcte: [W3C HTML Validator](https://validator.w3.org/).
