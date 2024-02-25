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
 * Interfaz que define las propiedades y métodos de un vehículo.
 */
export interface VehicleInterface {
    /**
     * Obtiene el ID del vehículo.
     * @returns El ID del vehículo.
     */
    getID(): string;

    /**
     * Obtiene la marca del vehículo.
     * @returns La marca del vehículo.
     */
    getBrand(): string;

    /**
     * Obtiene el modelo del vehículo.
     * @returns El modelo del vehículo.
     */
    getModel(): string;

    /**
     * Obtiene el año del vehículo.
     * @returns El año del vehículo.
     */
    getYear(): number;
}

