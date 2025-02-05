let limit = 36;
document.getElementById('limit').textContent = limit;

document.getElementById('calcular').addEventListener('click', function () {
    let numero = document.getElementById('numero').value;
    let resultados = document.getElementById('resultados');
    resultados.innerHTML = '';


    if (numero >= 0 && numero <= limit) {
        let numeroInvertido = invertirNumero(numero);

        if (numeroInvertido <= limit) {
            // Solo le Sumo
            if (numero * 1 + 1 >= 0 && numero * 1 + 1 <= limit) {
                agregarResultado(resultados, 'Número + 1: ' + (numero * 1 + 1));
            }
            if (numero * 1 + 2 >= 0 && numero * 1 + 2 <= limit) {
                agregarResultado(resultados, 'Número + 2: ' + (numero * 1 + 2));
            }
            if (numero * 1 + 4 >= 0 && numero * 1 + 4 <= limit) {
                agregarResultado(resultados, 'Número + 4: ' + (numero * 1 + 4));
            }

            // Sumo y lo invierto
            if (invertirNumero(numero * 1 + 1) >= 0 && invertirNumero(numero * 1 + 1) <= limit) {
                agregarResultado(resultados, 'Número + 1 invertido: ' + (invertirNumero(numero * 1 + 1)));
            }
            if (invertirNumero(numero * 1 + 2) >= 0 && invertirNumero(numero * 1 + 2) <= limit) {
                agregarResultado(resultados, 'Número + 2 invertido: ' + (invertirNumero(numero * 1 + 2)));
            }
            if (invertirNumero(numero * 1 + 4) >= 0 && invertirNumero(numero * 1 + 4) <= limit) {
                agregarResultado(resultados, 'Número + 4 invertido: ' + (invertirNumero(numero * 1 + 4)));
            }
            // Solo Resto
            if (numero - 1 >= 0 && numero - 1 <= limit) {
                agregarResultado(resultados, 'Número - 1: ' + (numero - 1));
            }
            if (numero - 2 >= 0 && numero - 2 <= limit) {
                agregarResultado(resultados, 'Número - 2: ' + (numero - 2));
            }
            if (numero - 4 >= 0 && numero - 4 <= limit) {
                agregarResultado(resultados, 'Número - 4: ' + (numero - 4));
            }
            // Resto y Invierto
            if (invertirNumero(numero - 1) >= 0 && invertirNumero(numero - 1) <= limit) {
                if (numero - 1 != invertirNumero(numero - 1)) {
                    agregarResultado(resultados, 'Número - 1 invertido: ' + (invertirNumero(numero - 1)));
                }
            }
            if (invertirNumero(numero - 2) >= 0 && invertirNumero(numero - 2) <= limit) {
                if (numero - 2 != invertirNumero(numero - 2)) {
                    agregarResultado(resultados, 'Número - 2 invertido: ' + (invertirNumero(numero - 2)));
                }
            }
            if (invertirNumero(numero - 4) >= 0 && invertirNumero(numero - 4) <= limit) {
                if (numero - 4 != invertirNumero(numero - 4)) {
                    agregarResultado(resultados, 'Número - 4 invertido: ' + (invertirNumero(numero - 4)));
                }
            }

            // Le Sumo al numero invertido
            if (numeroInvertido * 1 + 1 >= 0 && numeroInvertido * 1 + 1 <= limit) {
                agregarResultado(resultados, 'Número invertido + 1: ' + (numeroInvertido * 1 + 1));
            }
            if (numeroInvertido * 1 + 2 >= 0 && numeroInvertido * 1 + 2 <= limit) {
                agregarResultado(resultados, 'Número invertido + 2: ' + (numeroInvertido * 1 + 2));
            }
            if (numeroInvertido * 1 + 4 >= 0 && numeroInvertido * 1 + 4 <= limit) {
                agregarResultado(resultados, 'Número invertido + 4: ' + (numeroInvertido * 1 + 4));
            }

            // Le Resto al Numero Invertido
            if (numeroInvertido - 1 >= 0 && numeroInvertido - 1 <= limit) {
                agregarResultado(resultados, 'Número invertido - 1: ' + (numeroInvertido - 1));
            }
            if (numeroInvertido - 2 >= 0 && numeroInvertido - 2 <= limit) {
                agregarResultado(resultados, 'Número invertido - 2: ' + (numeroInvertido - 2));
            }
            if (numeroInvertido - 4 >= 0 && numeroInvertido - 4 <= limit) {
                agregarResultado(resultados, 'Número invertido - 4: ' + (numeroInvertido - 4));
            }
        } else {

            // Solo le Sumo
            if (numero * 1 + 1 >= 0 && numero * 1 + 1 <= limit) {
                agregarResultado(resultados, 'Número + 1: ' + (numero * 1 + 1));
            }
            if (numero * 1 + 2 >= 0 && numero * 1 + 2 <= limit) {
                agregarResultado(resultados, 'Número + 2: ' + (numero * 1 + 2));
            }
            if (numero * 1 + 4 >= 0 && numero * 1 + 4 <= limit) {
                agregarResultado(resultados, 'Número + 4: ' + (numero * 1 + 4));
            }

            // Sumo y lo invierto
            if (invertirNumero(numero * 1 + 1) >= 0 && invertirNumero(numero * 1 + 1) <= limit) {
                agregarResultado(resultados, 'Número + 1 invertido: ' + (invertirNumero(numero * 1 + 1)));
            }
            if (invertirNumero(numero * 1 + 2) >= 0 && invertirNumero(numero * 1 + 2) <= limit) {
                agregarResultado(resultados, 'Número + 2 invertido: ' + (invertirNumero(numero * 1 + 2)));
            }
            if (invertirNumero(numero * 1 + 4) >= 0 && invertirNumero(numero * 1 + 4) <= limit) {
                agregarResultado(resultados, 'Número + 4 invertido: ' + (invertirNumero(numero * 1 + 4)));
            }
            // Solo Resto
            if (numero - 1 >= 0 && numero - 1 <= limit) {
                agregarResultado(resultados, 'Número - 1: ' + (numero - 1));
            }
            if (numero - 2 >= 0 && numero - 2 <= limit) {
                agregarResultado(resultados, 'Número - 2: ' + (numero - 2));
            }
            if (numero - 4 >= 0 && numero - 4 <= limit) {
                agregarResultado(resultados, 'Número - 4: ' + (numero - 4));
            }
            // Resto y Invierto
            if (invertirNumero(numero - 1) >= 0 && invertirNumero(numero - 1) <= limit) {
                agregarResultado(resultados, 'Número - 1 invertido: ' + (invertirNumero(numero - 1)));
            }
            if (invertirNumero(numero - 2) >= 0 && invertirNumero(numero - 2) <= limit) {
                agregarResultado(resultados, 'Número - 2 invertido: ' + (invertirNumero(numero - 2)));
            }
            if (invertirNumero(numero - 4) >= 0 && invertirNumero(numero - 4) <= limit) {
                agregarResultado(resultados, 'Número - 4 invertido: ' + (invertirNumero(numero - 4)));
            }
        }

    } else {
        alert('Por favor, ingresa un número entre 00 y ', limit);
    }
});

function invertirNumero(numero) {
    return parseInt(numero.toString().split('').reverse().join(''));
}

function agregarResultado(contenedor, texto) {
    let p = document.createElement('p');
    p.textContent = texto;
    contenedor.appendChild(p);
}
