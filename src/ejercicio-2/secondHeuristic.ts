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
 * Implementación de la segunda heurística para resolver el problema.
 * Esta heurística ordena los platos en función de su puntuación de no saludabilidad de menor a mayor.
 */
export class SecondHeuristic implements Heuristic {
  /**
   * Resuelve el problema utilizando la segunda heurística.
   * @param data Los platos a ordenar.
   * @returns Los platos ordenados según la segunda heurística.
   */
  solve(data: Dish[]): Dish[] {
    return data.sort((a, b) => a.unhealthinessScore - b.unhealthinessScore);
  }
}