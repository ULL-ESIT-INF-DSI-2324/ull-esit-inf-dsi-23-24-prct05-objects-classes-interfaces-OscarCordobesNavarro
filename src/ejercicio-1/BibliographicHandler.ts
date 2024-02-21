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
import { BibliographicSearch } from './BibliographicSearch';

export class BibliographicManager implements BibliographicSearch {
    private bibliographicElements: BibliographicElementObject[] = [];

    constructor(elements?: BibliographicElementObject[]) {
        if (elements) {
            this.bibliographicElements = elements;
        }
    }

    public addElement(element: BibliographicElementObject): void {
        this.bibliographicElements.push(element);
    }

    public removeElement(title: string): void {
        // Buscar el elemento y eliminarlo por su título
        this.bibliographicElements = this.bibliographicElements.filter((element) => element.getTitle() !== title);
    }

    public searchByKeyword(keyword: string, IEEE?: boolean): void {
        const elements = this.bibliographicElements.filter((element) => element.getKeywords().includes(keyword));
        if (IEEE) {
            this.IEEEFormat(elements);
        } else {
            console.table(elements);
        }
    }

    public filterByTitle(title: string, IEEE?: boolean): void {
        const elements = this.bibliographicElements.filter((element) => element.getTitle() === title);
        if (IEEE) {
            this.IEEEFormat(elements);
        } else {
            console.table(elements);
        }
    }

    public filterByAuthors(authors: string[], IEEE?: boolean): void {
        const elements = this.bibliographicElements.filter((element) => element.getAuthors().some((author) => authors.includes(author)));
        if (IEEE) {
            this.IEEEFormat(elements);
        } else {
            console.table(elements);
        }
    }

    public filterByPublicationDate(date: Date, IEEE?: boolean): void {
        const elements = this.bibliographicElements.filter((element) => element.getPublicationDate() === date);
        if (IEEE) {
            this.IEEEFormat(elements);
        } else {
            console.table(elements);
        }
    }

    public filterByEditorial(editorial: string, IEEE?: boolean): void {
        const elements = this.bibliographicElements.filter((element) => element.getEditorial() === editorial);
        if (IEEE) {
            this.IEEEFormat(elements);
        } else {
            console.table(elements);
        }
    }

    private IEEEFormat(element: BibliographicElementObject[]): void  {
        const elementsIEEE = element.map((element) => {
            return {
                IEEE_Format: element.getIEEECitation()
            };
        });
        console.table(elementsIEEE);
    }

    displayElements(): void {
        console.table(this.bibliographicElements);
    }
}