# **UF01 - Pràctica 02: Estructura amb nav + section + aside**

### Índex

- [**UF01 - Pràctica 02: Estructura amb nav + section + aside**](#uf01---pràctica-02-estructura-amb-nav--section--aside)
    - [Índex](#índex)
  - [Objectiu](#objectiu)
  - [Requisits](#requisits)
    - [Preparació de l'estructura](#preparació-de-lestructura)
    - [Estructura HTML](#estructura-html)
    - [Validació](#validació)
  - [Esquema de l'estructura dins del `<body>`](#esquema-de-lestructura-dins-del-body)
  - [Exemples per resoldre dubtes](#exemples-per-resoldre-dubtes)
  - [Explicació de l'etiqueta `<aside>`](#explicació-de-letiqueta-aside)
    - [Exemple de `<aside>`](#exemple-de-aside)
  - [Explicació de l'etiqueta `<section>`](#explicació-de-letiqueta-section)
    - [Característiques de `<section>`](#característiques-de-section)
    - [Exemple de `<section>` amb un formulari](#exemple-de-section-amb-un-formulari)
  - [Explicació de l'etiqueta \`\<](#explicació-de-letiqueta-)
    - [Característiques de `<form>`](#característiques-de-form)
    - [Exemple bàsic de `<form>`](#exemple-bàsic-de-form)
  - [Validació](#validació-1)

---

## Objectiu

En aquesta pràctica, afegirem una estructura HTML dins del cos de la pàgina (`<body>`) utilitzant les etiquetes **`<nav>`**, **`<section>`** i **`<aside>`**. A la secció principal, crearàs un formulari senzill.

## Requisits

### Preparació de l'estructura

1. **Copiar contingut de la Pràctica 01**: Agafa tot el contingut de la **Pràctica 01** i còpia'l a la carpeta **Pràctica 02**.
2. **Renombrar arxiu**: Canvia el nom de `resultats.html` a `index.html` dins de la **Pràctica 02**.
3. **Afegir contingut nou a `index.html`**: Treballarem dins d'aquest nou arxiu `index.html` per afegir els elements **`<nav>`**, **`<section>`** i **`<aside>`**, segons els requisits que es detallen a continuació.

### Estructura HTML

El document ha de contenir els següents elements dins del `<body>`:

1. **Nav**: Un menú de navegació amb enllaços a diferents seccions del lloc web.
2. **Section (Form)**: Un formulari senzill que inclogui:
   - Camp de text per al **nom**.
   - Camp de text per al **correu electrònic**.
   - Un menú desplegable amb diverses opcions per triar **motiu de consulta**.
   - Un camp de text gran (**textarea**) per a **missatge**.
   - Un botó per **enviar** el formulari.
3. **Aside**: Una secció lateral amb informació addicional. Per exemple, pots incloure-hi una llista d'articles relacionats, notes d'interès o altres elements complementaris.

### Validació

- El document ha de ser un fitxer HTML5 vàlid i ha de complir els estàndards del [W3C HTML Validator](https://validator.w3.org/).

## Esquema de l'estructura dins del `<body>`

Aquí tens un diagrama ASCII de com hauria de quedar l'estructura general dins del `<body>`:

```
<body>
  +-----------------------------------------------------------+
  |                 header fet a practica01                   |
  +-----------------------------------------------------------+
  
  +-----------------------------------------------------------+
  |                       <section>                            |
  |   +---------------------------------------------------+    |
  |   |                    <form>                         |    |
  |   |  Nom:         [________________________]          |    |
  |   |  Correu:      [________________________]          |    |
  |   |  Motiu:       [------------------------]          |    |
  |   |  Missatge:    [________________________]          |    |
  |   |               [________________________]          |    |
  |   |               [________________________]          |    |
  |   |               [________________________]          |    |
  |   |                                                   |    |
  |   |                     [ Envia ]                     |    |
  |   +---------------------------------------------------+    |
  +-----------------------------------------------------------+
  
  +---------------------------<aside>--------------------------+
  |     Articles relacionats                                 |
  |   - 5 consells per millorar la productivitat                |
  |   - Com gestionar el temps eficientment                     |
  |   - Eines per treballar des de casa                         |
  +-----------------------------------------------------------+
</body>
```

## Exemples per resoldre dubtes

1. **Exemple d’un camp de text per al nom:**

```html
<label for="nom">Nom:</label>
<input type="text" id="nom" name="nom">
```

2. **Exemple d’un menú desplegable per triar el motiu de la consulta:**

```html
<label for="motiu">Motiu:</label>
<select id="motiu" name="motiu">
  <option value="consultar">Consulta</option>
  <option value="feedback">Feedback</option>
  <option value="altres">Altres</option>
</select>
```

3. **Exemple d’un textarea per al missatge:**

```html
<label for="missatge">Missatge:</label>
<textarea id="missatge" name="missatge" rows="4" cols="50"></textarea>
```

4. **Exemple del botó d’enviament:**

```html
<button type="submit">Envia</button>
```

## Explicació de l'etiqueta `<aside>`

L'etiqueta **`<aside>`** s'utilitza per a definir contingut addicional que està relacionat amb el contingut principal, però que no és essencial. Normalment es col·loca en una barra lateral o a un costat del contingut principal, i proporciona informació complementària. Exemples d'ús inclouen:

- **Articles relacionats** en un blog.
- **Notes** o **cites** rellevants al contingut.
- **Informació d'anuncis** o **elements promocionals**.

### Exemple de `<aside>`

```html
<aside>
  <h3>Articles relacionats</h3>
  <ul>
    <li><a href="article1.html">5 consells per millorar la teva productivitat</a></li>
    <li><a href="article2.html">Com gestionar el teu temps de manera eficient</a></li>
    <li><a href="article3.html">Eines digitals per treballar des de casa</a></li>
  </ul>
</aside>
```

En aquest cas, l'**`<aside>`** conté una llista d'**articles relacionats** amb el contingut principal. No és essencial per a la comprensió del contingut principal, però ofereix informació addicional i complementària que pot ser d'interès per a l'usuari.

## Explicació de l'etiqueta `<section>`

L'etiqueta **`<section>`** s'utilitza per a definir una secció o part del document HTML que conté contingut relacionat dins de la pàgina. Cada **`<section>`** generalment té un títol propi i està dedicada a un tema o objectiu específic.

### Característiques de `<section>`

- Es fa servir per organitzar el contingut en blocs temàtics, per exemple, per dividir un article en diverses seccions.
- Es pot utilitzar més d'una vegada dins d'una pàgina per estructurar-la de forma lògica i semàntica.
- Ajuda a millorar l’accessibilitat i el SEO, ja que permet als cercadors i lectors de pantalla identificar fàcilment les parts del contingut.

### Exemple de `<section>` amb un formulari

```html
<section>
  <h2>Contacta amb nosaltres</h2>
  <form>
    <label for="nom">Nom:</label>
    <input type="text" id="nom" name="nom">
    
    <label for="correu">Correu electrònic:</label>
    <input type="email" id="correu" name="correu">
    
    <label for="motiu">Motiu de la consulta:</label>
    <select id="motiu" name="motiu">
      <option value="consultar">Consulta</option>
      <option value="feedback">Feedback</option>
      <option value="altres">Altres</option>
    </select>
    
    <label for="missatge">Missatge:</label>
    <textarea id="missatge" name="missatge" rows="4" cols="50"></textarea>
    
    <button type="submit">Envia</button>
  </form>
</section>
```

En aquest exemple, el **`<section>`** conté un formulari de contacte. Aquesta secció té un títol i agrupa tot el contingut relacionat amb el formulari en un sol bloc temàtic, facilitant la seva identificació i comprensió dins del document.

## Explicació de l'etiqueta `<

form>`

L'etiqueta **`<form>`** defineix un formulari HTML per a la recopilació d'informació de l'usuari. Aquesta informació es pot enviar a un servidor web o processar-se localment amb JavaScript.

### Característiques de `<form>`

- **Atribut `action`**: Defineix on s'enviarà la informació quan es faci clic al botó d’enviament.
- **Atribut `method`**: Especifica el mètode d'enviament de dades (`GET` o `POST`).
- Els formularis poden incloure camps de text, botons de selecció, menús desplegables, botons d'enviament i molts altres elements per facilitar la introducció de dades.

### Exemple bàsic de `<form>`

```html
<form action="submit-form.php" method="post">
  <label for="nom">Nom:</label>
  <input type="text" id="nom" name="nom">

  <label for="correu">Correu electrònic:</label>
  <input type="email" id="correu" name="correu">

  <button type="submit">Envia</button>
</form>
```

Aquest formulari envia les dades a `submit-form.php` mitjançant el mètode `POST` quan l'usuari fa clic a "Envia".

## Validació

Utilitza el validor de HTML5 del W3C per assegurar-te que el codi és correcte: [W3C HTML Validator](https://validator.w3.org/).
