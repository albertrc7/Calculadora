const numero = document.getElementById('nmero');
const intro = document.querySelectorAll('.btnes button');

let numeropulsado = '';

intro.forEach(boton => {
    boton.addEventListener('click', () => calcular(boton.textContent));
});


function actualizarPantalla(){
    numero.textContent = numeropulsado ;
}

function calcular(valor){
    if (!isNaN(valor)) {
        numeropulsado += valor; // Añadir número a la entrada.
    } else if (valor === 'C') {
        numeropulsado = ''; // Limpiar la entrada.
    } else if (valor === '=') {
        try {
            numeropulsado = eval(numeropulsado).toString(); // Evaluar la expresión.
        } catch (error) {
            numeropulsado = 'Error'; // Manejo de errores.
        }
    } else {
        numeropulsado += ` ${valor} `; // Añadir operador.
    }
    actualizarPantalla(); // Actualizar la pantalla con la entrada actual.
}