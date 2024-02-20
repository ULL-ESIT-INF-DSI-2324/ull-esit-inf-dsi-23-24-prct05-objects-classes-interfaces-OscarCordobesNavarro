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

import { BibliographicElementObject } from './BibliographicElementObject';

export class Thesis extends BibliographicElementObject {
    private tutor: string;
    private degree: string;

    constructor(title: string, authors: string[], keywords: string[], abstract: string, publicationDate: Date, pages: string, editorial: string, tutor: string, degree: string) {
        super(title, authors, keywords, abstract, publicationDate, pages, editorial);
        this.tutor = tutor;
        this.degree = degree;
    }

    public getTutor(): string {
        return this.tutor;
    }

    public getDegree(): string {
        return this.degree;
    }
}