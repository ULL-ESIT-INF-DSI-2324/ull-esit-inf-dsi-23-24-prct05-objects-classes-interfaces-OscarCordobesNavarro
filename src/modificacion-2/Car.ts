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
 * Clase que representa un coche.
 * Hereda de la clase Vehicle.
 */
export class Car extends Vehicle {
    private seats: number;
    private doors: number;

    /**
     * Crea una instancia de la clase Car.
     * @param id - El identificador del coche.
     * @param brand - La marca del coche.
     * @param model - El modelo del coche.
     * @param year - El año de fabricación del coche.
     * @param seats - El número de asientos del coche.
     * @param doors - El número de puertas del coche.
     */
    constructor(id: string, brand: string, model: string, year: number, seats: number, doors: number) {
        super(id, brand, model, year);
        this.seats = seats;
        this.doors = doors;
    }

    /**
     * Obtiene el número de asientos del coche.
     * @returns El número de asientos del coche.
     */
    getSeats(): number {
        return this.seats;
    }

    /**
     * Obtiene el número de puertas del coche.
     * @returns El número de puertas del coche.
     */
    getDoors(): number {
        return this.doors;
    }
}