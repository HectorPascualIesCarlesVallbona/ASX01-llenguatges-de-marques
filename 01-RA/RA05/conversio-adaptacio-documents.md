# **5. Conversió i adaptació de documents per a l'intercanvi d'informació**

## Índex
- [5.1 Tecnologies de transformació de documents. Estàndards. Àmbits d'aplicació](#51-tecnologies-de-transformació-de-documents-estàndards-àmbits-daplicació)
- [5.2 Descripció de l'estructura i de la sintaxi](#52-descripció-de-lestructura-i-de-la-sintaxi)
- [5.3 Creació i utilització de plantilles. Eines i depuració](#53-creació-i-utilització-de-plantilles-eines-i-depuració)
- [5.4 Conversió entre diferents formats de documents](#54-conversió-entre-diferents-formats-de-documents)

En un entorn digital cada vegada més interconnectat i heterogeni, la capacitat de transformar documents entre diferents formats és fonamental per garantir l’intercanvi d’informació entre sistemes. Aquesta necessitat es manifesta en múltiples àmbits, com ara el desenvolupament web, la gestió empresarial, les aplicacions mòbils, els sistemes sanitaris o els serveis públics. Sovint, la informació s’ha de compartir entre plataformes que utilitzen estructures, llenguatges i tecnologies diferents. En aquest context, la conversió i adaptació de documents permet mantenir la coherència semàntica de les dades i assegurar-ne la compatibilitat tècnica.

Aquest procés implica tant aspectes tècnics com conceptuals: cal entendre l’estructura i sintaxi dels formats d’origen i destinació, escollir les tecnologies de transformació més adequades, i garantir que el resultat manté la integritat i la funcionalitat esperada. A més, l’ús de plantilles, eines de validació i depuració facilita la creació de conversions reutilitzables, eficients i adaptades a diversos escenaris.

El present apartat desenvolupa en profunditat els diferents components d’aquest procés: les tecnologies implicades, la descripció sintàctica dels formats estructurats, la creació de plantilles i les eines que les suporten, i finalment, la conversió entre formats diversos com XML, JSON, CSV, HTML o PDF. A través d’aquest recorregut, es proporcionen coneixements pràctics i teòrics per poder dur a terme transformacions robustes, segures i compatibles amb els estàndards actuals.

---

### **5.1 Tecnologies de transformació de documents. Estàndards. Àmbits d'aplicació**

La transformació de documents és un component clau en l’àmbit de l’intercanvi d’informació. A mesura que les organitzacions, sistemes i plataformes utilitzen estructures de dades i formats de documents diversos, la necessitat de mecanismes de transformació fiables i basats en estàndards esdevé fonamental. Les tecnologies de transformació de documents permeten adaptar el contingut d’un format a un altre, garantint-ne la compatibilitat, la coherència i la reutilització en entorns heterogenis.

#### Tecnologies de transformació principals

Les tecnologies més destacades es basen en formats com XML i JSON. Aquests formats són àmpliament utilitzats per representar dades estructurades gràcies a la seva extensibilitat, llegibilitat per a humans i compatibilitat amb una gran varietat de sistemes.

- **XSLT (Extensible Stylesheet Language Transformations)**: És un llenguatge declaratiu dissenyat específicament per transformar documents XML. Opera sobre l’estructura jeràrquica d’XML i utilitza XPath per navegar i fer coincidir patrons. Permet convertir XML a altres estructures XML, HTML per a visualització web, text pla i fins i tot PDF si es combina amb XSL-FO (Formatting Objects).

- **XPath**: És un llenguatge de consultes utilitzat per XSLT i XQuery per identificar parts específiques d’un document XML. Les expressions XPath són essencials per aplicar plantilles en transformacions.

- **XQuery**: Similar a XPath però més potent, permet realitzar consultes i transformacions complexes sobre documents XML. S’utilitza sovint en bases de dades XML natives.

- **XSL-FO**: És un llenguatge basat en XML per donar format a documents XML per a sortida en pantalla, impressió o altres suports, especialment útil per generar fitxers PDF.

- **JSONata**: És un llenguatge de consultes i transformacions per a documents JSON. Permet transformar estructures JSON amb una sintaxi funcional i concisa.

- **Eines ETL (Extract, Transform, Load)**: Eines com Talend, Apache NiFi o Pentaho permeten definir processos de transformació de dades que poden incloure XML, JSON, CSV o bases de dades. Són molt utilitzades en entorns empresarials per a processos massius de dades.

#### Estàndards implicats

- **XML i JSON** com a formats d’estructuració i intercanvi de dades.
- **XSLT, XPath, XQuery, JSONata** com a llenguatges de transformació.
- **XSD i JSON Schema** per validar estructures de dades.
- **RDF, OWL** per a representacions semàntiques i ontologies.

#### Àmbits d’aplicació

- **Desenvolupament web**: transformació d’XML a HTML per a publicació de continguts.
- **Integració d’APIs**: conversió entre XML i JSON per facilitar la interoperabilitat entre serveis.
- **Sistemes d’informació empresarial**: adaptació de formats de dades entre ERP, CRM i altres plataformes.
- **Sectors com la salut**: transformació entre formats com HL7 (XML) i FHIR (JSON).
- **Educació i administració pública**: adaptació d’esquemes d’intercanvi de dades entre institucions.

Aquestes tecnologies i estàndards constitueixen la base tècnica que permet realitzar transformacions robustes, sostenibles i adaptades als requisits específics de cada context tecnològic.

---

### **5.2 Descripció de l'estructura i de la sintaxi**

Entendre l’estructura i la sintaxi dels formats de documents és essencial per realitzar transformacions precises i eficients. Quan treballem amb la conversió de documents, especialment entre formats estructurats com XML, JSON i CSV, els desenvolupadors i especialistes en informació han de tenir un coneixement sòlid de com representa cada format les dades, com s’hi organitzen els elements, i com les regles sintàctiques determinen si el contingut és vàlid.

#### XML: Sintaxi estructurada i jeràrquica

XML (Extensible Markup Language) és un format basat en text dissenyat per emmagatzemar i transportar dades. Dona èmfasi a l’estructura i la jerarquia, cosa que el fa ideal per representar conjunts de dades complexos. Els blocs fonamentals d’un document XML inclouen:

- **Elements**: delimitats per etiquetes d’obertura i tancament (per exemple: `<nom>Joan</nom>`), es poden niar per formar estructures jeràrquiques.
- **Atributs**: proporcionen metadades sobre els elements, dins l’etiqueta d’obertura (ex: `<llibre id="123">`).
- **Nodes de text**: contenen les dades dins dels elements.
- **Espais de noms (namespaces)**: s’utilitzen per evitar conflictes de noms en documents amb vocabularis mixtos (per exemple, HTML + SVG).

Exemple bàsic d’un document XML:
```xml
<biblioteca>
  <llibre id="001">
    <titol>Fonaments d’XML</titol>
    <autor>Joana Garcia</autor>
    <any>2020</any>
  </llibre>
</biblioteca>
```

Regles sintàctiques de l’XML:
- Ha de tenir un únic element arrel.
- Les etiquetes han d’estar correctament niades i tancades.
- Sensibilitat a majúscules i minúscules.
- Els valors d’atributs han d’estar entre cometes.

Per validar documents XML, s’utilitzen **esquemes** com DTD (Document Type Definition) i XSD (XML Schema Definition), que defineixen quins elements i atributs són permesos i com han d’estar estructurats.

#### JSON: Lleuger i flexible

JSON (JavaScript Object Notation) és un format d’intercanvi de dades que ha esdevingut estàndard en les APIs web, gràcies a la seva simplicitat i compatibilitat amb JavaScript. A diferència de l’XML, JSON no utilitza etiquetes, sinó parelles clau-valor organitzades en objectes (`{}`) i arrays (`[]`).

Exemple de JSON:
```json
{
  "biblioteca": {
    "llibres": [
      {
        "id": "001",
        "titol": "Fonaments d’XML",
        "autor": "Joana Garcia",
        "any": 2020
      }
    ]
  }
}
```

Característiques de la sintaxi de JSON:
- Les dades es representen com a parelles clau/valor.
- Els objectes s’envolten amb claus `{}`.
- Els arrays són llistes ordenades entre claudàtors `[]`.
- Les cadenes estan entre cometes dobles.
- No s’hi permeten comentaris ni contingut mixt.

Tot i que JSON no disposa de validadors natius, estàndards com **JSON Schema** permeten definir les propietats permeses, tipus de valors i restriccions, de manera similar a l’XSD per a XML.

#### CSV: Plana i tabular

CSV (Comma-Separated Values) és un format de text pla que representa dades en format de taula. Cada línia del fitxer és una fila, i cada valor està separat per comes (o punts i comes, tabuladors, etc.).

Exemple:
```
id,titol,autor,any
001,Fonaments d’XML,Joana Garcia,2020
```

Característiques:
- Sense jerarquia ni estructures internes.
- No permet definir tipus de dades ni metadades.
- Pot generar problemes si els valors contenen cometes, separadors o salts de línia.

A causa de la seva simplicitat, CSV s’utilitza molt per importar/exportar dades entre fulls de càlcul, bases de dades i altres aplicacions.

#### Sintaxi dels llenguatges de transformació

A banda dels formats, és igualment important entendre els llenguatges de transformació:

- **XSLT (per a XML)**: Declaratiu, utilitza XPath per definir plantilles que coincideixen amb nodes XML.

Exemple:
```xml
<xsl:template match="llibre">
  <div>
    <h2><xsl:value-of select="titol"/></h2>
    <p>Autor: <xsl:value-of select="autor"/></p>
  </div>
</xsl:template>
```

Cada bloc `<xsl:template>` defineix com transformar un node. El document XSLT comença amb `<xsl:stylesheet>` i requereix espais de noms (`xmlns:xsl="http://www.w3.org/1999/XSL/Transform"`).

- **JSONata (per a JSON)**: Un llenguatge funcional que permet transformar i consultar documents JSON.

Exemple:
```jsonata
llibres[any > 2015].titol
```

Aquest exemple retorna els títols dels llibres publicats després del 2015. JSONata permet mapeig, filtratge, agregació i lògica condicional.

#### Validació de sintaxi i eines de parsing

Assegurar una sintaxi correcta és clau per a una transformació exitosa. Algunes eines útils són:

- **Per a XML**: `XMLLint`, analitzadors SAX/DOM, `xmllint`.
- **Per a JSON**: `JSONLint`, analitzadors integrats en JavaScript, Python (`json`), Node.js.
- **Per a CSV**: Biblioteques per a Python, JavaScript, Java, etc.

Eines per al desenvolupament i depuració:
- **Oxygen XML Editor**, **Altova XMLSpy** per a XML.
- **CodeBeautify**, **JSON Formatter** per visualitzar i validar JSON en navegador.

#### Errors sintàctics comuns

- **XML**: Etiquetes no tancades, niades incorrectament, atributs duplicats.
- **JSON**: Comes finals, claus no entre cometes, caràcters no escapats.
- **CSV**: Camps amb separadors no escapats, nombre de camps inconsistent.

---

**Conclusió**

Comprendre les característiques estructurals i sintàctiques de formats com XML, JSON i CSV és fonamental per a qualsevol persona que participi en la transformació de dades. Tant si s’utilitzen llenguatges declaratius com XSLT com eines funcionals com JSONata, el coneixement de com s’organitzen i es validen les dades impacta directament en l’èxit de qualsevol conversió. La sintaxi no és només una qüestió tècnica: és la base de sistemes precisos, segurs i interoperables.

---

### **5.3 Creació i utilització de plantilles. Eines i depuració**

Les plantilles són un component fonamental en el procés de transformació de documents estructurats. Una plantilla defineix com s’ha de mapar, mostrar o reformatejar la informació del document d’origen per obtenir un document de destinació amb l’estructura desitjada. Tant si transformem XML a HTML per mostrar-lo al navegador com si convertim dades JSON a un format llegible per una altra API, les plantilles proporcionen una manera reutilitzable, clara i modular d’expressar aquesta conversió.

#### Plantilles en XML amb XSLT

XSLT (Extensible Stylesheet Language Transformations) és el llenguatge més habitual per definir plantilles en documents XML. La seva naturalesa declarativa permet establir patrons de coincidència sobre nodes de l’arbre XML i definir el resultat esperat mitjançant plantilles `<xsl:template>`.

Exemple:
```xml
<xsl:template match="llibre">
  <div class="llibre">
    <h2><xsl:value-of select="titol"/></h2>
    <p><xsl:value-of select="autor"/></p>
  </div>
</xsl:template>
```

Aquest fragment transforma cada element `<llibre>` d’un document XML en una estructura HTML. XSLT també permet:
- **Plantilles amb nom**: reutilitzables i invocables mitjançant `<xsl:call-template>`.
- **Paràmetres**: personalitzables amb `<xsl:param>` i `<xsl:with-param>`.
- **Condicionals i bucles**: amb `<xsl:if>`, `<xsl:choose>`, i `<xsl:for-each>`.

#### Plantilles amb JSON i altres tecnologies

Tot i que JSON no disposa d’un llenguatge de plantilles tan madur com XML, existeixen solucions com:

- **JSONata**: permet definir transformacions concises sobre documents JSON.
```jsonata
Productes[preu > 100].{
  "nom": nom,
  "preu": preu
}
```

- **Jolt**: eina de transformació JSON amb arxius de configuració declaratius.
- **Plantilles amb codi**: en llenguatges com JavaScript (Handlebars, Mustache) o Python (Jinja2), les plantilles s’utilitzen per generar text a partir de dades.

#### Bones pràctiques en el disseny de plantilles

- **Modularitat**: crear plantilles petites i reutilitzables.
- **Claredat**: noms descriptius i estructures simples.
- **Paràmetres i condicions**: per adaptar la sortida a diferents escenaris.
- **Separació de dades i presentació**: especialment important en entorns web.

#### Eines per crear i gestionar plantilles

- **Oxygen XML Editor**: entorn complet per desenvolupar i depurar XSLT.
- **Altova XMLSpy**: edició visual d’XML i XSLT amb suport per depuració.
- **Stylus Studio**: entorn avançat per editar i provar transformacions.
- **Visual Studio Code**: amb extensions per a XSLT i JSONata.

Per a plantilles JSON:
- **Postman** i **Insomnia**: per provar transformacions JSON en APIs.
- **Biblioteques de codi obert**: per integrar en entorns de desenvolupament.

#### Depuració i validació de plantilles

La depuració és essencial per garantir que la transformació sigui correcta. Algunes tècniques:
- **Missatges de traça**: com `<xsl:message>` per entendre el flux.
- **Depuració pas a pas**: amb entorns com Oxygen o Stylus Studio.
- **Validació de sortida**: comprovació del resultat amb esquemes XSD o JSON Schema.

Errors comuns:
- Plantilles que no coincideixen amb els nodes esperats.
- Expressions XPath incorrectes o massa generals.
- Falta de control sobre valors buits o inesperats.

#### Beneficis de l’ús de plantilles

- **Reutilització**: es poden aplicar a múltiples projectes o entorns.
- **Automatització**: un cop definides, s’executen sense intervenció manual.
- **Mantenibilitat**: els canvis es poden centralitzar a les plantilles.
- **Consistència**: es garanteix una sortida homogènia i validada.

---

### **5.4 Conversió entre diferents formats de documents**

La conversió de documents entre diferents formats és una activitat essencial en la gestió i intercanvi d'informació. Permet adaptar la informació emmagatzemada en un format perquè pugui ser entesa, processada o mostrada per sistemes que treballen amb tecnologies diferents. En l'actualitat, aquesta necessitat es fa palesa en escenaris com la publicació de dades obertes, la integració entre aplicacions, la transformació de dades per al seu anàlisi o la conversió de documents per a arxius digitals i sistemes legals.

#### Tipologies de conversió de formats

- **De format estructurat a estructurat**: per exemple, d'XML a JSON o de CSV a XML.
- **De format estructurat a format de presentació**: com de JSON a PDF o d'XML a HTML.
- **Conversió entre formats ofimàtics**: com de DOCX a PDF o de XLSX a CSV.
- **Conversió entre formats de dades tabulars**: de CSV a JSON per integrar dades en una API.

#### Tècniques i eines utilitzades

##### Programació manual

Llenguatges com Python, JavaScript o Java ofereixen biblioteques per llegir i escriure en múltiples formats:

- **Python**:
  - `xml.etree.ElementTree`, `lxml` per a XML.
  - `json` per a JSON.
  - `csv` per a fitxers CSV.
- **Node.js**:
  - Paquets com `xml2js`, `json2csv`.
- **Java**:
  - JAXB per a XML/JSON.
  - Apache POI per a formats d’Office.

##### Llenguatges declaratius

- **XSLT**: per convertir XML a HTML, text pla o PDF.
- **JSONata**: per fer transformacions de documents JSON de forma elegant i funcional.
- **Jolt**: especialment usat en entorns com Apache NiFi per definir transformacions JSON.

##### Eines gràfiques i ETL

- **Talend**, **Pentaho**, **Apache NiFi**: eines ETL per transformar grans volums de dades entre múltiples formats.
- **Altova MapForce**: eina visual per mapar esquemes de dades entre formats com XML, JSON, CSV i base de dades.

##### Utilitats web

- Convertidors en línia com ConvertCSV, JSON Formatter o XML to JSON, útils per conversions ràpides (amb precaucions de seguretat).

#### Reptes en la conversió de documents

- **Pèrdua semàntica**: alguns formats com JSON no tenen suport per atributs XML, cosa que pot provocar pèrdues.
- **Tipificació de dades**: en formats com CSV no hi ha informació de tipus, la qual cosa pot comportar errors.
- **Normalització**: cal garantir formats coherents per a dates, nombres o codificacions de caràcters.
- **Jerarquia vs. pla**: convertir entre estructures jeràrquiques (XML/JSON) i planes (CSV) requereix dissenys acurats.

#### Bones pràctiques

- **Utilitzar esquemes**: com XSD o JSON Schema, per validar el resultat.
- **Validació post-conversió**: assegurar que el document resultant és semànticament vàlid.
- **Proves amb casos límit**: valors nuls, múltiples nivells de jerarquia, caràcters especials.
- **Automatització**: crear scripts o pipelines ETL per conversions recurrents.

#### Casos d’ús reals

- **Administració pública**: conversió de dades XML internes a CSV o JSON per publicació com a dades obertes.
- **e-Commerce**: conversió de dades de productes d’un sistema ERP en JSON per mostrar-los a una web.
- **Educació**: exportació de notes d’un LMS en format CSV per importar-les a sistemes analítics.
- **Salut**: transformació entre formats com HL7 (XML) i FHIR (JSON) per interoperabilitat entre sistemes clínics.

---

**Conclusió**

La conversió entre formats de documents és una tasca fonamental per garantir l’accessibilitat, interoperabilitat i reutilització de la informació. Mitjançant l’ús d’eines i llenguatges adequats, juntament amb bones pràctiques de validació i control de qualitat, és possible assegurar que les dades mantinguin la seva integritat i utilitat en qualsevol entorn tècnic.

---