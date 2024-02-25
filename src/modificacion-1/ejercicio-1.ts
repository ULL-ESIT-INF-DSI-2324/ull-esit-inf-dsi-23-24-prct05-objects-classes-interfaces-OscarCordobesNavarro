/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Asignatura: Desarrollo de Sistemas Informáticos
 * Curso: 3º
 * Autor: Óscar Cordobés Navarro
 * Correo: alu0101478081@ull.edu.es
 * Fecha: 18/02/2024
 * Práctica 5: Objetos, clases e interfaces
 */

/**
 * Objeto que representa un tablero de ajedrez.
 */
export const chessBoard = {
    /**
     * Matriz que representa el tablero de ajedrez.
     */
    board: Array.from({ length: 8 }, () => new Array<"-"|"N"|"B">(8)),
    /**
     * Imprime el tablero de ajedrez en la consola.
     */
    printBoard: function() {
        console.table(this.board);
    },
    /**
     * Asigna la posición de las reinas de cada color en el tablero.
     * @param whiteQueen - Posición de la reina blanca en formato [fila, columna].
     * @param blackQueen - Posición de la reina negra en formato [fila, columna].
     */
    setQueens: function(whiteQueen?: [number, number], blackQueen?: [number, number]) {
        // Comprobar que los números son válidos y además no son iguales
        if (whiteQueen && (whiteQueen[0] < 0 || whiteQueen[0] > 7 || whiteQueen[1] < 0 || whiteQueen[1] > 7) && whiteQueen !== blackQueen) {
            undefined
        }
        if (whiteQueen) {
            this.board[whiteQueen[0]][whiteQueen[1]] = "B";
        }
        if (blackQueen) {
            this.board[blackQueen[0]][blackQueen[1]] = "N";
        }
    },
    /**
     * Reinicia el tablero de ajedrez, rellenando todas las casillas con el carácter "-".
     */
    reset: function() {
        this.board.forEach((row) => {
            row.fill("-", 0, 8);
        });
    }
}


/**
 * Comprueba si las reinas en el tablero están en posición de ataque. Debe de contener las dos reinas en el tablero.
 * @param table - Tablero de ajedrez representado como una matriz de caracteres.
 * @returns Devuelve true si las reinas están en posición de ataque, false si no lo están, y undefined si no se encuentran las dos reinas en el tablero.
 */
export function checkAttack(table: string[][]) {
    // Comprobar que existen las dos reinas
    if (table.find(row => row.includes("B")) === undefined || table.find(row => row.includes("N")) === undefined) {
        return undefined
    }
    // No puede haber más de una reina de cada color
    if (table.filter(row => row.includes("B")).length > 1 || table.filter(row => row.includes("N")).length > 1) {
        return undefined;
    } else {
        // Comprobar si hay solamente una reina de cada color
        // Encontrar las posiciones de las reinas
        const whiteQueen = [table.findIndex(row => row.includes("B")), (table.find(row => row.includes("B")) as string[]).indexOf("B")];
        const blackQueen = [table.findIndex(row => row.includes("N")), (table.find(row => row.includes("N")) as string[]).indexOf("N")];

        // Comprobamos que no están en la misma fila, columna o diagonal
        // La diagonal la comprobamos con la resta de las posiciones de las reinas, si están en diagonal siempre formarán un cuadrado
        if (whiteQueen[0] === blackQueen[0] || whiteQueen[1] === blackQueen[1] || Math.abs(whiteQueen[0] - blackQueen[0]) === Math.abs(whiteQueen[1] - blackQueen[1])) {
            return true;
        } else {
            return false;
        }
    }
}

