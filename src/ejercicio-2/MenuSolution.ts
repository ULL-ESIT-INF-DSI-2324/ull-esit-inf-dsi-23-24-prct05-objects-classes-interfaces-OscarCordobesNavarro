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

/**
 * Clase que representa un menú de platos.
 */
export class MenuSolution {
    private totalNutritionalScore: number = 0;
    private totalUnhealthinessScore: number = 0;

    /**
     * Crea una instancia de MenuSolution.
     * @param dishes Los platos que componen el menú.
     */
    constructor(private dishes: Dish[]) {
        this.totalNutritionalScore = dishes.reduce((acc, dish) => acc + dish.nutritionalScore, 0);
        this.totalUnhealthinessScore = dishes.reduce((acc, dish) => acc + dish.unhealthinessScore, 0);
    }

    /**
     * Obtiene los platos del menú.
     * @returns Los platos del menú.
     */
    getDishes(): Dish[] {
        return this.dishes;
    }

    /**
     * Obtiene la puntuación nutricional total del menú.
     * @returns La puntuación nutricional total del menú.
     */
    getTotalNutritionalScore(): number {
        return this.totalNutritionalScore;
    }

    /**
     * Obtiene la puntuación de falta de salud total del menú.
     * @returns La puntuación de falta de salud total del menú.
     */
    getTotalUnhealthinessScore(): number {
        return this.totalUnhealthinessScore;
    }

    /**
     * Muestra por consola la información del menú.
     */
    display(): void {
        console.log(`Puntuación nutricional total: ${this.totalNutritionalScore}`);
        console.log(`Puntuación de falta de salud total: ${this.totalUnhealthinessScore}`);
        console.table(this.dishes);
    }
}