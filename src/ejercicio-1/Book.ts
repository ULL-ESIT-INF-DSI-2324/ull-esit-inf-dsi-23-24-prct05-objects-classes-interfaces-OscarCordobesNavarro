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

import { BibliographicElementObject } from "./BibliographicElementObject";

export class Book extends BibliographicElementObject {
    private genre: string;
    private language: string;
    private ISBN: string;
    private city: string;
    private country: string;

    constructor(title: string, authors: string[], keywords: string[], abstract: string, publicationDate: Date, pages: string, editorial: string, genre: string, language: string, ISBN: string, city: string, country: string) {
        super(title, authors, keywords, abstract, publicationDate, pages, editorial);
        this.genre = genre;
        this.language = language;
        this.ISBN = ISBN;
        this.city = city;
        this.country = country;
    }

    public getGenre(): string {
        return this.genre;
    }

    public getLanguage(): string {
        return this.language;
    }

    public getISBN(): string {
        return this.ISBN;
    }

    public getCity(): string {
        return this.city;
    }

    public getCountry(): string {
        return this.country;
    }

    public getIEEECitation(): string {
        // Format: [1] A. Author, "Title of chapter in the book," in Title of His Published Book, xth ed. City of Publisher, (only U.S. State), Country: Publisher, year, ch. x, sec. x, pp. xxx-xxx.
        const authors = this.getAuthors().join(' and ');
        return `${authors}, "${this.getTitle()}, ${this.getCity()}, ${this.getCountry()}: ${this.getEditorial()}, ${this.getPublicationDate().getFullYear()}, pp. ${this.getPages()}.`;
    }

}