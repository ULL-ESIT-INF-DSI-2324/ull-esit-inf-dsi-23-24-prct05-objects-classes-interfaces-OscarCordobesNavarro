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

export class ElectronicResource extends BibliographicElementObject {
    private URL: string;
    private format: string;

    constructor(title: string, authors: string[], keywords: string[], abstract: string, publicationDate: Date, pages: string, editorial: string, URL: string, format: string) {
        super(title, authors, keywords, abstract, publicationDate, pages, editorial);
        this.URL = URL;
        this.format = format;
    }

    public getURL(): string {
        return this.URL;
    }

    public getFormat(): string {
        return this.format;
    }

    public getIEEECitation(): string {
        return `${this.getAuthors().join(' and ')}, "${this.getTitle()}", ${this.getPublicationDate().getFullYear()}. [Online]. Available: ${this.getURL()}`;
    }

}