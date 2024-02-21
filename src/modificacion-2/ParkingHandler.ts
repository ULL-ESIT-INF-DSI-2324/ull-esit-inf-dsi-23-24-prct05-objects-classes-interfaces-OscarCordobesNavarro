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

export class ParkingHandler {
    private numCars: number = 100;
    private numBikes: number = 25;
    // Arrays de tamaño fijo para los coches y motos
    private cars: Car[] = [];
    private bikes: Bike[] = [];

    private register: registerVehicle[] = [];

    constructor() {
    }

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

    public printStatus(): void {
        console.table(this.register);
    }
};
