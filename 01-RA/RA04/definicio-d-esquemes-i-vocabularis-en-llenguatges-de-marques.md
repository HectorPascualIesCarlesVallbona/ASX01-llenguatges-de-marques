# **RA04 - Definició d'Esquemes i Vocabularis en Llenguatges de Marques**

## **Índex**
1. [Tecnologies per a la Definició de Documents. Estructura i Sintaxi](#41-tecnologies-per-a-la-definicio-de-documents-estructura-i-sintaxi)
   - [DTD (Document Type Definition)](#dtd-document-type-definition)
   - [XSD (XML Schema Definition)](#xsd-xml-schema-definition)
   - [JSON Schema](#json-schema)
2. [Creació de Descripcions de Documents](#42-creacio-de-descripcions-de-documents)
   - [Creació de Descripcions en XML](#creacio-de-descripcions-en-xml)
   - [Creació de Descripcions en JSON](#creacio-de-descripcions-en-json)
3. [Associació de Descripcions amb Documents. Validació](#43-associacio-de-descripcions-amb-documents-validacio)
   - [Validació de Documents XML](#validacio-de-documents-xml)
   - [Validació amb DTD](#validacio-amb-dtd)
   - [Validació amb XSD](#validacio-amb-xsd)
4. [Eines de Creació i Validació](#44-eines-de-creacio-i-validacio)
   - [Eines per a XML](#eines-per-a-xml)
   - [Eines per a JSON](#eines-per-a-json)

---

## **1. Tecnologies per a la Definició de Documents. Estructura i Sintaxi**

La definició d'esquemes i vocabularis en llenguatges de marques és essencial per garantir la coherència, interoperabilitat i validació de dades en diferents sistemes. Les principals tecnologies utilitzades per a aquest propòsit són:

- **DTD (Document Type Definition)**
- **XSD (XML Schema Definition)**
- **JSON Schema**

A continuació, analitzarem cadascuna d'aquestes tecnologies en profunditat, amb exemples detallats i explicacions línia per línia.

### **1.1 DTD (Document Type Definition)**

El **DTD** és una de les primeres formes de definir l'estructura d'un document XML. Especifica els elements, atributs i la jerarquia que un document ha de seguir per ser considerat vàlid. Tot i que actualment ha estat en gran mesura substituït per l'XSD, encara és important comprendre el seu funcionament.

**Exemple de DTD:**

```xml
<!ELEMENT biblioteca (llibre+)>
<!ELEMENT llibre (títol, autor, any)>
<!ELEMENT títol (#PCDATA)>
<!ELEMENT autor (#PCDATA)>
<!ELEMENT any (#PCDATA)>
```

**Explicació línia per línia:**

1. `<!ELEMENT biblioteca (llibre+)>`: Defineix l'element `biblioteca` que ha de contenir un o més elements `llibre`. El signe `+` indica que pot haver-hi un o més elements `llibre`.
2. `<!ELEMENT llibre (títol, autor, any)>`: Defineix l'element `llibre` que ha de contenir exactament un `títol`, un `autor` i un `any`, en aquest ordre.
3. `<!ELEMENT títol (#PCDATA)>`: Defineix l'element `títol` que conté dades de text. `#PCDATA` significa "Parsed Character Data", és a dir, dades de text que poden ser analitzades pel parser XML.
4. `<!ELEMENT autor (#PCDATA)>`: Similar a l'anterior, defineix l'element `autor` com a text.
5. `<!ELEMENT any (#PCDATA)>`: Defineix l'element `any` com a text. Tot i que seria més adequat definir-lo com a nombre, el DTD no permet especificar tipus de dades més enllà de `#PCDATA`.

**Limitacions del DTD:**

- **Tipus de dades limitats:** Només permet definir elements com a text sense especificar tipus més precisos com nombres o dates.
- **Falta de suport per a espais de noms:** Això dificulta la combinació de vocabularis de diferents fonts.
- **Sintaxi diferent de XML:** La sintaxi del DTD no és XML, cosa que pot dificultar la seva comprensió i processament amb eines XML.

### **1.2 XSD (XML Schema Definition)**

L'**XSD** és una alternativa més potent i flexible al DTD per definir l'estructura d'un document XML. Permet especificar tipus de dades, estructures complexes i restriccions, oferint una major precisió en la validació de documents.

**Exemple d'XSD:**

```xml
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
  <xs:element name="biblioteca">
    <xs:complexType>
      <xs:sequence>
        <xs:element name="llibre" maxOccurs="unbounded">
          <xs:complexType>
            <xs:sequence>
              <xs:element name="títol" type="xs:string"/>
              <xs:element name="autor" type="xs:string"/>
              <xs:element name="any" type="xs:gYear"/>
            </xs:sequence>
          </xs:complexType>
        </xs:element>
      </xs:sequence>
    </xs:complexType>
  </xs:element>
</xs:schema>
```

**Explicació línia per línia:**

1. `<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">`: Inicia la definició de l'esquema i declara l'espai de noms XML Schema.
2. `<xs:element name="biblioteca">`: Defineix l'element `biblioteca` com a element principal del document.
3. `<xs:complexType>`: Indica que `biblioteca` és un tipus complex que pot contenir altres elements.
4. `<xs:sequence>`: Especifica que els elements fills han d'aparèixer en un ordre determinat.
5. `<xs:element name="llibre" maxOccurs="unbounded">`: Defineix l'element `llibre`, que pot aparèixer un nombre il·limitat de vegades dins de `biblioteca`.
6. `<xs:complexType>`: Indica que `llibre` és un tipus complex.
7. `<xs:sequence>`: Especifica l'ordre dels elements dins de `llibre`.
8. `<xs:element name="títol" type="xs:string"/>`: Defineix l'element `títol` com una cadena de caràcters.
9. `<xs:element name="autor" type="xs:string"/>`: Defineix l'element `autor` com una cadena de caràcters.
10. `<xs:element name="any" type="xs:gYear"/>`: Defineix l'element `any` com un any en format AAAA.
11. Tancament de totes les etiquetes obertes en ordre invers.

**Avantatges de l'XSD sobre el DTD:**

- **Tipus de dades rics:** Permet especificar tipus de dades com enters, dates, booleans, etc.
- **Suport per a espais de noms:** Facilita la combinació de vocabularis de diferents fonts sense conflictes.
- **Extensibilitat i reutilització:** Permet definir tipus complexos que es poden reutilitzar en diferents parts de l'esquema.
- **Sintaxi basada en XML:** La sintaxi de l'XSD és XML, cosa que facilita la seva comprensió i processament amb eines XML.

### **1.3 JSON Schema**

El **JSON Schema** és una especificació per validar la sintaxi i l'estructura de documents JSON. Permet definir els tipus de dades, les estructures i les restriccions que han de complir els documents JSON, assegurant la coherència i la validació de les dades.

**Exemple de JSON Schema:**

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "biblioteca": {
      "type": "array",
      "items": {
        "type": "object",
 ```

---

## **2. Creació de Descripcions de Documents**

La creació de descripcions de documents implica definir l'estructura, el contingut i les regles que han de seguir els documents en formats com XML i JSON. Aquesta pràctica assegura que les dades siguin coherents, fàcils de validar i interoperables entre diferents sistemes i aplicacions.

### **2.1 Creació de Descripcions en XML**

L'XML (Extensible Markup Language) és un llenguatge de marques que permet definir documents amb una estructura jeràrquica. Per descriure l'estructura d'un document XML, s'utilitzen tecnologies com DTD (Document Type Definition) i XSD (XML Schema Definition).

#### **2.1.1. Definició d'un Document XML**

**Exemple de document XML:**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<biblioteca>
    <llibre>
        <títol>1984</títol>
        <autor>George Orwell</autor>
        <any>1949</any>
    </llibre>
    <llibre>
        <títol>Brave New World</títol>
        <autor>Aldous Huxley</autor>
        <any>1932</any>
    </llibre>
</biblioteca>
```

**Explicació línia per línia:**

1. `<?xml version="1.0" encoding="UTF-8"?>`: Declaració XML que especifica la versió i el conjunt de caràcters utilitzat.
2. `<biblioteca>`: Element arrel que conté tots els llibres.
3. `<llibre>`: Element que representa un llibre dins de la biblioteca.
4. `<títol>1984</títol>`: Element que especifica el títol del llibre.
5. `<autor>George Orwell</autor>`: Element que indica l'autor del llibre.
6. `<any>1949</any>`: Element que mostra l'any de publicació del llibre.
7. `</llibre>`: Tanca l'element `llibre`.
8. (Les línies 3 a 7 es repeteixen per a cada llibre addicional.)
9. `</biblioteca>`: Tanca l'element arrel `biblioteca`.

#### **2.1.2 Definició d'un Esquema XSD per al Document XML**

Per validar l'estructura del document XML anterior, es pot crear un esquema XSD que defineixi les regles i restriccions.

**Exemple d'esquema XSD:**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
    <xs:element name="biblioteca">
        <xs:complexType>
            <xs:sequence>
                <xs:element name="llibre" maxOccurs="unbounded">
                    <xs:complexType>
                        <xs:sequence>
                            <xs:element name="títol" type="xs:string"/>
                            <xs:element name="autor" type="xs:string"/>
                            <xs:element name="any" type="xs:gYear"/>
                        </xs:sequence>
                    </xs:complexType>
                </xs:element>
            </xs:sequence>
        </xs:complexType>
    </xs:element>
</xs:schema>
```

**Explicació línia per línia:**

1. `<?xml version="1.0" encoding="UTF-8"?>`: Declaració XML de l'esquema.
2. `<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">`: Inicia la definició de l'esquema i declara l'espai de noms per als elements de l'esquema XML.
3. `<xs:element name="biblioteca">`: Defineix l'element arrel `biblioteca`.
4. `<xs:complexType>`: Indica que `biblioteca` és un tipus complex que pot contenir altres elements.
5. `<xs:sequence>`: Especifica que els elements fills han d'aparèixer en un ordre seqüencial.
6. `<xs:element name="llibre" maxOccurs="unbounded">`: Defineix l'element `llibre`, que pot aparèixer un nombre il·limitat de vegades dins de `biblioteca`.
7. `<xs:complexType>`: Indica que `llibre` és un tipus complex.
8. `<xs:sequence>`: Especifica l'ordre dels elements dins de `llibre`.
9. `<xs:element name="títol" type="xs:string"/>`: Defineix l'element `títol` com una cadena de caràcters.
10. `<xs:element name="autor" type="xs:string"/>`: Defineix l'element `autor` com una cadena de caràcters.
11. `<xs:element name="any" type="xs:gYear"/>`: Defineix l'element `any` com un any en format AAAA.
12. Tancament de totes les etiquetes obertes en ordre invers.

### **2.2 Creació de Descripcions en JSON**

El JSON (JavaScript Object Notation) és un format lleuger per a l'intercanvi de dades que és fàcil de llegir i escriure per a humans i màquines. Per descriure l'estructura d'un document JSON i validar-lo, s'utilitza el JSON Schema.

#### **2.2.1. Definició d'un Document JSON**

**Exemple de document JSON:**

```json
{
    "biblioteca": [
        {
            "títol": "1984",
            "autor": "George Orwell",
            "any": 1949
        },
        {
            "títol": "Brave New World",
            "autor": "Aldous Huxley",
            "any": 1932
        }
    ]
}
```

**Explicació línia per línia:**

1. `{`: Inicia l'objecte JSON principal.
2. `"biblioteca": [`: Defineix una propietat `biblioteca` que és una llista (array) d'objectes.
3. `{`: Inicia el primer objecte de la llista.
4. `"títol": "1984",`: Defineix la propietat `títol` amb el valor "1984".
5. `"autor": "George Orwell",`: Defineix la propietat `autor` amb el valor "George Orwell".
6. `"any": 1949`: Defineix la propietat `any` amb el valor 1949.
7. `}`: Tanca el primer objecte de la llista.
8. (Les línies 3 a 7 es repeteixen per a cada llibre addicional.)
9. `]`: Tanca 

---

## **3 Associació de Descripcions amb Documents. Validació**

La validació de documents és un procés essencial que assegura que el contingut d'un document compleix amb les regles i estructures definides en el seu esquema o descripció corresponent. Aquest procés és fonamental per garantir la integritat, coherència i interoperabilitat de les dades en diferents sistemes i aplicacions.

### **3.1 Validació de Documents XML**

Els documents XML es poden validar mitjançant DTD (Document Type Definition) o XSD (XML Schema Definition). La validació assegura que el document XML compleix amb l'estructura i les regles definides en el seu esquema associat.

#### **3.1.1. Validació amb DTD**

Per validar un document XML amb un DTD, cal associar el DTD al document XML. Això es pot fer de dues maneres: incloent el DTD dins del mateix document XML (DTD intern) o referenciant un DTD extern.

**Exemple de DTD intern:**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE biblioteca [
    <!ELEMENT biblioteca (llibre+)>
    <!ELEMENT llibre (títol, autor, any)>
    <!ELEMENT títol (#PCDATA)>
    <!ELEMENT autor (#PCDATA)>
    <!ELEMENT any (#PCDATA)>
]>
<biblioteca>
    <llibre>
        <títol>1984</títol>
        <autor>George Orwell</autor>
        <any>1949</any>
    </llibre>
</biblioteca>
```

**Explicació línia per línia:**

1. `<?xml version="1.0" encoding="UTF-8"?>`: Declaració XML que especifica la versió i el conjunt de caràcters utilitzat.
2. `<!DOCTYPE biblioteca [`: Inicia la definició del tipus de document per a l'element arrel `biblioteca`.
3. `<!ELEMENT biblioteca (llibre+)>`: Defineix que l'element `biblioteca` ha de contenir un o més elements `llibre`.
4. `<!ELEMENT llibre (títol, autor, any)>`: Especifica que l'element `llibre` ha de contenir els elements `títol`, `autor` i `any` en aquest ordre.
5. `<!ELEMENT títol (#PCDATA)>`: Defineix que l'element `títol` conté dades de text.
6. `<!ELEMENT autor (#PCDATA)>`: Defineix que l'element `autor` conté dades de text.
7. `<!ELEMENT any (#PCDATA)>`: Defineix que l'element `any` conté dades de text.
8. `]>`: Tanca la definició del tipus de document.
9. `<biblioteca>`: Inicia l'element arrel del document XML.
10. `<llibre>`: Inicia un element `llibre`.
11. `<títol>1984</títol>`: Especifica el títol del llibre.
12. `<autor>George Orwell</autor>`: Especifica l'autor del llibre.
13. `<any>1949</any>`: Especifica l'any de publicació del llibre.
14. `</llibre>`: Tanca l'element `llibre`.
15. `</biblioteca>`: Tanca l'element arrel `biblioteca`.

En aquest exemple, el DTD està inclòs dins del mateix document XML, i defineix l'estructura que el document ha de seguir. Durant la validació, es comprova que el document compleixi aquestes regles.

**Exemple de DTD extern:**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE biblioteca SYSTEM "biblioteca.dtd">
<biblioteca>
    <llibre>
        <títol>1984</títol>
        <autor>George Orwell</autor>
        <any>1949</any>
    </llibre>
</biblioteca>
```

**Explicació línia per línia:**

1. `<?xml version="1.0" encoding="UTF-8"?>`: Declaració XML que especifica la versió i el conjunt de caràcters utilitzat.
2. `<!DOCTYPE biblioteca SYSTEM "biblioteca.dtd">`: Referencia a un DTD extern anomenat `biblioteca.dtd` que defineix l'estructura del document.
3. `<biblioteca>`: Inicia l'element arrel del document XML.
4. `<llibre>`: Inicia un element `llibre`.
5. `<títol>1984</títol>`: Especifica el títol del llibre.
6. `<autor>George Orwell</autor>`: Especifica l'autor del llibre.
7. `<any>1949</any>`: Especifica l'any de publicació del llibre.
8. `</llibre>`: Tanca l'element `llibre`.
9. `</biblioteca>`: Tanca l'element arrel `biblioteca`.

En aquest cas, el DTD es troba en un fitxer separat (`biblioteca.dtd`), i el document XML el referencia per validar la seva estructura.

---

### **3.1.2. Validació amb XSD**

L'XML Schema Definition (XSD) és una recomanació del World Wide Web Consortium (W3C) que especifica com descriure formalment els elements d'un document XML. A diferència de les DTD, els esquemes XSD estan escrits en sintaxi XML i proporcionen una manera més robusta i flexible de definir l'estructura d'un document XML. A més, permeten especificar tipus de dades, restriccions i relacions entre elements, oferint una validació més precisa del contingut del document.

**Exemple de document XML amb associació a un XSD:**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<biblioteca xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:noNamespaceSchemaLocation="biblioteca.xsd">
    <llibre>
        <titol>1984</titol>
        <autor>George Orwell</autor>
        <any>1949</any>
    </llibre>
</biblioteca>
```

**Explicació línia per línia:**

1. `<?xml version="1.0" encoding="UTF-8"?>`: Declara la versió de l'XML i el conjunt de caràcters utilitzat.
2. `<biblioteca xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="biblioteca.xsd">`: Inicia l'element arrel `biblioteca`, declara l'espai de noms per als atributs d'esquema XML (`xmlns:xsi`) i especifica la ubicació de l'esquema XSD (`xsi:noNamespaceSchemaLocation="biblioteca.xsd"`) que defineix l'estructura del document.
3. `    <llibre>`: Inicia un element `llibre`, que representa un llibre dins de la biblioteca.
4. `        <titol>1984</titol>`: Especifica el títol del llibre com "1984".
5. `        <autor>George Orwell</autor>`: Especifica l'autor del llibre com "George Orwell".
6. `        <any>1949</any>`: Especifica l'any de publicació del llibre com 1949.
7. `    </llibre>`: Tanca l'element `llibre`.
8. `</biblioteca>`: Tanca l'element arrel `biblioteca`.

**Exemple d'esquema XSD (`biblioteca.xsd`):**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
    <xs:element name="biblioteca">
        <xs:complexType>
            <xs:sequence>
                <xs:element name="llibre" maxOccurs="unbounded">
                    <xs:complexType>
                        <xs:sequence>
                            <xs:element name="titol" type="xs:string"/>
                            <xs:element name="autor" type="xs:string"/>
                            <xs:element name="any" type="xs:positiveInteger"/>
                        </xs:sequence>
                    </xs:complexType>
                </xs:element>
            </xs:sequence>
        </xs:complexType>
    </xs:element>
</xs:schema>
```

**Explicació línia per línia:**

1. `<?xml version="1.0" encoding="UTF-8"?>`: Declara la versió de l'XML i el conjunt de caràcters utilitzat.
2. `<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">`: Inicia l'element arrel de l'esquema XSD i declara l'espai de noms estàndard per als elements de l'esquema.
3. `    <xs:element name="biblioteca">`: Defineix un element anomenat `biblioteca` com a element arrel del document XML.
4. `        <xs:complexType>`: Especifica que l'element `biblioteca` és de tipus complex, és a dir, pot contenir altres elements.
5. `            <xs:sequence>`: Indica que els elements fills de `biblioteca` han d'aparèixer en una seqüència específica.
6. `                <xs:element name="llibre" maxOccurs="unbounded">`: Defineix un element `llibre` que pot aparèixer un nombre il·limitat de vegades dins de `biblioteca`.
7. `                    <xs:complexType>`: Especifica que l'element `llibre` és de tipus complex.
8. `                        <xs:sequence>`: Indica que els elements fills de `llibre` han d'aparèixer en una seqüència específica.
9. `                            <xs:element name="titol" type="xs:string"/>`: Defineix l'element `titol` com a cadena de text.
10. `                            <xs:element name="autor" type="xs:string"/>`: Defineix l'element `autor` com a cadena de text.
11. `                            <xs:element name="any" type="xs:positiveInteger"/>`: Defineix l'element `any` com un enter positiu.
12. `                        </xs:sequence>`: Tanca la seqüència dels elements fills de `llibre`.
13. `                    </xs:complexType>`: Tanca la definició del tipus complex per a `llibre`.
14. `                </xs:element>`: Tanca la definició de l'element `llibre`.
15. `            </xs:sequence>`: Tanca la seqüència dels 

---

## **4 Eines de Creació i Validació**

La creació i validació de documents XML i JSON són processos essencials per assegurar la integritat, coherència i interoperabilitat de les dades. Existeixen diverses eines que faciliten aquestes tasques, oferint funcionalitats que van des de l'edició fins a la validació automàtica dels documents.

### **4.1 Eines per a XML**

#### **4.1.1. Oxygen XML Editor**

**Descripció:**

Oxygen XML Editor és una eina professional per a l'edició i validació de documents XML. Ofereix suport per a una àmplia gamma d'estàndards XML, incloent-hi XSD, DTD, XSLT i XPath. La seva interfície intuïtiva i les seves funcionalitats avançades la converteixen en una de les eines més utilitzades per desenvolupadors i editors tècnics.

**Característiques principals:**

- **Edició visual i en codi:** Permet editar documents XML tant en mode de codi com en mode visual, facilitant la tasca a usuaris amb diferents nivells d'experiència.
- **Validació en temps real:** Proporciona validació automàtica dels documents XML contra els seus esquemes associats (XSD o DTD) mentre s'edita, destacant errors i advertències.
- **Transformacions XSLT:** Inclou un motor per a la transformació de documents XML mitjançant fulls d'estil XSLT, permetent la generació de diferents formats de sortida.
- **Suport per a XPath i XQuery:** Ofereix eines per a l'execució de consultes XPath i XQuery, facilitant la navegació i extracció d'informació dels documents XML.

**Exemple pràctic:**

Suposem que tenim un document XML que representa una biblioteca de llibres i volem validar-lo contra un esquema XSD utilitzant Oxygen XML Editor.

**Document XML (`biblioteca.xml`):**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<biblioteca>
    <llibre>
        <títol>1984</títol>
        <autor>George Orwell</autor>
        <any>1949</any>
    </llibre>
    <llibre>
        <títol>Brave New World</títol>
        <autor>Aldous Huxley</autor>
        <any>1932</any>
    </llibre>
</biblioteca>
```

**Esquema XSD (`biblioteca.xsd`):**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
    <xs:element name="biblioteca">
        <xs:complexType>
            <xs:sequence>
                <xs:element name="llibre" maxOccurs="unbounded">
                    <xs:complexType>
                        <xs:sequence>
                            <xs:element name="títol" type="xs:string"/>
                            <xs:element name="autor" type="xs:string"/>
                            <xs:element name="any" type="xs:gYear"/>
                        </xs:sequence>
                    </xs:complexType>
                </xs:element>
            </xs:sequence>
        </xs:complexType>
    </xs:element>
</xs:schema>
```

**Procés de validació amb Oxygen XML Editor:**

1. **Obrir el document XML:** Inicieu Oxygen XML Editor i obriu el fitxer `biblioteca.xml`.
2. **Associar l'esquema XSD:** A la secció de propietats del document, especifiqueu la ubicació de l'esquema XSD (`biblioteca.xsd`) perquè l'editor pugui utilitzar-lo per a la validació.
3. **Validar el document:** Feu clic al botó de validació o utilitzeu la drecera de teclat corresponent. L'editor comprovarà el document XML contra l'esquema XSD i mostrarà qualsevol error o advertència en cas que n'hi hagi.

#### **4.1.2. Altova XMLSpy**

**Descripció:**

Altova XMLSpy és una altra eina líder en el mercat per a l'edició i validació de documents XML. Ofereix una àmplia gamma de funcionalitats que cobreixen des de l'edició fins a la generació d'esquemes i la transformació de dades.

**Característiques principals:**

- **Editor de codi i gràfic:** Permet editar documents XML tant en mode de codi com en una vista gràfica que representa l'estructura del document.
- **Generació d'esquemes:** Pot generar esquemes XSD a partir de documents XML existents, facilitant la creació d'esquemes per a dades ja estructurades.
- **Integració amb bases de dades:** Ofereix connectors per a diverses bases de dades, permetent la importació i exportació de dades en format XML.
- **Depurador XSLT:** Inclou eines per a la depuració de fulls d'estil XSLT, facilitant la identificació i correcció d'errors en les transformacions.

**Exemple pràctic:**

Suposem que tenim un document XML sense un esquema associat i volem generar-ne un utilitzant Altova XMLSpy.

**Document XML (`biblioteca.xml`):**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<biblioteca>
    <llibre>
        <títol>1984</títol>
        <autor>George Orwell</autor>
        <any>1949</any>
    </llibre>
    <llibre>
        <títol>Brave New World</títol>
        <autor>Aldous Huxley</autor>
        <any>1932</any>
    </llibre>
</biblioteca>
```

**Procés de generació d'esquema amb Altova XMLSpy:**

1. **Obrir el document XML:** Inicieu Altova XMLSpy i obriu el fitxer `biblioteca.xml`.
2. **Generar l'esquema:** Seleccioneu l'opció per generar un esquema a partir del document XML. L'eina analitzarà l'estructura del document i crearà un esquema XSD corresponent.
3. **Guardar l'esquema:** Deseu l'esquema generat com a `biblioteca.xsd` per utilitzar-lo en futures validacions.

### **4.2 Eines per a JSON**

#### **4.2.1. JSONLint**

**Descripció:**

JSONLint és una eina en línia que permet validar i formatar documents JSON. És especialment útil per detectar 

Entesos, continuaré amb la descripció detallada de les eines per a la creació i validació de documents XML i JSON, proporcionant exemples pràctics i explicacions línia per línia.

---

#### **4.2.2. JSON Formatter**

**Descripció:**

JSON Formatter és una eina en línia que permet formatar, validar i convertir dades JSON. Ofereix una interfície senzilla per treballar amb dades JSON, facilitant la lectura i la detecció d'errors.

**Característiques principals:**

- **Formatació i validació:** Permet donar format a cadenes JSON desordenades i validar-les per assegurar que compleixen amb l'especificació JSON estàndard.
- **Conversió entre formats:** Ofereix la possibilitat de convertir dades XML a JSON i viceversa, facilitant la interoperabilitat entre sistemes que utilitzen diferents formats de dades.
- **Compartició i emmagatzematge:** Proporciona opcions per guardar, compartir i imprimir dades JSON, útils per a la documentació i la col·laboració.

**Exemple pràctic:**

Suposem que tenim una cadena JSON desordenada i volem formatar-la i validar-la utilitzant JSON Formatter.

**Cadena JSON desordenada:**

```json
{"nom":"Anna","edat":30,"ciutat":"Barcelona","interessos":["lectura","viatges","música"]}
```

**Procés de formatació i validació amb JSON Formatter:**

1. **Accedir a JSON Formatter:** Obriu el navegador i aneu a [JSON Formatter](https://jsonformatter.org/).
2. **Introduir la cadena JSON:** Enganxeu la cadena JSON desordenada al camp de text proporcionat.
3. **Formatar i validar:** Feu clic al botó "Format" per donar format a la cadena JSON i validar-la automàticament. Si hi ha errors de sintaxi, l'eina els destacarà perquè pugueu corregir-los.

**Resultat formatat:**

```json
{
  "nom": "Anna",
  "edat": 30,
  "ciutat": "Barcelona",
  "interessos": [
    "lectura",
    "viatges",
    "música"
  ]
}
```

**Explicació línia per línia:**

1. `{`: Inicia l'objecte JSON.
2. `"nom": "Anna",`: Clau "nom" amb el valor "Anna".
3. `"edat": 30,`: Clau "edat" amb el valor numèric 30.
4. `"ciutat": "Barcelona",`: Clau "ciutat" amb el valor "Barcelona".
5. `"interessos": [`: Clau "interessos" amb un array de valors.
6. `"lectura",`: Primer element de l'array.
7. `"viatges",`: Segon element de l'array.
8. `"música"`: Tercer element de l'array.
9. `]`: Tanca l'array.
10. `}`: Tanca l'objecte JSON.

---

### **4.3. XML to JSON Converter de Teleport**

**Descripció:**

L'XML to JSON Converter de Teleport és una eina en línia que facilita la conversió de dades XML a format JSON. Aquesta conversió és útil quan es treballa amb sistemes que requereixen diferents formats de dades per a la interoperabilitat.

**Característiques principals:**

- **Conversió senzilla:** Permet convertir dades XML a JSON de manera ràpida i eficient.
- **Manteniment de l'estructura:** Assegura que l'estructura de les dades es mantingui durant la conversió, preservant la integritat de la informació.
- **Opcions de personalització:** Ofereix configuracions per ajustar la sortida JSON segons les necessitats específiques de l'usuari.

**Exemple pràctic:**

Suposem que tenim un document XML que representa una biblioteca de llibres i volem convertir-lo a JSON utilitzant l'XML to JSON Converter de Teleport.

**Document XML (`biblioteca.xml`):**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<biblioteca>
    <llibre>
        <títol>1984</títol>
        <autor>George Orwell</autor>
        <any>1949</any>
    </llibre>
    <llibre>
        <títol>Brave New World</títol>
        <autor>Aldous Huxley</autor>
        <any>1932</any>
    </llibre>
</biblioteca>
```

**Procés de conversió amb XML to JSON Converter de Teleport:**

1. **Accedir a l'eina:** Obriu el navegador i aneu a [XML to JSON Converter de Teleport](https://goteleport.com/resources/tools/json-to-xml-converter/).
2. **Introduir el document XML:** Enganxeu el contingut del document XML al camp de text proporcionat.
3. **Convertir a JSON:** Feu clic al botó "Convert" per iniciar la conversió. L'eina generarà el corresponent JSON basat en l'estructura de l'XML.

**Resultat JSON:**

```json
{
  "biblioteca": {
    "llibre": [
      {
        "títol": "1984",
        "autor": "George Orwell",
        "any": 1949
      },
      {
        "títol": "Brave New World",
        "autor": "Aldous Huxley",
        "any": 1932
      }
    ]
  }
}
```

**Explicació línia per línia:**

1. `{`: Inicia l'objecte JSON.
2. `"biblioteca": {`: Clau "biblioteca" que conté un objecte.
3. `"llibre": [`: Clau "llibre" que conté una matriu d'objectes.
4. `{`: Inicia el primer objecte de la matriu.
5. `"títol": "1984",`: Clau "títol" amb el valor "1984".
6. `"autor": "George Orwell",`: Clau "autor" amb el valor "George Orwell".
7. `"any": 1949`: Clau "any" amb el valor numèric 1949.
8. `},`: Tanca el primer objecte de la matriu.
9. `{`: Inicia el segon objecte de la matriu.
10. `"títol": "Brave New World",`: Clau "títol" amb el valor "Brave New World".
11. `"autor": "Aldous Huxley",`: Clau "autor" amb el valor "Aldous Huxley".
12. `"any": 1932`: Clau "any" amb el valor numèric 1932.
13. `}`: Tanca el segon objecte de la matriu.
14. `]`: Tanca la matriu d'objectes.
15. `}`: Tanca l'objecte "biblioteca".
16. `}`: Tanca l'objecte JSON principal.

---

### **4.4. DBeaver**

**Descripció:**

DBeaver és una aplicació de programari lliure i de codi obert que serveix com a client SQL i eina d'administració de bases de dades. Utilitza la interfície JDBC per interactuar amb bases de dades relacionals i controladors propietaris per a bases de dades NoSQL. Ofereix un editor amb autocompletat de codi i ressaltat de sintaxi, així com una arquitectura de connectors que permet als usuaris modificar gran part del comportament de l'aplicació per proporcionar funcionalitats específiques de la base de dades. citeturn0search8

**Característiques principals:**

- **Edició directa:** Permet editar dades XML i JSON directament des de l'editor de dades, oferint una experiència fluida per a l'usuari.
- **Formatació automàtica:** Inclou opcions de formatació per millorar la llegibilitat de les dades, ajustant la indentació i l'espaiat segons sigui necessari.
- **Visualització estructurada:** Ofereix una vista estructurada de les dades XML i JSON, facilitant la comprensió de l'estructura i el contingut de les dades.

**Exemple pràctic:**

Suposem que tenim una base de dades que emmagatzema informació en format JSON i volem editar una entrada utilitzant DBeaver.

**Procés d'edició amb DBeaver:**

1. **Obrir DBeaver:** Inicieu l'aplicació DBeaver i connecteu-vos a la vostra base de dades.
2. **Navegar fins a la taula:** A la vista de navegació, expandeix la connexió de la base de dades i selecciona la taula que conté les dades JSON que vols editar.
3. **Obrir l'editor de dades:** Fes doble clic sobre la taula per obrir l'editor de dades i visualitzar les entrades de la taula en format de graella.
4. **Seleccionar la cel·la JSON:** Localitza la cel·la que conté les dades JSON que vols editar i fes-hi doble clic per entrar en mode d'edició en línia.
5. **Obrir l'editor complet:** Per a una edició més còmoda, prem `Shift+Enter` per obrir l'editor complet en una nova pestanya.
6. **Editar les dades JSON:** Realitza les modificacions necessàries a les dades JSON. Pots utilitzar la funció de formatació automàtica (`Ctrl+Shift+F`) per ajustar l'espaiat i la indentació, millorant la llegibilitat.
7. **Guardar els canvis:** Desa els canvis realitzats i tanca l'editor complet. Els canvis es reflectiran a la taula original.

**Nota:** DBeaver suporta la manipulació de dades XML i JSON mitjançant les interfícies JDBC estàndard. Aquesta funcionalitat requereix un controlador JDBC4 compatible amb la vostra base de dades. citeturn0search0

