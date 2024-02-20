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

export class ConferenceContribution extends BibliographicElementObject {
    private conference: string;

    constructor(title: string, authors: string[], keywords: string[], abstract: string, publicationDate: Date, pages: string, editorial: string, conference: string) {
        super(title, authors, keywords, abstract, publicationDate, pages, editorial);
        this.conference = conference;
    }

    public getConference(): string {
        return this.conference;
    }

    public getIEEECitation(): string {
        // J. K. Author, “Title of paper,” presented at the Abbreviated Name of Conf., City of Conf., Abbrev. State, Country, Month and day(s), year, Paper number.
        const authors = this.getAuthors().join(' and ');
        return `${authors}, "${this.getTitle()}", presented at the ${this.getConference()}, ${this.getPublicationDate().getFullYear()}.`;
    }
}