# Guia d'Estil

## Disposició

Els dissenys es van crear per a les amplades següents:

- Mòbil: 375px (adevanced)
- Escriptori: 1440px (novell i advanced) 

> 💡 Aquestes són només les mides de disseny. Assegureu-vos que el contingut sigui responsive i compleixi amb els requisits WCAG provant tot el rang de mides de pantalla des de 320px fins a pantalles grans.

### Estructura
```
+-----------+--------+--------+------------+
|    logo   |                 | tryButton  | <- Row 1
+-----------+--------+--------+------------+
|                    |                     | <- Row 2
+      textIntro     +         img         +
|                    |                     | <- Row 3
+-----------+--------+--------+------------+
```

#### HTML (exemple)
```html
<div class="gridContainer">
  <div class="logo">Logo</div>
  <div class="tryButton">Try</div>
  <div class="textIntro">Text Intro</div>
  <div class="photo"><img /></div>
</div>
```

#### CSS (exemple)
```css
.gridContainer {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr; /* 4 columnes */
  grid-template-rows: auto auto auto;    /* 3 files */
  grid-template-areas:
    "logo . . tryButton"
    "textIntro textIntro photo photo"
    "textIntro textIntro photo photo";
}

.logo {
  grid-area: logo;
}

.tryButton {
  grid-area: tryButton;
}

.textIntro {
  grid-area: textIntro;
}

.photo {
  grid-area: photo;
}
```

## Colors

### Primaris

- Rosa: #ff51bf

### Neutrals

- **Cian molt pàl·lid**: #eafaff
- **Cian molt fosc**: #00242d
- **Blau grisenc**: #7f8d98 ​

## Tipografia

### Cos del text

- Mida de font: 18px  

### Encapçalaments

- Família: [Poppins](https://fonts.google.com/specimen/Poppins)  
- Gruixos: 600  

### Cos, CTA

- Família: [Open Sans](https://fonts.google.com/specimen/Open+Sans)  
- Gruixos: 400, 700  

## Icones

Per als icones socials, podeu utilitzar una llibreria d'icones de fonts. Algunes suggerències es troben a continuació:

- [Font Awesome](https://fontawesome.com/)  
- [IcoMoon](https://icomoon.io/)  
- [Ionicons](https://ionicons.com/)  

