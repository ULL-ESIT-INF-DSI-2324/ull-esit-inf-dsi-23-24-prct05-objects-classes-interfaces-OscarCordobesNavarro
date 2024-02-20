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

export class JournalArticle extends BibliographicElementObject {
    private journal: string;
    private country: string;

    constructor(title: string, authors: string[], keywords: string[], abstract: string, publicationDate: Date, pages: string, editorial: string, journal: string, country: string) {
        super(title, authors, keywords, abstract, publicationDate, pages, editorial);
        this.journal = journal;
        this.country = country;
    }

    public getJournal(): string {
        return this.journal;
    }

    public getCountry(): string {
        return this.country;
    }

    public getIEEECitation(): string {
        // J. K. Author, “Title of paper,” presented at the Abbreviated Name of Conf., City of Conf., Abbrev. State, Country, Month and day(s), year, Paper number.
        const authors = this.getAuthors().join(' and ');
        return `${authors}, "${this.getTitle()}", presented at the ${this.getJournal()}, ${this.getCountry()}, ${this.getPublicationDate().getFullYear()}.`;
    }
}