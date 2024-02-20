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

export class BibliographicManager {
    private bibliographicElements: BibliographicElementObject[] = [];

    public addElement(element: BibliographicElementObject): void {
        this.bibliographicElements.push(element);
    }

    public getElements(): BibliographicElementObject[] {
        return this.bibliographicElements;
    }

    public getElementsByTitle(title: string): BibliographicElementObject[] {
        return this.bibliographicElements.filter((element: BibliographicElementObject) => element.getTitle() === title);
    }

    public getElementsByAuthor(author: string): BibliographicElementObject[] {
        return this.bibliographicElements.filter((element: BibliographicElementObject) => element.getAuthors().includes(author));
    }

    public getElementsByKeyword(keyword: string): BibliographicElementObject[] {
        return this.bibliographicElements.filter((element: BibliographicElementObject) => element.getKeywords().includes(keyword));
    }

    public getElementsByEditorial(editorial: string): BibliographicElementObject[] {
        return this.bibliographicElements.filter((element: BibliographicElementObject) => element.getEditorial() === editorial);
    }

    public getElementsByPublicationDate(publicationDate: Date): BibliographicElementObject[] {
        return this.bibliographicElements.filter((element: BibliographicElementObject) => element.getPublicationDate() === publicationDate);
    }

    public getElementsByPages(pages: string): BibliographicElementObject[] {
        return this.bibliographicElements.filter((element: BibliographicElementObject) => element.getPages() === pages);
    }

    displayElements(): void {
        console.table(this.bibliographicElements);
    }
}