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

import { Car } from "./Car";
import { Bike } from "./Bike";
import {Vehicle} from "./Vehicle";

export type registerVehicle = [Vehicle, Date];

/**
 * Clase que maneja el estacionamiento de vehículos.
 */
export class ParkingHandler {
    private numCars: number = 100;
    private numBikes: number = 25;
    private cars: Car[] = [];
    private bikes: Bike[] = [];

    private register: registerVehicle[] = [];

    constructor() {
    }

    /**
     * Añade un vehículo al estacionamiento.
     * @param vehicle El vehículo a añadir.
     * @param date La fecha de llegada del vehículo.
     * @returns `true` si se añadió correctamente, `false` en caso contrario.
     */
    public addVehicle(vehicle: Vehicle, date: Date): boolean {
        // Dependiendo del tipo de vehículo, se añade al array correspondiente
        if (vehicle instanceof Car && this.cars.length < this.numCars) {
            this.cars.push(vehicle);
            this.register.push([vehicle, date]);
            return true;
        } else if (vehicle instanceof Bike && this.bikes.length < this.numBikes) {
            this.bikes.push(vehicle);
            this.register.push([vehicle, date]);
            return true;
        }
        return false;
    }

    /**
     * Elimina un vehículo del estacionamiento.
     * @param vehicle El vehículo a eliminar.
     * @returns `true` si se eliminó correctamente, `false` en caso contrario.
     */
    public removeVehicle(vehicle: Vehicle): boolean {
        // Comprobamos que su registro exista
        if (!this.register.find((register) => register[0].getID() === vehicle.getID())) {
            return false;
        }
        // Dependiendo del tipo de vehículo, se elimina del array correspondiente
        if (vehicle instanceof Car) {
            this.cars = this.cars.filter((car) => car.getID() !== vehicle.getID());
            return true;
        } else if (vehicle instanceof Bike) {
            this.bikes = this.bikes.filter((bike) => bike.getID() !== vehicle.getID());
            return true;
        }
        return false;
    }

    /**
     * Imprime el estado actual del estacionamiento.
     */
    public printStatus(): void {
        console.table(this.register.map(([vehicle, date]) => ({
            ID: vehicle.getID(),
            Type: vehicle instanceof Car ? 'Car' : 'Bike',
            Brand: vehicle.getBrand(),
            Model: vehicle.getModel(),
            Arrived: date.toISOString(),
        })));
    }
};
