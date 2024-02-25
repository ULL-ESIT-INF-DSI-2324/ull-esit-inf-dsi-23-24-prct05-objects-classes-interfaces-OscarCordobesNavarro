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
 * Implementación de la tercera heurística para resolver un problema.
 * Esta heurística ordena los platos en función de la puntuación nutricional dividida por la puntuación de insalubridad.
 */
export class ThirdHeuristic implements Heuristic {
  /**
   * Resuelve el problema utilizando la tercera heurística.
   * @param data Los platos a ordenar.
   * @returns Los platos ordenados según la tercera heurística.
   */
  solve(data: Dish[]): Dish[] {
    return data.sort((a, b) => (b.nutritionalScore / b.unhealthinessScore) - (a.nutritionalScore / a.unhealthinessScore));
  }
}