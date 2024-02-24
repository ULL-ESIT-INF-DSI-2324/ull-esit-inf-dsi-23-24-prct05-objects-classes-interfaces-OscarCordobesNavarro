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
import { chessBoard, checkAttack } from "../src/modificacion-1/ejercicio-1";

describe("checkAttack function test", () => {
  it("checkAttack(chessBoard) for queens on [0,2] and [3,4] return value false", () => {
    chessBoard.reset();
    chessBoard.setQueens([0, 2], [3, 4]);
    expect(checkAttack(chessBoard.board)).to.be.false;
  });
  it("checkAttack(chessBoard) for queens on [0,0] and [7,7] return value true", () => {
    chessBoard.reset();
    chessBoard.setQueens([0, 0], [7, 7]);
    expect(checkAttack(chessBoard.board)).to.be.true;
  });
  it("checkAttack(chessBoard) for queens on [0,0] and [0,0] return value undefined", () => {
    chessBoard.reset();
    chessBoard.setQueens([0, 0], [0, 0]);
    expect(checkAttack(chessBoard.board)).to.be.undefined;
  });
  it("checkAttack(chessBoard) for queens on [0,0] return value undefined", () => {
    chessBoard.reset();
    chessBoard.setQueens([0, 0]);
    expect(checkAttack(chessBoard.board)).to.be.undefined;
  });
});
