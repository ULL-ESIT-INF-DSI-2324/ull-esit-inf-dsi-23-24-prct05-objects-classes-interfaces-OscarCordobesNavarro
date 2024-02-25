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

import { Dish } from "./Dish";
import { Heuristic } from "./Heuristic";

/**
 * Implementación de la primera heurística para resolver un problema.
 * Esta heurística ordena los platos en base a su puntuación nutricional de mayor a menor.
 */
export class FirstHeuristic implements Heuristic {
  /**
   * Resuelve el problema utilizando la primera heurística.
   * @param data - Los platos a ordenar.
   * @returns Los platos ordenados según la primera heurística.
   */
  solve(data: Dish[]): Dish[] {
    return data.sort((a, b) => b.nutritionalScore - a.nutritionalScore);
  }
}
