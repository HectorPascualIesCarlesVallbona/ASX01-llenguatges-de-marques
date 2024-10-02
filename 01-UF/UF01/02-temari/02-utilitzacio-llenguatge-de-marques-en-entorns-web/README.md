# Utilització de llenguatges de marques en entorns web

## Índex

- [Utilització de llenguatges de marques en entorns web](#utilització-de-llenguatges-de-marques-en-entorns-web)
  - [Índex](#índex)
  - [1. Estàndards web. Versions. Classificació](#1-estàndards-web-versions-classificació)
    - [Versions](#versions)
    - [Classificació](#classificació)
    - [Exemples](#exemples)
  - [2. Estructura d'un document HTML](#2-estructura-dun-document-html)
    - [Exemple d'estructura bàsica](#exemple-destructura-bàsica)
  - [3. Identificació d'etiquetes i atributs d'HTML](#3-identificació-detiquetes-i-atributs-dhtml)
    - [Tipus d'etiquetes](#tipus-detiquetes)
    - [Atributs comuns](#atributs-comuns)
    - [Exemples](#exemples-1)
  - [4. Eines de disseny web](#4-eines-de-disseny-web)
    - [Exemple d'editor de codi](#exemple-deditor-de-codi)
  - [5. Fulles d'estil (CSS)](#5-fulles-destil-css)
    - [Tipus de CSS](#tipus-de-css)
    - [Exemple de CSS extern (estil.css)](#exemple-de-css-extern-estilcss)
  - [6. Validació de documents HTML i CSS](#6-validació-de-documents-html-i-css)
    - [Eines de validació](#eines-de-validació)
    - [Exemple de validació](#exemple-de-validació)
  - [7. Llenguatges de marques per a la sindicació de continguts](#7-llenguatges-de-marques-per-a-la-sindicació-de-continguts)
    - [Característiques de RSS i Atom](#característiques-de-rss-i-atom)
    - [Exemple d'un feed RSS](#exemple-dun-feed-rss)
  - [8. Jerarquia HTML](#8-jerarquia-html)

---

## 1. Estàndards web. Versions. Classificació

Els **estàndards web** són un conjunt de normes que defineixen com ha de funcionar la web. El **World Wide Web Consortium (W3C)** i el **Web Hypertext Application Technology Working Group (WHATWG)** són dues organitzacions principals que estableixen aquests estàndards.

### Versions

- **HTML 4.01** (1999): Introducció de l'accessibilitat i l'internacionalització.
- **XHTML 1.0** (2000): Un intent de combinar HTML amb XML.
- **HTML5** (2014): La versió actual que inclou moltes novetats com suport multimèdia i API modernes.

### Classificació

Els llenguatges de marques es poden classificar segons la seva funció:

- **Llenguatges de marcat de presentació**: HTML, XHTML.
- **Llenguatges de marcat de dades**: XML, JSON.
- **Llenguatges de marcat per a documents**: Markdown, LaTeX.

### Exemples

```html
<!-- Exemple d'un document HTML5 -->
<!DOCTYPE html>
<html lang="ca">
  <head>
    <meta charset="UTF-8">
    <title>Exemple d'HTML5</title>
  </head>
  <body>
    <h1>Benvingut a la web!</h1>
  </body>
</html>
```

---

## 2. Estructura d'un document HTML

Un document HTML té una estructura específica que ha de seguir per ser vàlid i funcional. La seva estructura bàsica inclou:

1. **DOCTYPE**: Indica al navegador que tipus de document es.
2. **<html>**: Element arrel que conté tot el document.
3. **<head>**: Conté metadades, títol, i enllaços a recursos externs.
4. **<body>**: Conté el contingut visible de la pàgina.

### Exemple d'estructura bàsica

```html
<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pàgina d'Exemple</title>
</head>
<body>
    <h1>Títol Principal</h1>
    <p>Aquest és un paràgraf d'exemple.</p>
</body>
</html>
```

---

## 3. Identificació d'etiquetes i atributs d'HTML

Les **etiquetes** són la base del llenguatge HTML, i cada etiqueta pot tenir **atributs** que proporcionen informació addicional sobre com s'ha de mostrar o comportar l'element.

### Tipus d'etiquetes

- **Etiquetes de títol**: `<h1>` a `<h6>`, per a definir títols de diferents nivells.
- **Etiquetes de text**: `<p>` per paràgrafs, `<span>` per a text en línia.
- **Etiquetes d'enllaç**: `<a>` per crear hiperenllaços.

### Atributs comuns

- `href`: Utilitzat en la etiqueta `<a>` per especificar l'URL.
- `src`: Utilitzat en `<img>` per especificar la font d'una imatge.
- `alt`: Proporciona una descripció de la imatge en `<img>`.

### Exemples

```html
<a href="https://www.example.com" target="_blank">Visita Example.com</a>
<img src="imatge.jpg" alt="Descripció de la imatge">
```

---

## 4. Eines de disseny web

Hi ha moltes eines disponibles per a la creació i disseny de pàgines web. Algunes de les més populars són:

- **Editors de codi**: Visual Studio Code, Atom, Sublime Text.
- **Eines de prototipatge**: Figma, Adobe XD, Sketch.
- **Sistemes de gestió de continguts (CMS)**: WordPress, Joomla, Drupal.

### Exemple d'editor de codi

```html
<!-- Utilitzant Visual Studio Code per escriure codi HTML -->
<p>Exemple d'un paràgraf editat amb Visual Studio Code.</p>
```

---

## 5. Fulles d'estil (CSS)

El **Cascading Style Sheets (CSS)** és el llenguatge utilitzat per a definir l'estil visual d'un document HTML. Permet aplicar colors, fonts, espais, i dissenys a la pàgina web.

### Tipus de CSS

1. **CSS en línia**: S'aplica directament en un element.

   ```html
   <p style="color:red;">Aquest text és vermell.</p>
   ```

2. **CSS intern**: S'especifica dins de la etiqueta `<style>` a l'apartat `<head>`.

   ```html
   <style>
       body {
           background-color: lightblue;
       }
   </style>
   ```

3. **CSS extern**: Es vincula a un arxiu CSS extern.

   ```html
   <link rel="stylesheet" href="estil.css">
   ```

### Exemple de CSS extern (estil.css)

```css
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

h1 {
    color: blue;
}
```

---

## 6. Validació de documents HTML i CSS

La **validació** és un pas crucial per assegurar que el codi HTML i CSS compleixi els estàndards establerts, evitant errors que poden afectar la visualització o funcionalitat de la pàgina web.

### Eines de validació

- **W3C Markup Validation Service**: Permet validar documents HTML.
- **W3C CSS Validation Service**: Permet validar fulles d'estil CSS.

### Exemple de validació

```html
<!-- Un document HTML vàlid -->
<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <title>Pàgina Vàlida</title>
</head>
<body>
    <h1>Benvingut!</h1>
    <p>Aquest document és vàlid segons els estàndards W3C.</p>
</body>
</html>
```

---

## 7. Llenguatges de marques per a la sindicació de continguts

La **sindicació de continguts** és una tècnica que permet que els usuaris accedeixin a actualitzacions de contingut de manera ràpida i eficient. Els llenguatges de marques utilitzats per a la sindicació inclouen **RSS** (Really Simple Syndication) i **Atom**.

### Característiques de RSS i Atom

- **RSS**: Permet als usuaris subscriure's a feeds d'actualització de contingut.
- **Atom**: Un format similar a RSS, amb més funcionalitats i més extensible.

### Exemple d'un feed RSS

```xml
<rss version="2.0">
  <channel>
    <title>El meu Blog</title>
    <link>https://www.meubloc.com</link>
    <description>Actualitzacions del meu blog.</description>
    <item>
      <title>Nou article!</title>
      <link>https://www.meubloc.com/nou-article</link>
      <description>Aquest és un nou article del blog.</description>
      <pubDate>Mon, 27 Sep 2024 10:00:00 GMT</pubDate>
    </item>
  </channel>
</rss>
```

## 8. Jerarquia HTML

[Introduction to HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals)

---
