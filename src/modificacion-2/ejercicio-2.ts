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
import { ParkingHandler } from "./ParkingHandler";


const car1 = new Car('5', 'Audi', 'A3', 2020, 5, 5);
const car2 = new Car('6', 'Renault', 'Clio', 2018, 5, 5);
const bike1 = new Bike('7', 'Orbea', 'Alma', 2019, 'Mountain', 10);
const bike2 = new Bike('8', 'BH', 'G7', 2020, 'Road', 18);

const parkingHandler = new ParkingHandler();
parkingHandler.addVehicle(car1, new Date(2024, 2, 18, 12, 0, 0, 0));
parkingHandler.addVehicle(car2, new Date(2024, 2, 18, 12, 0, 0, 0));
parkingHandler.addVehicle(bike1, new Date(2024, 2, 18, 12, 0, 0, 0));
parkingHandler.addVehicle(bike2, new Date(2024, 2, 18, 12, 0, 0, 0));

parkingHandler.printStatus();
