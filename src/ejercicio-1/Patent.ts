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

export class Patent extends BibliographicElementObject {
    private patentNumber: number;
    private country: string;
    private expirationDate: Date;

    constructor(title: string, authors: string[], keywords: string[], abstract: string, publicationDate: Date, pages: string, editorial: string, patentNumber: number, country: string, expirationDate: Date) {
        super(title, authors, keywords, abstract, publicationDate, pages, editorial);
        this.patentNumber = patentNumber;
        this.country = country;
        this.expirationDate = expirationDate;
    }

    public getPatentNumber(): number {
        return this.patentNumber;
    }

    public getCountry(): string {
        return this.country;
    }

    public getExpirationDate(): Date {
        return this.expirationDate;
    }
}