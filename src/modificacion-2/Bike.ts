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

import {Vehicle} from "./Vehicle";

/**
 * Clase que representa una bicicleta.
 * Hereda de la clase Vehicle.
 */
export class Bike extends Vehicle {
    private type: string;
    private gears: number;

    /**
     * Crea una instancia de la clase Bike.
     * @param id - El identificador de la bicicleta.
     * @param brand - La marca de la bicicleta.
     * @param model - El modelo de la bicicleta.
     * @param year - El año de fabricación de la bicicleta.
     * @param type - El tipo de bicicleta.
     * @param gears - El número de marchas de la bicicleta.
     */
    constructor(id: string, brand: string, model: string, year: number, type: string, gears: number) {
        super(id, brand, model, year);
        this.type = type;
        this.gears = gears;
    }

    /**
     * Obtiene el tipo de bicicleta.
     * @returns El tipo de bicicleta.
     */
    getType(): string {
        return this.type;
    }

    /**
     * Obtiene el número de marchas de la bicicleta.
     * @returns El número de marchas de la bicicleta.
     */
    getGears(): number {
        return this.gears;
    }
}