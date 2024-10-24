# Practica03: Footer

## Introducció

El **footer** en HTML5 és una secció de tancament d'una pàgina web que proporciona informació complementària com ara dades de contacte, enllaços a xarxes socials o altres recursos relacionats amb la pàgina, però que no formen part del contingut principal. Aquesta secció és útil per oferir informació constant i accessible a l'usuari, independentment de la secció que estigui visitant.

El tag `<footer>` s'utilitza en HTML5 per definir aquesta secció específica. L'element `<footer>` té una funció semàntica que indica que el seu contingut és el peu de pàgina, sovint conté elements com informació legal, drets d'autor, enllaços addicionals o informació de contacte.

Exemple:

```html
<footer>
  <p>Contacta amb nosaltres: info@contacta.com</p>
  <p>Segueix-nos a les xarxes socials: Facebook | Twitter | Instagram</p>
</footer>
```

## Pràctica

En aquesta pràctica, hauràs d'afegir un **footer** a la teva pàgina principal (index.html) creada a la pràctica 02. Aquesta part final de la pàgina haurà de complir amb requisits estructurals i d'accessibilitat dins dels estàndards HTML5. Hauràs de modificar el document existent i seguir les bones pràctiques de semàntica HTML.

### Elements a incloure

1. **Petit logo**: Inclou un logo de mida reduïda en el footer (pots reutilitzar el logo ja creat o bé generar-ne un específic per a aquesta secció).

2. **Menú de navegació**: Afegeix un menú amb enllaços a les seccions següents:
   - Inici
   - Presentació
   - Pràctiques
   - CV
   - Contacte

3. **Mapa de la web**: Inclou una secció que mostri l'opció d'un mapa de la web, utilitzant un enllaç senzill a un fitxer fictici o un placeholder com a exemple (per exemple, "sitemap.xml").

4. **Text de copyright**: Inclou un missatge de copyright en la part inferior, que indiqui l'any actual i el nom del teu projecte. Per exemple: `© 2024 Nom del Projecte. Tots els drets reservats.`

### Estructura del codi

El footer s’ha de col·locar dins l'element `<footer>` d’HTML5. Assegura't que sigui clarament separable de la resta de la pàgina i que segui la mateixa línia estètica que el teu header i el contingut.

### Diagrama visual

```
+-----------------------------------------------------------------------------+
| [ Petit Logo ]  Inici | Presentació | Pràctiques | CV | Contacte | Mapa Web |
|-----------------------------------------------------------------------------|
|              © 2024 Nom del Projecte. Tots els drets reservats.             |
+-----------------------------------------------------------------------------+
```

### Instruccions addicionals

- Mantingues el disseny i estructura semàntica de la pàgina, assegurant-te que el footer està ben delimitat respecte al contingut anterior.
- El footer ha de tenir una estructura **clara** i **neta** per facilitar-ne la mantenibilitat i lectura.
- Encara no hem d'incloure CSS en aquesta pràctica, però el codi ha d'estar preparat per integrar estils en futures versions.

### Lliurament

- El codi ha de ser pujat a la carpeta **UF01/practica03** del **seu repositori** personal.
