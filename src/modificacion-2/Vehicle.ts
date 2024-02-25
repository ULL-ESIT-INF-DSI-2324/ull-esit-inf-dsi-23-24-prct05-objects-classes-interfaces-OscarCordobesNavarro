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

/**
 * Clase abstracta que representa un vehículo.
 * Implementa la interfaz VehicleInterface.
 */
import {VehicleInterface} from "./VehicleInterface";

export abstract class Vehicle implements VehicleInterface {
    private id: string;
    private brand: string;
    private model: string;
    private year: number;

    /**
     * Crea una instancia de la clase Vehicle.
     * @param id - El identificador del vehículo.
     * @param brand - La marca del vehículo.
     * @param model - El modelo del vehículo.
     * @param year - El año de fabricación del vehículo.
     */
    constructor(id: string, brand: string, model: string, year: number) {
        this.id = id;
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    /**
     * Obtiene el identificador del vehículo.
     * @returns El identificador del vehículo.
     */
    getID(): string {
        return this.id;
    }

    /**
     * Obtiene la marca del vehículo.
     * @returns La marca del vehículo.
     */
    getBrand(): string {
        return this.brand;
    }

    /**
     * Obtiene el modelo del vehículo.
     * @returns El modelo del vehículo.
     */
    getModel(): string {
        return this.model;
    }

    /**
     * Obtiene el año de fabricación del vehículo.
     * @returns El año de fabricación del vehículo.
     */
    getYear(): number {
        return this.year;
    }
}