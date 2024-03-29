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
 * Interfaz que representa un plato.
 */
export interface Dish {
    /**
     * Nombre del plato.
     */
    name: string;
    /**
     * Puntuación nutricional del plato.
     */
    nutritionalScore: number;
    /**
     * Puntuación de falta de salud del plato.
     */
    unhealthinessScore: number;
}