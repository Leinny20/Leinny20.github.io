const alphabet = "abcdefghijklmnopqrstuvwxyz";

function cifrar(palabra, clave) {
    palabra = palabra.toLowerCase();
    let resultado = '';

    for (let i = 0; i < palabra.length; i++) {
        const letra = palabra[i];
        if (alphabet.includes(letra)) {
            const indiceOriginal = alphabet.indexOf(letra);
            const indiceCifrado = (indiceOriginal + clave) % 26;
            resultado += alphabet[indiceCifrado];
        } else {
            resultado += letra;
        }
    }

    return resultado;
}

function descifrar(mensajeCifrado, clave) {
    mensajeCifrado = mensajeCifrado.toLowerCase();
    let resultado = '';

    for (let i = 0; i < mensajeCifrado.length; i++) {
        const letra = mensajeCifrado[i];
        if (alphabet.includes(letra)) {
            let indiceCifrado = alphabet.indexOf(letra);
            indiceCifrado = (indiceCifrado - clave + 26) % 26;
            resultado += alphabet[indiceCifrado];
        } else {
            resultado += letra;
        }
    }

    return resultado;
}

function tieneAcentos(palabra) {
    const acentos = /[áéíóúÁÉÍÓÚ]/;
    return acentos.test(palabra);
}

function cifrarTexto() {
    const mensajeOriginal = document.getElementById('mensaje_original').value;
    const clave = parseInt(document.getElementById('clave').value);

    if (mensajeOriginal.trim() === "") {
        alert("Ingresa un mensaje para cifrar");
        return;
    }

    if (mensajeOriginal.length === 1) {
        alert("Ingresa una palabra, no solo una letra");
        return;
    }

    if (tieneAcentos(mensajeOriginal)) {
        alert("Ingresa solo letras sin acentos");
        return;
    }

    const mensajeCifrado = cifrar(mensajeOriginal, clave);
    document.getElementById('mensaje_cifrado').value = mensajeCifrado;
}

function descifrarTexto() {
    const mensajeCifradoEntrada = document.getElementById('mensaje_cifrado_entrada').value;
    const clave = parseInt(document.getElementById('clave').value);

    if (mensajeCifradoEntrada.trim() === "") {
        alert("Ingresa un mensaje cifrado para descifrar");
        return;
    }

    const mensajeDescifrado = descifrar(mensajeCifradoEntrada, clave);
    document.getElementById('mensaje_descifrado').value = mensajeDescifrado;
}

function borrarInputs(inputId) {
    document.getElementById(inputId).value = "";
}
