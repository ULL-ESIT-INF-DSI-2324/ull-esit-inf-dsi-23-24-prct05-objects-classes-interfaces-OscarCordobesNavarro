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
    private university: string;

    constructor(title: string, authors: string[], keywords: string[], abstract: string, publicationDate: Date, pages: string, editorial: string, tutor: string, degree: string, university: string) {
        super(title, authors, keywords, abstract, publicationDate, pages, editorial);
        this.tutor = tutor;
        this.degree = degree;
        this.university = university;
    }

    public getTutor(): string {
        return this.tutor;
    }

    public getDegree(): string {
        return this.degree;
    }

    public getUniversity(): string {
        return this.university;
    }

    public getIEEECitation(): string {
        // Format J. K. Author, “Title of thesis,” M.S. thesis, Abbrev. Dept., Abbrev. Univ., City of Univ., Abbrev. State, year.
        const authors = this.getAuthors().join(' and ');
        return `${authors}, "${this.getTitle()}", ${this.getDegree()} thesis, ${this.getUniversity()}, ${this.getPublicationDate().getFullYear()}.`;
    }
}