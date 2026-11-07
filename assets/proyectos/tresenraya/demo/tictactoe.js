let casillas = document.getElementsByClassName("casilla");

//Declaracion de variables
//Las variables las pediste que estubieran arriba del todo pero al moverlas se rrompe el codigo.

/**
 * En esta funcion se encuentran las posibles combinaciones que hay para que un equipo gane
 * @param - no
 * @return - no
 */
let combinacionesGanadoras = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
];

let correcto = true;//Esta variable la uso para cambiar de turno
/**
 * Funcion que agrega una ficha por casilla y se encarga de cambiar de turno
 * y de eliminar el onclick para que no se pueda poner una ficha encima de optra
 * @param - int numero
 * @return - no
 */
function agregarFicha(numero) {
    //Esto quita el evento onclick de la casilla que se clicka para que no se pueda poner otra ficha encima
    casillas[numero].removeAttribute('onclick');

    if (correcto) {
        //Si la casiila es una x
        casillas[numero].textContent = '✖️';
        ganar();

        correcto = false;
        cambiarTurno();
    } else {
        casillas[numero].textContent = '⭕';
        ganar();

        correcto = true;
        cambiarTurno();

    }

}

let main = document.getElementsByTagName('main')[0];

let gananX = 0;//contador para cuando ganan las X
let gananO = 0;//contador para cuando ganan las O
let empate = 0;//contador en caso de empate
/**
 * Funcion para determinar quien gana teniendo en cuenta las combinaciones ganadoras.
 * @param - no
 * @return - no
 */
function ganar() {
    //bucle para ver quien es el ganador
    for (let i = 0; i < combinacionesGanadoras.length; i++) {
        switch (combinacionesGanadoras[i]) {
            case combinacionesGanadoras[0]:
                if (casillas[0].textContent == '✖️' && casillas[1].textContent == '✖️' && casillas[2].textContent == '✖️') {
                    win('✖️');
                    gananX++;
                    console.log("comprueba x");
                    //Llamo a la funcion de los contadores para que cuando ganan las x se incremente en 1 el contador
                    actualizarContadores();
                    quitarFichas();
                    casillas[0].classList.add('ganadora');
                    casillas[1].classList.add('ganadora');
                    casillas[2].classList.add('ganadora');
                } else if (casillas[0].textContent !== '' && casillas[1].textContent !== '' && casillas[2].textContent !== '' && casillas[3].textContent !== '' && casillas[4].textContent !== '' && casillas[5].textContent !== '' && casillas[6].textContent !== '' && casillas[7].textContent !== '' && casillas[8].textContent !== '') {
                    //Con este if controlo que si no ha saltado el mensaje de ganar y ninguna casilla este vacia esque es empate
                    //Poniendo solo una vez este if vale
                    win('Empate');
                    console.log("comprueba empate");
                    empate++;
                    actualizarContadores();
                }
                if (casillas[0].textContent == '⭕' && casillas[1].textContent == '⭕' && casillas[2].textContent == '⭕') {
                    win('⭕');
                    gananO++;
                    //Llamo a la funcion de los contadores para que cuando ganan las x se incremente en 1 el contador
                    actualizarContadores();
                    quitarFichas();
                    casillas[0].classList.add('ganadora');
                    casillas[1].classList.add('ganadora');
                    casillas[2].classList.add('ganadora');
                }
                break;
            case combinacionesGanadoras[1]:
                if (casillas[3].textContent == '✖️' && casillas[4].textContent == '✖️' && casillas[5].textContent == '✖️') {
                    win('✖️');
                    gananX++;
                    actualizarContadores();
                    quitarFichas();
                    casillas[3].classList.add('ganadora');
                    casillas[4].classList.add('ganadora');
                    casillas[5].classList.add('ganadora');
                }
                if (casillas[3].textContent == '⭕' && casillas[4].textContent == '⭕' && casillas[5].textContent == '⭕') {
                    win('⭕');
                    gananO++;
                    actualizarContadores();
                    quitarFichas();
                    casillas[3].classList.add('ganadora');
                    casillas[4].classList.add('ganadora');
                    casillas[5].classList.add('ganadora');
                }
                break;
            case combinacionesGanadoras[2]:
                if (casillas[6].textContent == '✖️' && casillas[7].textContent == '✖️' && casillas[8].textContent == '✖️') {
                    win('✖️');
                    gananX++;
                    actualizarContadores();
                    quitarFichas();
                    casillas[6].classList.add('ganadora');
                    casillas[7].classList.add('ganadora');
                    casillas[8].classList.add('ganadora');
                }
                if (casillas[6].textContent == '⭕' && casillas[7].textContent == '⭕' && casillas[8].textContent == '⭕') {
                    win('⭕');
                    gananO++;
                    actualizarContadores();
                    quitarFichas();
                    casillas[6].classList.add('ganadora');
                    casillas[7].classList.add('ganadora');
                    casillas[8].classList.add('ganadora');
                }
                break;
            case combinacionesGanadoras[3]:
                if (casillas[0].textContent == '✖️' && casillas[4].textContent == '✖️' && casillas[8].textContent == '✖️') {
                    win('✖️');
                    gananX++;
                    actualizarContadores();
                    quitarFichas();
                    casillas[0].classList.add('ganadora');
                    casillas[4].classList.add('ganadora');
                    casillas[8].classList.add('ganadora');
                }
                if (casillas[0].textContent == '⭕' && casillas[4].textContent == '⭕' && casillas[8].textContent == '⭕') {
                    win('⭕');
                    gananO++;
                    actualizarContadores();
                    quitarFichas();
                    casillas[0].classList.add('ganadora');
                    casillas[4].classList.add('ganadora');
                    casillas[8].classList.add('ganadora');
                }
                break;
            case combinacionesGanadoras[4]:
                if (casillas[2].textContent == '✖️' && casillas[4].textContent == '✖️' && casillas[6].textContent == '✖️') {
                    win('✖️');
                    gananX++;
                    actualizarContadores();
                    quitarFichas();
                    casillas[2].classList.add('ganadora');
                    casillas[4].classList.add('ganadora');
                    casillas[6].classList.add('ganadora');
                }
                if (casillas[2].textContent == '⭕' && casillas[4].textContent == '⭕' && casillas[6].textContent == '⭕') {
                    win('⭕');
                    gananO++;
                    actualizarContadores();
                    quitarFichas();
                    casillas[2].classList.add('ganadora');
                    casillas[4].classList.add('ganadora');
                    casillas[6].classList.add('ganadora');
                }
                break;
            case combinacionesGanadoras[5]:
                if (casillas[0].textContent == '✖️' && casillas[3].textContent == '✖️' && casillas[6].textContent == '✖️') {
                    win('✖️');
                    gananX++;
                    actualizarContadores();
                    quitarFichas();
                    casillas[0].classList.add('ganadora');
                    casillas[3].classList.add('ganadora');
                    casillas[6].classList.add('ganadora');
                }
                if (casillas[0].textContent == '⭕' && casillas[3].textContent == '⭕' && casillas[6].textContent == '⭕') {
                    win('⭕');
                    gananO++;
                    actualizarContadores();
                    quitarFichas();
                    casillas[0].classList.add('ganadora');
                    casillas[3].classList.add('ganadora');
                    casillas[6].classList.add('ganadora');
                }
                break;
            case combinacionesGanadoras[6]:
                if (casillas[1].textContent == '✖️' && casillas[4].textContent == '✖️' && casillas[7].textContent == '✖️') {
                    win('✖️');
                    gananX++;
                    actualizarContadores();
                    quitarFichas();
                    casillas[1].classList.add('ganadora');
                    casillas[4].classList.add('ganadora');
                    casillas[7].classList.add('ganadora');
                }
                if (casillas[1].textContent == '⭕' && casillas[4].textContent == '⭕' && casillas[7].textContent == '⭕') {
                    win('⭕');
                    gananO++;
                    actualizarContadores();
                    quitarFichas();
                    casillas[1].classList.add('ganadora');
                    casillas[4].classList.add('ganadora');
                    casillas[7].classList.add('ganadora');
                }
                break;
            case combinacionesGanadoras[7]:
                if (casillas[2].textContent == '✖️' && casillas[5].textContent == '✖️' && casillas[8].textContent == '✖️') {
                    win('✖️');
                    gananX++;
                    actualizarContadores();
                    quitarFichas();
                    casillas[2].classList.add('ganadora');
                    casillas[5].classList.add('ganadora');
                    casillas[8].classList.add('ganadora');
                }
                if (casillas[2].textContent == '⭕' && casillas[5].textContent == '⭕' && casillas[8].textContent == '⭕') {
                    win('⭕');
                    gananO++;
                    actualizarContadores();
                    quitarFichas();
                    casillas[2].classList.add('ganadora');
                    casillas[5].classList.add('ganadora');
                    casillas[8].classList.add('ganadora');
                }
                break;
            default:
                break;
        }
    }
}

// Crear contadores
//Creo el contador de las C añadiendo una etiqueta p poniendolo en 0
let contadorX = document.createElement('p');
contadorX.setAttribute('class', 'contadorX');
contadorX.textContent = 'Equipo X: 0';

//Creo el contador de las O añadiendo una etiqueta p poniendolo en 0
let contadorO = document.createElement('p');
contadorO.setAttribute('class', 'contadorO');
contadorO.textContent = 'Equipo O: 0';

//Creo el contador del empate añadiendo una etiqueta p poniendolo en 0
let contadorEmpate = document.createElement('p');
contadorEmpate.setAttribute('class', 'contadorEm');
contadorEmpate.textContent = 'Empates: 0';

// Agregar contadores al HTML
//Creo un div en el que metere los contadores y posteriormente los meto en el div
let contenedorContadores = document.createElement('div');
contenedorContadores.appendChild(contadorX);
contenedorContadores.appendChild(contadorO);
contenedorContadores.appendChild(contadorEmpate);
main.appendChild(contenedorContadores);

/**
 * Esta funcion sirve para mostrar los contadores por pantalla con el contador que se va incrementando en 1 cuando gana alguien
 * @param - no
 * @return - no
 */
function actualizarContadores() {
    // gracias a los contadores que incremento en el switch cuando gana alguien se 
    // incrementan los contadores dependiendo de quien gana o si se empata
    contadorX.textContent = `Equipo X: ${gananX}`;
    contadorO.textContent = `Equipo O: ${gananO}`;
    contadorEmpate.textContent = `Empates: ${empate}`;
}

/**
 * Esta funcion sirve para resetear el tablero
 * @param - no
 * @return - no 
 */
function resetear() {
    //este metodo selecciona todas las casillas con la clase casilla
    //usando document.querySelectorAll()
    let casillas = document.querySelectorAll(".casilla");
    for (let i = 0; i < casillas.length; i++) {
        //al tener todas las casillas seleccionadas le indicamos que contengan un String vacio cuando se pulsa el boton resetear
        casillas[i].textContent = "";
        //aqui vuelvo a llamar a la funcion agregarFicha para que al resetear vuelvan a tener el onclick las casillas
        casillas[i].setAttribute("onclick", "agregarFicha(" + i + ")");
        casillas[i].classList.remove('ganadora');
    }

    divW.innerHTML = "";// esto es el mensaje de victoria que al ponerlo aqui al resetear se elimina
}

/**
 * Esta funcion sirve para que al haber un ganador no se puedan seguir poniendo fichas
 * @param - no
 * @return - no
 */
function quitarFichas() {
    for (let i = 0; i < casillas.length; i++) {
        
        casillas[i].removeAttribute("onclick");
    }
}


let turno = 'X'; // valor inicial del turno

// Crear elemento 'p' para mostrar el turno
let div = document.createElement('div');
let p = document.createElement('p');

p.setAttribute('id', 'turno');
p.textContent = `Turno: ${turno}`;

// Agregar elemento 'p' al HTML

div.appendChild(p);
document.body.insertBefore(div, document.getElementById('main'));

/**
 * Esta funcion sirve para mostrar cual es el turno que toca, es decir que jugador pone ficha
 * @param - no
 * @return - no
 */
function cambiarTurno() {
    if (turno === 'X') {
        turno = 'O';
    } else {
        turno = 'X';
    }
    p.textContent = `Turno: ${turno}`;
}

let divW = document.getElementById('cajaWin'); //creo este div que es el que contiene el mensaje de quien ha ganado
let victoria = document.createElement('p');// esta variable contiene una etiqueta p que tiene el contenido del mensaje
/**
 * Funcion para mostrar por pantalla quien ha ganado o si ha sido empate
 * @param - String ganador
 * @return - no
 */
function win(ganador) {
    victoria.setAttribute('class', 'victoriaTxt');
    victoria.textContent = "Ganador " + ganador;
    divW.appendChild(victoria);
}