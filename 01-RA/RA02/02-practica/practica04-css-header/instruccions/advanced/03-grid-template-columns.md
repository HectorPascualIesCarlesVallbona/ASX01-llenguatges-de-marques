### Què és un `fr`?
- **`fr`** (fracció), és una unitat proporcional que representa una part del **espai disponible** en el contenidor del grid, després de restar:
  1. Els espais fixos (ex.: píxels, `px`).
  2. Els espais definits com automàtics (`auto`).

---

### Exemples Pràctics

#### Exemple 1: **Distribució igualitària**
```css
grid-template-columns: 1fr 1fr 1fr;
```
- El contenidor es divideix en 3 columnes iguals.
- Cada columna ocupa **1/3 de l'espai disponible**.

#### Exemple 2: **Distribució proporcional**
```css
grid-template-columns: 2fr 1fr 1fr;
```
- El contenidor es divideix en **4 parts** (2 + 1 + 1).
  - La primera columna ocupa el **50% de l'espai disponible** (2/4).
  - La segona i tercera columnes ocupen cadascuna **25% de l'espai disponible** (1/4).

#### Exemple 3: **Mescla amb unitats fixes**
```css
grid-template-columns: 200px 1fr 2fr;
```
- La primera columna té una amplada fixa de **200 píxels**.
- L'espai restant es divideix en **3 parts** (1 + 2):
  - La segona columna ocupa **1/3 de l'espai restant**.
  - La tercera columna ocupa **2/3 de l'espai restant**.

#### Exemple 4: **Amb `auto`**
```css
grid-template-columns: auto 1fr 2fr;
```
- La primera columna (**`auto`**) s'adapta al contingut (té l'amplada mínima necessària).
- L'espai restant es divideix en **3 parts** (1 + 2):
  - La segona columna ocupa **1/3 de l'espai restant**.
  - La tercera columna ocupa **2/3 de l'espai restant**.

---

### Exemple Visual

Imagina un contenidor de **900 píxels** amb aquesta regla:
```css
grid-template-columns: 2fr 1fr 1fr;
```
- Primer, es divideix l'espai disponible en **4 parts** (2 + 1 + 1 = 4).
- Després:
  - La primera columna ocuparà **2/4 de 900 píxels** = **450 píxels**.
  - La segona i tercera columnes ocuparan **1/4 de 900 píxels cadascuna** = **225 píxels**.

---

### Avantatges d'usar `fr`
1. **Flexibilitat**:
   - S'adapta automàticament si el contenidor canvia de mida (per exemple, en un disseny responsive).
2. **Més fàcil de mantenir**:
   - No cal recalcular píxels o percentatges manualment.
3. **Combinació amb altres unitats**:
   - Es pot mesclar amb píxels, `auto`, percentatges, etc., per més control.

