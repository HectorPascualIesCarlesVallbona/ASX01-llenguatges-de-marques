# Reconeixement de les característiques de llenguatges de marques

## Índex

- [Reconeixement de les característiques de llenguatges de marques](#reconeixement-de-les-característiques-de-llenguatges-de-marques)
  - [Índex](#índex)
  - [1. Classificació](#1-classificació)
    - [Exemples:](#exemples)
  - [2. Característiques i àmbits d'aplicació](#2-característiques-i-àmbits-daplicació)
    - [Àmbits d'aplicació:](#àmbits-daplicació)
  - [3. Estructura i sintaxi](#3-estructura-i-sintaxi)
    - [Exemples:](#exemples-1)
  - [4. Eines d'edició](#4-eines-dedició)
    - [Exemple d'edició HTML amb Visual Studio Code:](#exemple-dedició-html-amb-visual-studio-code)
  - [5. Elaboració de documents ben formats](#5-elaboració-de-documents-ben-formats)
    - [Exemples:](#exemples-2)
  - [6. Utilització d'espais de noms](#6-utilització-despais-de-noms)
    - [Exemple d'espais de noms en XML:](#exemple-despais-de-noms-en-xml)

---

## 1. Classificació

Els llenguatges de marques es poden classificar de diferents formes, segons la seva utilitat i àmbit d'aplicació:

- **Llenguatges de marques de presentació**: Llenguatges com HTML o LaTeX, utilitzats per descriure l'estructura i format de documents.
- **Llenguatges de marques de dades**: Llenguatges com XML, usats per a estructurar, emmagatzemar i intercanviar dades de manera flexible.

### Exemples

```html
<!-- Exemple d'HTML (llenguatge de marques de presentació) -->
<p>Aquest és un paràgraf.</p>
```

```xml
<!-- Exemple d'XML (llenguatge de marques de dades) -->
<persona>
    <nom>Joan</nom>
    <edat>25</edat>
</persona>
```

---

## 2. Característiques i àmbits d'aplicació

Els llenguatges de marques comparteixen una sèrie de característiques comunes:

- **Estructuració del contingut**: Permeten organitzar la informació d'una manera jeràrquica.
- **Lectura per màquines i humans**: Són llegibles tant per persones com per màquines.
- **Flexibilitat**: Poden adaptar-se a diferents necessitats segons l'àmbit d'aplicació.

### Àmbits d'aplicació

- **HTML**: Desenvolupament de pàgines web.
- **XML**: Intercanvi de dades entre aplicacions.
- **Markdown**: Documentació tècnica i articles, fàcil de llegir i editar.

---

## 3. Estructura i sintaxi

Tots els llenguatges de marques tenen una estructura basada en etiquetes que defineixen el tipus de contingut. Les etiquetes solen venir en parelles d'obertura i tancament.

### Exemples

```html
<!-- Estructura HTML bàsica -->
<html>
  <head>
    <title>Títol de la pàgina</title>
  </head>
  <body>
    <p>Aquest és un paràgraf.</p>
  </body>
</html>
```

```xml
<!-- Estructura XML bàsica -->
<document>
  <títol>Exemple d'estructura XML</títol>
  <contingut>El contingut del document va aquí.</contingut>
</document>
```

---

## 4. Eines d'edició

Per treballar amb llenguatges de marques, existeixen diferents eines d'edició que ajuden a crear, validar i mantenir documents de marques.

- **Eines per HTML**: Visual Studio Code, Sublime Text, Atom.
- **Eines per XML**: Oxygen XML Editor, XMLSpy, Notepad++.
- **Eines per Markdown**: Dillinger, Typora, StackEdit.

### Exemple d'edició HTML amb Visual Studio Code

```html
<p style="color:red;">Text en vermell</p>
```

---

## 5. Elaboració de documents ben formats

Un document de marques ben format segueix estrictament les regles del llenguatge utilitzat. Això implica:

- Etiquetes ben tancades.
- Jerarquia clara d'elements.
- Respecte pels tipus de dades esperats.

### Exemples

```html
<!-- Exemple d'HTML ben format -->
<!DOCTYPE html>
<html>
  <head>
    <title>Document correcte</title>
  </head>
  <body>
    <h1>Benvingut</h1>
    <p>Text del document.</p>
  </body>
</html>
```

```xml
<!-- Exemple d'XML ben format -->
<persona>
  <nom>Joan</nom>
  <cognom>Pérez</cognom>
  <edat>30</edat>
</persona>
```

---

## 6. Utilització d'espais de noms

En llenguatges com XML, els espais de noms (namespaces) són essencials per evitar conflictes entre etiquetes que tenen el mateix nom però diferents funcions en un document. Un espai de noms és un identificador que es defineix amb una URL o abreviació.

### Exemple d'espais de noms en XML

```xml
<library xmlns:h="http://www.w3.org/TR/html4/" xmlns:f="https://example.org/furniture">
  <h:table>
    <h:tr>
      <h:td>HTML Table Data</h:td>
    </h:tr>
  </h:table>
  <f:table>
    <f:width>100</f:width>
    <f:length>200</f:length>
  </f:table>
</library>
```

En aquest exemple, s'utilitzen dos espais de noms diferents, un per a elements HTML i un altre per a dades sobre mobiliari.

```
