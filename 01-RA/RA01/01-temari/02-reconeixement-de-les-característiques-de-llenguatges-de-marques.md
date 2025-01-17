# Reconeixement de les característiques de llenguatges de marques

## Índex

- [Reconeixement de les característiques de llenguatges de marques](#reconeixement-de-les-característiques-de-llenguatges-de-marques)
  - [Índex](#índex)
  - [1. Classificació](#1-classificació)
    - [Exemples](#exemples)
  - [2. Característiques i àmbits d'aplicació](#2-característiques-i-àmbits-daplicació)
    - [Àmbits d'aplicació](#àmbits-daplicació)
  - [3. Estructura i sintaxi](#3-estructura-i-sintaxi)
    - [Exemples](#exemples-1)
  - [4. Eines d'edició](#4-eines-dedició)
    - [Exemple d'edicó HTML amb Visual Studio Code](#exemple-dedicó-html-amb-visual-studio-code)
  - [5. Elaboració de documents ben formats](#5-elaboració-de-documents-ben-formats)
    - [Exemples](#exemples-2)
  - [6. Utilització d'espais de noms](#6-utilització-despais-de-noms)
    - [Exemple d'espais de noms en XML](#exemple-despais-de-noms-en-xml)
  - [7. Validesa i verificació](#7-validesa-i-verificació)
  - [8. Història i evolució dels llenguatges de marques](#8-història-i-evolució-dels-llenguatges-de-marques)

---

## 1. Classificació

Els llenguatges de marques es poden classificar en diferents categories segons la seva funció i objectiu principal. Aquesta part sembla molt teòrica, però t'ajudo amb exemples que et seran útils per veure-ho clar.

- **Llenguatges de marques de presentació**: Serveixen per mostrar coses. Per exemple, HTML estructura webs, i LaTeX s'utilitza per fer documents xulos com treballs acadèmics.
  - Exemple d'HTML:

```html
<h1>Hola, món!</h1>
<p>Aquest és un text que apareixerà al navegador.</p>
```

  - Exemple de LaTeX:

```latex
\documentclass{article}
\begin{document}
\section{Introducció}
Aquest és un document fet amb LaTeX.
\end{document}
```

- **Llenguatges de marques de dades**: Per guardar i compartir dades. XML i JSON en són clars exemples.
  - Exemple d'XML:

```xml
<persona>
  <nom>Anna</nom>
  <edat>30</edat>
</persona>
```

  - Exemple de JSON:

```json
{
  "persona": {
    "nom": "Anna",
    "edat": 30
  }
}
```

- **Llenguatges mixtos**: Fan una mica de tot, com SVG per a gràfics vectorials.
  - Exemple d'SVG:

```svg
<svg height="100" width="100">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
</svg>
```

---

## 2. Característiques i àmbits d'aplicació

### Característiques generals

- **Estructura jeràrquica**: Organitzen contingut en blocs (etiquetes dins d'etiquetes).
- **Compatibilitat**: Funciona en qualsevol lloc (web, mòbils, etc.).
- **Flexibilitat**: Pots adaptar-ho al que necessitis.

### Àmbits d'aplicació

1. **Desenvolupament web**: HTML estructura la web, CSS la fa bonica.
2. **Documentació**: Markdown per manuals i XML per gestionar dades.
3. **Gràfics**: SVG crea dibuixos i gràfics vectorials.
4. **Intercanvi de dades**: JSON i XML permeten que apps parlin entre elles.

---

## 3. Estructura i sintaxi

### Components bàsics

- **Etiquetes**: Indiquen quin tipus d'informació estem mostrant.
  - Exemple:

```html
<p>Aquest és un paràgraf.</p>
```

- **Atributs**: Donen més informació a les etiquetes.
  - Exemple:

```html
<p style="color:blue;">Aquest text és blau.</p>
```

- **Text**: El contingut principal que es mostra o processa.

### Exemples complets

- **HTML**:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Pàgina d'exemple</title>
  </head>
  <body>
    <h1>Hola!</h1>
    <p>Estic aprenent llenguatges de marques.</p>
  </body>
</html>
```

- **XML**:

```xml
<cataleg>
  <llibre>
    <títol>Aprendre XML</títol>
    <autor>Maria</autor>
  </llibre>
</cataleg>
```

---

## 4. Eines d'edició

### Eines recomanades

- **HTML**:
  - Visual Studio Code (VS Code): Super complet.
- **XML**:
  - Notepad++: Lleuger i potent.
- **Markdown**:
  - Typora: Minimalista i fàcil d’usar.

### Exemple pràctic

```html
<p style="font-size:20px; color:red;">Aquest text és gran i vermell!</p>
```

---

## 5. Elaboració de documents ben formats

Per evitar errors, assegura’t que:

- Les etiquetes sempre tinguin obertura i tancament.
- No hi hagi etiquetes mal posades.

### Exemple ben fet

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>Títol correcte</h1>
    <p>Tot ben tancat!</p>
  </body>
</html>
```

---

## 6. Utilització d'espais de noms

Els espais de noms (namespaces) són com etiquetes per diferenciar elements semblants.

### Exemple

```xml
<document xmlns:html="http://www.w3.org/1999/xhtml">
  <html:div>
    <html:p>Text en HTML dins d'XML.</html:p>
  </html:div>
</document>
```

---

## 7. Validesa i verificació

### Com validar

- **HTML**: Utilitza [W3C Validator](https://validator.w3.org/).
- **XML**: Eines com XMLSpy.

---

## 8. Història i evolució dels llenguatges de marques

### Moments clau

- **1991**: Tim Berners-Lee crea HTML.
- **1998**: XML apareix per estructurar dades.
- **Actualitat**: HTML5 i CSS3 permeten webs modernes i interactives.

### Exemple històric (HTML antic):

```html
<html>
  <head>
    <title>Pàgina antiga</title>
  </head>
  <body>
    <font color="red">Aquest text usa etiquetes antigues.</font>
  </body>
</html>
```

