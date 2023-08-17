function cifrar(palabra, clave) {
    const alfabeto = 'abcdefghijklmnopqrstuvwxyz';
    palabra = palabra.toLowerCase();
    let resultado = '';

    for (let i = 0; i < palabra.length; i++) {
        const letra = palabra[i];
        if (alfabeto.includes(letra)) {
            const indiceOriginal = alfabeto.indexOf(letra);
            const indiceCifrado = (indiceOriginal + clave) % 26;
            resultado += alfabeto[indiceCifrado];
        } else {
            resultado += letra;
        }
    }

    return resultado;
}

function descifrar(mensajeCifrado, clave) {
    const alfabeto = 'abcdefghijklmnopqrstuvwxyz';
    mensajeCifrado = mensajeCifrado.toLowerCase();
    let resultado = '';

    for (let i = 0; i < mensajeCifrado.length; i++) {
        const letra = mensajeCifrado[i];
        if (alfabeto.includes(letra)) {
            let indiceCifrado = alfabeto.indexOf(letra);
            indiceCifrado = (indiceCifrado - clave + 26) % 26; 
            resultado += alfabeto[indiceCifrado];
        } else {
            resultado += letra;
        }
    }

    return resultado;
}

function cifrarTexto() {
    const mensajeOriginal = document.getElementById('mensaje_original').value;
    const clave = parseInt(document.getElementById('clave').value);

    if (mensajeOriginal.trim() === "") {
        alert("Ingresa un mensaje para cifrar")
        return;
    }
    const mensajeCifrado = cifrar(mensajeOriginal, clave);
    document.getElementById('mensaje_cifrado').value = mensajeCifrado;
}

function descifrarTexto() {
    const mensajeCifradoEntrada = document.getElementById('mensaje_cifrado_entrada').value;
    const clave = parseInt(document.getElementById('clave').value);

    if (mensajeCifradoEntrada.trim() === "") {
        alert("Ingresa un mensaje cifrado para descifrar")
        return;
    }


    const mensajeDescifrado = descifrar(mensajeCifradoEntrada, clave);
    document.getElementById('mensaje_descifrado').value = mensajeDescifrado;
}

function borrarInputs(inputId) {
    document.getElementById(inputId).value = "";
}
