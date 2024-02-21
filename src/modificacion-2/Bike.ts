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

export class Bike extends Vehicle {
    private type: string;
    private gears: number;

    constructor(id: string, brand: string, model: string, year: number, type: string, gears: number) {
        super(id, brand, model, year);
        this.type = type;
        this.gears = gears;
    }

    getType(): string {
        return this.type;
    }

    getGears(): number {
        return this.gears;
    }
}