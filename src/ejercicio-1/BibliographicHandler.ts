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

/**
 * Clase que representa un gestor bibliográfico.
 * Implementa la interfaz BibliographicSearch.
 */
export class BibliographicManager implements BibliographicSearch {
    
    /**
     * Elementos bibliográficos almacenados en el manejador bibliográfico.
     */
    private bibliographicElements: BibliographicElementObject[] = [];

    /**
     * Constructor de la clase BibliographicManager.
     * @param elements - Elementos bibliográficos iniciales (opcional).
     */
    constructor(elements?: BibliographicElementObject[]) {
        if (elements) {
            this.bibliographicElements = elements;
        }
    }

    /**
     * Añade un elemento bibliográfico al gestor.
     * @param element - Elemento bibliográfico a añadir.
     */
    public addElement(element: BibliographicElementObject): void {
        this.bibliographicElements.push(element);
    }

    /**
     * Elimina un elemento bibliográfico del gestor por su título.
     * @param title - Título del elemento bibliográfico a eliminar.
     */
    public removeElement(title: string): void {
        // Buscar el elemento y eliminarlo por su título
        this.bibliographicElements = this.bibliographicElements.filter((element) => element.getTitle() !== title);
    }

    /**
     * Realiza una búsqueda de elementos bibliográficos por una palabra clave.
     * @param keyword - Palabra clave a buscar.
     * @param IEEE - Indica si se debe aplicar el formato IEEE (opcional).
     */
    public searchByKeyword(keyword: string, IEEE?: boolean): void {
        const elements = this.bibliographicElements.filter((element) => element.getKeywords().includes(keyword));
        if (IEEE) {
            this.IEEEFormat(elements);
        } else {
            console.table(elements);
        }
    }

    /**
     * Filtra los elementos bibliográficos por título.
     * @param title - Título a filtrar.
     * @param IEEE - Indica si se debe aplicar el formato IEEE (opcional).
     */
    public filterByTitle(title: string, IEEE?: boolean): void {
        const elements = this.bibliographicElements.filter((element) => element.getTitle() === title);
        if (IEEE) {
            this.IEEEFormat(elements);
        } else {
            console.table(elements);
        }
    }

    /**
     * Filtra los elementos bibliográficos por autores.
     * @param authors - Autores a filtrar.
     * @param IEEE - Indica si se debe aplicar el formato IEEE (opcional).
     */
    public filterByAuthors(authors: string[], IEEE?: boolean): void {
        const elements = this.bibliographicElements.filter((element) => element.getAuthors().some((author) => authors.includes(author)));
        if (IEEE) {
            this.IEEEFormat(elements);
        } else {
            console.table(elements);
        }
    }

    /**
     * Filtra los elementos bibliográficos por fecha de publicación.
     * @param date - Fecha de publicación a filtrar.
     * @param IEEE - Indica si se debe aplicar el formato IEEE (opcional).
     */
    public filterByPublicationDate(date: Date, IEEE?: boolean): void {
        const elements = this.bibliographicElements.filter((element) => element.getPublicationDate() === date);
        if (IEEE) {
            this.IEEEFormat(elements);
        } else {
            console.table(elements);
        }
    }

    /**
     * Filtra los elementos bibliográficos por editorial.
     * @param editorial - Editorial a filtrar.
     * @param IEEE - Indica si se debe aplicar el formato IEEE (opcional).
     */
    public filterByEditorial(editorial: string, IEEE?: boolean): void {
        const elements = this.bibliographicElements.filter((element) => element.getEditorial() === editorial);
        if (IEEE) {
            this.IEEEFormat(elements);
        } else {
            console.table(elements);
        }
    }

    /**
     * Aplica el formato IEEE a los elementos bibliográficos y los muestra en la consola.
     * @param element - Elementos bibliográficos a formatear.
     */
    private IEEEFormat(element: BibliographicElementObject[]): void  {
        const elementsIEEE = element.map((element) => {
            return {
                IEEE_Format: element.getIEEECitation()
            };
        });
        console.table(elementsIEEE);
    }

    /**
     * Muestra todos los elementos bibliográficos en la consola.
     */
    displayElements(): void {
        console.table(this.bibliographicElements);
    }
}