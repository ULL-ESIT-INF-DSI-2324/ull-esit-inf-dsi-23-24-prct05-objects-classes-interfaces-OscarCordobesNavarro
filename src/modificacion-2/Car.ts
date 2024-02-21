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

export class Car extends Vehicle {
    private seats: number;
    private doors: number;

    constructor(id: string, brand: string, model: string, year: number, seats: number, doors: number) {
        super(id, brand, model, year);
        this.seats = seats;
        this.doors = doors;
    }

    getSeats(): number {
        return this.seats;
    }

    getDoors(): number {
        return this.doors;
    }
}