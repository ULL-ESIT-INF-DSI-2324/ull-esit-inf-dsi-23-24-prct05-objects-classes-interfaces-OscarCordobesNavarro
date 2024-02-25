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

import "mocha";
import { expect } from "chai";
import { MenuInstance } from "../src/ejercicio-2/MenuInstance";
import { Solver } from "../src/ejercicio-2/Solver";
import { ALGORITHM_TYPE } from "../src/ejercicio-2/Solver";

describe("Solver tests", () => {
    const additionalDishes1 = [
        { name: 'Sushi', nutritionalScore: 8, unhealthinessScore: 4 },
        { name: 'Grilled Chicken Breast', nutritionalScore: 9, unhealthinessScore: 3 },
        { name: 'Vegetable Stir-Fry', nutritionalScore: 7, unhealthinessScore: 2 },
        { name: 'Smoothie Bowl', nutritionalScore: 4, unhealthinessScore: 1 }
    ];
    const additionalDishes2 = [
        { name: 'Pasta Primavera', nutritionalScore: 6, unhealthinessScore: 4 },
        { name: 'Quinoa Salad', nutritionalScore: 7, unhealthinessScore: 2 },
        { name: 'Grilled Salmon', nutritionalScore: 9, unhealthinessScore: 3 },
        { name: 'Veggie Burger', nutritionalScore: 5, unhealthinessScore: 4 },
        { name: 'Fajita Bowl', nutritionalScore: 8, unhealthinessScore: 3 }
    ];
    const additionalDishes3 = [
        { name: 'Caprese Salad', nutritionalScore: 4, unhealthinessScore: 2 },
        { name: 'Roasted Vegetable Medley', nutritionalScore: 8, unhealthinessScore: 2 },
        { name: 'Shrimp and Avocado Wrap', nutritionalScore: 7, unhealthinessScore: 3 },
        { name: 'Mango Chicken Curry', nutritionalScore: 6, unhealthinessScore: 4 },
        { name: 'Greek Yogurt Parfait', nutritionalScore: 3, unhealthinessScore: 2 }
    ];

    const menu1 = new MenuInstance(additionalDishes1, 10);
    const menu2 = new MenuInstance(additionalDishes2, 10);
    const menu3 = new MenuInstance(additionalDishes3, 10);
    let solucionador = new Solver(ALGORITHM_TYPE.FIRST);
    let solucion1 = solucionador.solve(menu1);
    let solucion2 = solucionador.solve(menu2);
    let solucion3 = solucionador.solve(menu3);
    it("Should return the correct solution for the first menu using first heuristic", () => {
        expect(solucion1.getDishes().length).to.equal(4);
        expect(solucion1.getDishes()[0].name).to.equal('Grilled Chicken Breast');
        expect(solucion1.getDishes()[1].name).to.equal('Sushi');
        expect(solucion1.getDishes()[2].name).to.equal('Vegetable Stir-Fry');
        expect(solucion1.getDishes()[3].name).to.equal('Smoothie Bowl');
    });
    it("Should return the correct solution for the second menu using first heuristic", () => {
        expect(solucion2.getDishes().length).to.equal(3);
        expect(solucion2.getDishes()[0].name).to.equal('Grilled Salmon');
        expect(solucion2.getDishes()[1].name).to.equal('Fajita Bowl');
        expect(solucion2.getDishes()[2].name).to.equal('Quinoa Salad');
    });
    it("Should return the correct solution for the third menu using first heuristic", () => {
        expect(solucion3.getDishes().length).to.equal(3);
        expect(solucion3.getDishes()[0].name).to.equal('Roasted Vegetable Medley');
        expect(solucion3.getDishes()[1].name).to.equal('Shrimp and Avocado Wrap');
        expect(solucion3.getDishes()[2].name).to.equal('Mango Chicken Curry');
    });

    it("Should return the correct solution for the first menu using second heuristic", () => {
        solucionador = new Solver(ALGORITHM_TYPE.SECOND);
        solucion1 = solucionador.solve(menu1);
        expect(solucion1.getDishes().length).to.equal(4);
        expect(solucion1.getDishes()[0].name).to.equal('Smoothie Bowl');
        expect(solucion1.getDishes()[1].name).to.equal('Vegetable Stir-Fry');
        expect(solucion1.getDishes()[2].name).to.equal('Grilled Chicken Breast');
        expect(solucion1.getDishes()[3].name).to.equal('Sushi');
    });
    it("Should return the correct solution for the second menu using second heuristic", () => {
        solucionador = new Solver(ALGORITHM_TYPE.SECOND);
        solucion2 = solucionador.solve(menu2);
        expect(solucion2.getDishes().length).to.equal(3);
        expect(solucion2.getDishes()[0].name).to.equal('Quinoa Salad');
        expect(solucion2.getDishes()[1].name).to.equal('Grilled Salmon');
        expect(solucion2.getDishes()[2].name).to.equal('Fajita Bowl');
    });
    it("Should return the correct solution for the third menu using second heuristic", () => {
        solucionador = new Solver(ALGORITHM_TYPE.SECOND);
        solucion3 = solucionador.solve(menu3);
        expect(solucion3.getDishes().length).to.equal(4);
        expect(solucion3.getDishes()[0].name).to.equal('Roasted Vegetable Medley');
        expect(solucion3.getDishes()[1].name).to.equal('Caprese Salad');
        expect(solucion3.getDishes()[2].name).to.equal('Greek Yogurt Parfait');
        expect(solucion3.getDishes()[3].name).to.equal('Shrimp and Avocado Wrap');
    });

    it("Should return the correct solution for the first menu using third heuristic", () => {
        solucionador = new Solver(ALGORITHM_TYPE.THIRD);
        solucion1 = solucionador.solve(menu1);
        expect(solucion1.getDishes().length).to.equal(4);
        expect(solucion1.getDishes()[0].name).to.equal('Smoothie Bowl');
        expect(solucion1.getDishes()[1].name).to.equal('Vegetable Stir-Fry');
        expect(solucion1.getDishes()[2].name).to.equal('Grilled Chicken Breast');
        expect(solucion1.getDishes()[3].name).to.equal('Sushi');
    });
    it("Should return the correct solution for the second menu using third heuristic", () => {
        solucionador = new Solver(ALGORITHM_TYPE.THIRD);
        solucion2 = solucionador.solve(menu2);
        expect(solucion2.getDishes().length).to.equal(3);
        expect(solucion2.getDishes()[0].name).to.equal('Quinoa Salad');
        expect(solucion2.getDishes()[1].name).to.equal('Grilled Salmon');
        expect(solucion2.getDishes()[2].name).to.equal('Fajita Bowl');
    });
    it("Should return the correct solution for the third menu using third heuristic", () => {
        solucionador = new Solver(ALGORITHM_TYPE.THIRD);
        solucion3 = solucionador.solve(menu3);
        expect(solucion3.getDishes().length).to.equal(4);
        expect(solucion3.getDishes()[0].name).to.equal('Roasted Vegetable Medley');
        expect(solucion3.getDishes()[1].name).to.equal('Shrimp and Avocado Wrap');
        expect(solucion3.getDishes()[2].name).to.equal('Caprese Salad');
        expect(solucion3.getDishes()[3].name).to.equal('Greek Yogurt Parfait');
    });
});
