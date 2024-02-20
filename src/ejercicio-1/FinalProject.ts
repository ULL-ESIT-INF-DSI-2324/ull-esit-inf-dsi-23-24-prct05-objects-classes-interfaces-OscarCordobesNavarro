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

export class FinalProject extends BibliographicElementObject {
    private tutor: string;
    private qualification: number;
    private university: string;

    constructor(title: string, authors: string[], keywords: string[], abstract: string, publicationDate: Date, pages: string, editorial: string, tutor: string, qualification: number, university: string) {
        super(title, authors, keywords, abstract, publicationDate, pages, editorial);
        this.tutor = tutor;
        this.qualification = qualification;
        this.university = university;
    }

    public getTutor(): string {
        return this.tutor;
    }

    public getQualification(): number {
        return this.qualification;
    }

    public getUniversity(): string {
        return this.university;
    }

    public getIEEECitation(): string {
        return `${this.getAuthors().join(' and ')}, "${this.getTitle()}", ${this.getUniversity()}, ${this.getPublicationDate().getFullYear()}.`;
    }
}
