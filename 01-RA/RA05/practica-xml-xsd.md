# **Practica01 - RA05: XML i XSD: Validació i Conversió**

### **Objectius**
- Detectar i analitzar l’ús d’XML en entorns reals (webs públiques).
- Descarregar un fitxer XML públic i identificar si està associat a un esquema XSD.
- Validar el fitxer XML amb un validador online o d’escriptori.
- Convertir el document XML a JSON o altres formats (CSV, HTML...).
- Reflexionar sobre l’intercanvi d’informació en entorns web mitjançant XML.

---

### **Fases de la pràctica**

#### **Fase 1: Cerca i anàlisi**
1. Cercar una web pública (per exemple, d’un ajuntament, d’un servei de dades obertes o d’un servei meteorològic) que proporcioni **fitxers XML descarregables**.
2. Analitzar l'estructura de l’XML (arbre, etiquetes, etc.).
3. Intentar localitzar si està vinculat a un XSD (sovint al principi de l’XML hi ha una referència amb `xsi:schemaLocation`).

#### **Fase 2: Validació**
1. Descarregar el fitxer XML.
2. Si hi ha un fitxer XSD: fer la validació.
3. Si no n’hi ha, crear-ne un de senzill i validar (aquí es cobriria la creació d’un esquema bàsic).
4. Utilitzar eines com:
   - [https://www.freeformatter.com/xml-validator-xsd.html](https://www.freeformatter.com/xml-validator-xsd.html)
   - o validadors locals amb `xmllint`.

#### **Fase 3: Conversió**
1. Convertir l’XML a JSON (online o amb llibreria de Python com `xmltodict` o JavaScript amb `xml2json`).
2. Opcional: fer una transformació visual amb XSLT o conversió a CSV.

#### **Fase 4: Lliurament i reflexió**
1. Informe final explicant:
   - Quina web s'ha testejat
   - Com és l’XML
   - Resultat de la validació
   - Format i resultat de la conversió
   - Aplicacions possibles d’aquest XML en intercanvi d’informació

---

### **Com detectar documents XML al navegador?**

1. **Si el navegador accedeix a una API que retorna XML**:
   - Pots obrir les *Dev Tools* (F12), anar a la pestanya **Network**, i mirar els requests. Si algun retorna `Content-Type: application/xml` o `text/xml`, ho tens.
   - Exemple clàssic: serveis meteorològics o RSS.

2. **URLs directes a XML**:
   - Exemples: 
     - https://www.w3schools.com/xml/note.xml
     - https://www.aemet.es/xml/municipios/localidad_08019.xml


