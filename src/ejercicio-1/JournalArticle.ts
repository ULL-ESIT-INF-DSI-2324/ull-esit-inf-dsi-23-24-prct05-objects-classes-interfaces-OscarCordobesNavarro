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

/**
 * Clase que representa un artículo de revista.
 * Hereda de la clase BibliographicElementObject.
 */
export class JournalArticle extends BibliographicElementObject {
    private journal: string;
    private country: string;

    /**
     * Crea una instancia de JournalArticle.
     * @param title - Título del artículo.
     * @param authors - Autores del artículo.
     * @param keywords - Palabras clave del artículo.
     * @param abstract - Resumen del artículo.
     * @param publicationDate - Fecha de publicación del artículo.
     * @param pages - Páginas del artículo.
     * @param editorial - Editorial del artículo.
     * @param journal - Revista del artículo.
     * @param country - País de publicación del artículo.
     */
    constructor(title: string, authors: string[], keywords: string[], abstract: string, publicationDate: Date, pages: string, editorial: string, journal: string, country: string) {
        super(title, authors, keywords, abstract, publicationDate, pages, editorial);
        this.journal = journal;
        this.country = country;
    }

    /**
     * Obtiene la revista del artículo.
     * @returns La revista del artículo.
     */
    public getJournal(): string {
        return this.journal;
    }

    /**
     * Obtiene el país de publicación del artículo.
     * @returns El país de publicación del artículo.
     */
    public getCountry(): string {
        return this.country;
    }

    /**
     * Obtiene la cita IEEE del artículo.
     * @returns La cita IEEE del artículo.
     */
    public getIEEECitation(): string {
        // J. K. Author, “Title of paper,” presented at the Abbreviated Name of Conf., City of Conf., Abbrev. State, Country, Month and day(s), year, Paper number.
        const authors = this.getAuthors().join(' and ');
        return `${authors}, "${this.getTitle()}", presented at the ${this.getJournal()}, ${this.getCountry()}, ${this.getPublicationDate().getFullYear()}.`;
    }
}