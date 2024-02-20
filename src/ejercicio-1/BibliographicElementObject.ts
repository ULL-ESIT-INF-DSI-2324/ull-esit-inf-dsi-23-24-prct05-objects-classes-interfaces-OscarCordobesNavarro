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

import { BibliographicElement } from './BibliographicElement';

export abstract class BibliographicElementObject implements BibliographicElement {
    private title: string;
    private authors: string[];
    private keywords: string[];
    private abstract: string;
    private publicationDate: Date;
    private pages: string;
    private editorial: string;
    
    constructor(title: string, authors: string[], keywords: string[], abstract: string, publicationDate: Date, pages: string, editorial: string) {
        this.title = title;
        this.authors = authors;
        this.keywords = keywords;
        this.abstract = abstract;
        this.publicationDate = publicationDate;
        this.pages = pages;
        this.editorial = editorial;
    }
    
    public getTitle(): string {
        return this.title;
    }
    
    public getAuthors(): string[] {
        return this.authors;
    }
    
    public getKeywords(): string[] {
        return this.keywords;
    }
    
    public getAbstract(): string {
        return this.abstract;
    }
    
    public getPublicationDate(): Date {
        return this.publicationDate;
    }
    
    public getPages(): string {
        return this.pages;
    }
    
    public getEditorial(): string {
        return this.editorial;
    }

}