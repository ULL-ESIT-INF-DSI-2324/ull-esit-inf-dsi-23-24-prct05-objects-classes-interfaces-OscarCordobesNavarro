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
 * Interfaz que representa una heurística para resolver un problema.
 */
import { Dish } from "./Dish";

/**
 * Interfaz que representa una heurística para resolver un problema.
 */
export interface Heuristic {
    /**
     * Resuelve el problema utilizando la heurística.
     * @param data Los datos del problema.
     * @returns Los datos resueltos del problema.
     */
    solve(data: Dish[]): Dish[];
}
