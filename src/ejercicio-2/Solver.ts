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
import { FirstHeuristic } from "./firstHeuristic";
import { SecondHeuristic } from "./secondHeuristic";
import { ThirdHeuristic } from "./thirdHeuristic";
import { MenuInstance } from "./MenuInstance";
import { MenuSolution } from "./MenuSolution";


/**
 * Enumeración que define los tipos de algoritmos disponibles.
 */
export enum ALGORITHM_TYPE {
  FIRST,
  SECOND,
  THIRD,
}

/**
 * Clase que representa el solucionador de menús.
 */
export class Solver {

  private heuristic?: Heuristic;

  /**
   * Crea una instancia de Solver.
   * @param algorithm El tipo de algoritmo a utilizar.
   */
  constructor(
    private algorithm: ALGORITHM_TYPE,
  ) {
  }

  /**
   * Lógica para seleccionar el algoritmo a utilizar.
   */
  private logic(): void {
    switch (this.algorithm) {
      case ALGORITHM_TYPE.FIRST:
        this.heuristic = new FirstHeuristic();
        break;
      case ALGORITHM_TYPE.SECOND:
        this.heuristic = new SecondHeuristic();
        break;
      case ALGORITHM_TYPE.THIRD:
        this.heuristic = new ThirdHeuristic();
        break;
      default:
        throw new Error("No valid algorithm");
    }
  }

  /**
   * Resuelve el menú dado utilizando el algoritmo seleccionado.
   * @param menu El menú a resolver.
   * @returns La solución del menú.
   */
  solve(menu: MenuInstance): MenuSolution {
    this.logic();
    // Obtener los platos ordenados
    const sortedDishes = this.heuristic?.solve(menu.getDishes()) as Dish[];
    // Una vez ordenados los platos, se van añadiendo al menú hasta que se alcance el valor máximo de unhealthiness
    let unhealthiness = 0;
    const dishes: Dish[] = [];
    sortedDishes.forEach((dish) => {
      if (unhealthiness + dish.unhealthinessScore <= menu.getMaxUnhealthiness()) {
        unhealthiness += dish.unhealthinessScore;
        dishes.push(dish);
      }
    });
    return new MenuSolution(dishes);
  }
}
