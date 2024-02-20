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

    constructor(title: string, authors: string[], keywords: string[], abstract: string, publicationDate: Date, pages: string, editorial: string, journal: string) {
        super(title, authors, keywords, abstract, publicationDate, pages, editorial);
        this.journal = journal;
    }

    public getJournal(): string {
        return this.journal;
    }
}