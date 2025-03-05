# CLIENT SIDE SCRIPTING LANGUAGE

## **📌 Metodologia d'Entrega de Pràctiques i Examen**  

📌 **Criteris de qualificació:**  
- **Nota < 4 a la pràctica** → RA suspesa → Presentació obligatòria de la pràctica al juny.  
- **Nota < 4 a l'examen** → RA suspesa.  
- **Còpia d’un company** → RA suspesa → Caldrà **repetir TOTA la RA al juny**.  

📌 **Criteris de penalització en les pràctiques:**  
- **No seguir l'estructura del projecte o la nomenclatura indicada** → **-2 punts**, encara que sigui un detall mínim.  
- **Entrega fora de termini sense justificació vàlida** → **Nota automàtica de 0**.  
- **Les rutes en els arxius HTML han de ser relatives, no absolutes**. Si aquesta norma no es compleix → **-3 punts**.  

## Llenguatges de guió
- client side scripting language, no llenguatges de guió
- Un client-side scripting language és un llenguatge de programació que s'executa directament al navegador de l'usuari i no al servidor. Aquests llenguatges permeten afegir interactivitat i dinamisme a les pàgines web sense necessitat de recarregar-les completament.
- WebAssembly (WASM) - Llenguatges compilats per al navegador (C++ i Rust)
- Dart - Llenguatge de Google (amb framework Flutter)
- VBScript (en desús) -> antic utilitzat en Internet Explorer
- ActionScript

## Estructura dels nostres documents > seguir-la
```bash
    │── index.html
    │── /img
    │── /css
    |     │── style.css
    │── /js
          │── script.js
```

## Què és?
- html + css + js (comportament)

1. HTML defineix l’estructura d’una pàgina web.
2. CSS s’encarrega de l’aparença i l'estil.
3. JavaScript controla el comportament, permetent afegir funcionalitats com animacions, validació de formularis, càrrega de contingut dinàmic, gestió d’esdeveniments i comunicació amb el servidor.

## Exemples Reals:
1. Formularis dinàmics i validació avançada
    Un cas comú en desenvolupament web és validar formularis de manera eficient i sense recarregar la pàgina. Aquest exemple usa **JavaScript modern (ES6+), validacions en temps real i missatges d’error dinàmics**.

    **Validació avançada d'un formulari de registre**
    ```html
    <form id="registre">
        <label>Email:</label>
        <input type="email" id="email" placeholder="Introdueix el teu email" required>
        <small id="emailError" class="error-msg"></small>
        
        <label>Contrasenya:</label>
        <input type="password" id="password" placeholder="********" required>
        <small id="passwordError" class="error-msg"></small>

        <button type="submit">Registrar-se</button>
    </form>

    <script>
        document.getElementById("registre").addEventListener("submit", function(event) {
            let email = document.getElementById("email").value;
            let password = document.getElementById("password").value;
            let emailError = document.getElementById("emailError");
            let passwordError = document.getElementById("passwordError");

            emailError.textContent = "";
            passwordError.textContent = "";

            let isValid = true;

            if (!email.includes("@")) {
                emailError.textContent = "El correu electrònic no és vàlid.";
                isValid = false;
            }

            if (password.length < 8) {
                passwordError.textContent = "La contrasenya ha de tenir almenys 8 caràcters.";
                isValid = false;
            }

            if (!isValid) {
                event.preventDefault();
            }
        });
    </script>
    <style>
        .error-msg { color: red; font-size: 12px; }
    </style>
    ```

    ✅ **Aplicació real:** Validació instantània en un formulari de registre d'usuari sense recarregar la pàgina.

    ---

2. Càrrega de contingut dinàmic amb AJAX**
    En el món real, moltes pàgines carreguen contingut sense recarregar la pàgina gràcies a AJAX i fetch(), per exemple en aplicacions SPA (Single Page Applications).

    **carregar dades d'una API externa en temps real**
    ```html
    <button id="carregarDades">Carregar Usuaris</button>
    <ul id="llistaUsuaris"></ul>

    <script>
        document.getElementById("carregarDades").addEventListener("click", function() {
            fetch("https://jsonplaceholder.typicode.com/users")
                .then(response => response.json())
                .then(data => {
                    let llista = document.getElementById("llistaUsuaris");
                    llista.innerHTML = ""; // Esborra el contingut anterior
                    data.forEach(usuari => {
                        let element = document.createElement("li");
                        element.textContent = `${usuari.name} - ${usuari.email}`;
                        llista.appendChild(element);
                    });
                })
                .catch(error => console.error("Error carregant dades:", error));
        });
    </script>
    ```

    ✅ **Aplicació real:** Carregar llista d'usuaris des d'una API REST sense recarregar la pàgina.

    ---

3. Autocompletat en cercadors
    Aquest patró és habitual en motors de cerca com Google o formularis que suggereixen opcions basades en el text introduït.

    **Autocompletat en un camp de cerca**
    ```html
    <input type="text" id="buscador" placeholder="Cerca un producte...">
    <ul id="resultats"></ul>

    <script>
        const productes = ["Ordinador", "Monitor", "Teclat", "Ratolí", "Impressora", "Disc Dur"];

        document.getElementById("buscador").addEventListener("input", function() {
            let query = this.value.toLowerCase();
            let resultats = document.getElementById("resultats");
            resultats.innerHTML = "";

            if (query.length > 0) {
                let filtres = productes.filter(p => p.toLowerCase().includes(query));
                filtres.forEach(producte => {
                    let li = document.createElement("li");
                    li.textContent = producte;
                    resultats.appendChild(li);
                });
            }
        });
    </script>
    ```

    ✅ **Aplicació real:** Cercadors predictius en comerços electrònics o motors de cerca.

    ---

4. Mode fosc i personalització d’estil**
    Permet als usuaris canviar entre mode clar i fosc, molt comú en aplicacions modernes.

    ##### **Exemple: Canviar el mode fosc/dia**
    ```html
    <button id="toggleMode">Canviar mode</button>

    <script>
        document.getElementById("toggleMode").addEventListener("click", function() {
            document.body.classList.toggle("dark-mode");
            localStorage.setItem("tema", document.body.classList.contains("dark-mode") ? "dark" : "light");
        });

        // Carregar tema des de localStorage
        if (localStorage.getItem("tema") === "dark") {
            document.body.classList.add("dark-mode");
        }
    </script>

    <style>
        body.dark-mode { background-color: black; color: white; }
    </style>
    ```

    ✅ **Aplicació real:** Personalització de temes en pàgines web i aplicacions.

    ---

5. Comptador de caràcters en temps real**
    Aquesta funcionalitat es troba en moltes aplicacions com Twitter o editors de text.

    **Exemple: Comptador de caràcters en un text àrea**
    ```html
    <textarea id="missatge" maxlength="200"></textarea>
    <p id="comptador">0 / 200</p>

    <script>
        document.getElementById("missatge").addEventListener("input", function() {
            let llargada = this.value.length;
            document.getElementById("comptador").textContent = `${llargada} / 200`;
        });
    </script>
    ```

    ✅ **Aplicació real:** Límit de caràcters en xarxes socials o formularis.                               


## Continuar document teoria...