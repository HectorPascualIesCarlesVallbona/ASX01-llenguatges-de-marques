# Introducció a HTML

## Índex

- [Introducció a HTML](#introducció-a-html)
  - [Índex](#índex)
  - [1. Què és HTML?](#1-què-és-html)
  - [2. Marcats en HTML](#2-marcats-en-html)
    - [2.1 Elements semàntics](#21-elements-semàntics)
    - [2.2 Elements de contingut](#22-elements-de-contingut)
    - [2.3 Atributs](#23-atributs)
  - [3. Estructura bàsica d'un document HTML](#3-estructura-bàsica-dun-document-html)
  - [4. Exemples d'elements comuns](#4-exemples-delements-comuns)
    - [Paràgraf](#paràgraf)
    - [Enllaç](#enllaç)
    - [Imatge](#imatge)
    - [Llista ordenada](#llista-ordenada)
    - [Llista no ordenada](#llista-no-ordenada)

---

## 1. Què és HTML?

HTML (HyperText Markup Language) és el llenguatge de marcat utilitzat per crear la majoria de pàgines web. Defineix l'estructura d'una pàgina web mitjançant un conjunt d'elements o etiquetes que delimiten diferents parts del contingut, com títols, paràgrafs, imatges, enllaços, etc.

HTML no és un llenguatge de programació, sinó un llenguatge de marcat, cosa que significa que només s'encarrega de descriure el contingut i la seva estructura, però no controla la lògica ni les accions interactives del lloc web (això es fa amb altres tecnologies com JavaScript).

---

## 2. Marcats en HTML

Els elements d'HTML es defineixen mitjançant etiquetes o marcats, que solen venir en parelles: una d'obertura i una de tancament. Cada element pot tenir diferents atributs i contingut intern.

### 2.1 Elements semàntics

Els elements semàntics són aquells que defineixen el significat del contingut de forma clara. Aquests elements ajuden tant als humans com als motors de cerca a entendre millor la informació que es presenta.

Alguns exemples d'elements semàntics:

- `<header>`: Defineix la capçalera d'una pàgina o secció.
- `<article>`: Representa un contingut independent i autosuficient dins d'un document.
- `<section>`: Agrupa contingut relacionat.
- `<footer>`: Defineix el peu de pàgina o d'una secció.

### 2.2 Elements de contingut

Els elements de contingut són aquells que controlen la manera com es mostra la informació a la pàgina. Alguns exemples inclouen:

- `<p>`: Defineix un paràgraf.
- `<h1>`, `<h2>`, `<h3>`...`<h6>`: Defineixen títols de diferents nivells.
- `<img>`: Insereix una imatge.
- `<a>`: Crea un enllaç a una altra pàgina o recurs.
- `<ul>`, `<ol>`: Crea llistes no ordenades i ordenades, respectivament.

### 2.3 Atributs

Els atributs en HTML proporcionen informació addicional sobre un element. Aquests es defineixen dins de l'etiqueta d'obertura i tenen la forma `nom="valor"`. Alguns dels atributs més comuns són:

- `id`: Un identificador únic per a un element.
- `class`: Assigna una o més classes a un element per aplicar estils CSS o scripts específics.
- `src`: Defineix la font d'un recurs, com una imatge o un vídeo.
- `href`: Defineix la URL d'un enllaç.

---

## 3. Estructura bàsica d'un document HTML

Un document HTML típic té una estructura bàsica que conté els següents elements:

```html
<!DOCTYPE html>
<html lang="ca">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document HTML Bàsic</title>
  </head>
  <body>
    <header>
      <h1>Benvingut a la meva pàgina web</h1>
    </header>
    <main>
      <section>
        <h2>Sobre nosaltres</h2>
        <p>Aquesta és una breu descripció sobre nosaltres.</p>
      </section>
    </main>
    <footer>
      <p>&copy; 2024 La meva web</p>
    </footer>
  </body>
</html>
```

Aquesta estructura inclou:

- `<!DOCTYPE html>`: Indica al navegador que el document és HTML5.
- `<html>`: Conté tot el document HTML.
- `<head>`: Inclou metadades, com el títol de la pàgina i l'encoding.
- `<body>`: Conté el contingut visible del document.

---

## 4. Exemples d'elements comuns

### Paràgraf

```html
<p>Aquest és un paràgraf de text.</p>
```

### Enllaç

```html
<a href="https://www.exemple.com">Visita el nostre lloc web</a>
```

### Imatge

```html
<img src="imatge.jpg" alt="Descripció de la imatge">
```

### Llista ordenada

```html
<ol>
  <li>Element 1</li>
  <li>Element 2</li>
  <li>Element 3</li>
</ol>
```

### Llista no ordenada

```html
<ul>
  <li>Element A</li>
  <li>Element B</li>
  <li>Element C</li>
</ul>
```

---

Aquest document és una introducció bàsica als conceptes principals d'HTML. A mesura que et familiaritzis més amb el llenguatge, descobriràs altres elements i funcionalitats que et permetran crear pàgines web més complexes.
