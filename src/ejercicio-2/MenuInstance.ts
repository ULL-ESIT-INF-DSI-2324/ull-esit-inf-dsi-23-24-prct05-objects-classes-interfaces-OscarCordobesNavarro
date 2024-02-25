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
 * Representa una instancia de menú que contiene una lista de platos y un valor máximo de insalubridad.
 */
export class MenuInstance {
    /**
     * Crea una instancia de MenuInstance.
     * @param data Los platos del menú.
     * @param maxUnhealthiness El valor máximo de insalubridad permitido.
     */
    constructor(private data: Dish[], private maxUnhealthiness: number) {}

    /**
     * Obtiene la lista de platos del menú.
     * @returns Los platos del menú.
     */
    getDishes(): Dish[] {
        return this.data;
    }

    /**
     * Obtiene el valor máximo de insalubridad permitido.
     * @returns El valor máximo de insalubridad.
     */
    getMaxUnhealthiness(): number {
        return this.maxUnhealthiness;
    }
}
