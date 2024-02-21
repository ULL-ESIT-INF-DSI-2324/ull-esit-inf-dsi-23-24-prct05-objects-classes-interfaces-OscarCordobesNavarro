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
import {VehicleInterface} from "./VehicleInterface";

export abstract class Vehicle implements VehicleInterface {
    private id: string;
    private brand: string;
    private model: string;
    private year: number;

    constructor(id: string, brand: string, model: string, year: number) {
        this.id = id;
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    getID(): string {
        return this.id;
    }
    getBrand(): string {
        return this.brand;
    }
    getModel(): string {
        return this.model;
    }
    getYear(): number {
        return this.year;
    }
}