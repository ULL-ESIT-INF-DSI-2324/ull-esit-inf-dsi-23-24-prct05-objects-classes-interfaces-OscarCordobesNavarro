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

/**
 * Clase que representa una patente.
 * Hereda de la clase BibliographicElementObject.
 */
export class Patent extends BibliographicElementObject {
  /**
   * Crea una instancia de la clase Patent.
   * @param title - Título de la patente.
   * @param authors - Autores de la patente.
   * @param keywords - Palabras clave de la patente.
   * @param abstract - Resumen de la patente.
   * @param publicationDate - Fecha de publicación de la patente.
   * @param pages - Páginas de la patente.
   * @param editorial - Editorial de la patente.
   * @param patentNumber - Número de la patente.
   * @param country - País de la patente.
   * @param expirationDate - Fecha de expiración de la patente.
   */
  constructor(
    title: string,
    authors: string[],
    keywords: string[],
    abstract: string,
    publicationDate: Date,
    pages: string,
    editorial: string,
    private patentNumber: number,
    private country: string,
    private expirationDate: Date,
  ) {
    super(
      title,
      authors,
      keywords,
      abstract,
      publicationDate,
      pages,
      editorial,
    );
  }

  /**
   * Obtiene el número de la patente.
   * @returns El número de la patente.
   */
  public getPatentNumber(): number {
    return this.patentNumber;
  }

  /**
   * Obtiene el país de la patente.
   * @returns El país de la patente.
   */
  public getCountry(): string {
    return this.country;
  }

  /**
   * Obtiene la fecha de expiración de la patente.
   * @returns La fecha de expiración de la patente.
   */
  public getExpirationDate(): Date {
    return this.expirationDate;
  }

  /**
   * Obtiene la cita IEEE de la patente.
   * @returns La cita IEEE de la patente.
   */
  public getIEEECitation(): string {
    // J. K. Author, “Title of patent,” Country Patent xxx, Abbrev. Month, day, year.
    const authors = this.getAuthors().join(" and ");
    return `${authors}, "${this.getTitle()}", ${this.getCountry()} Patent ${this.getPatentNumber()}, ${this.getPublicationDate().getMonth()}, ${this.getPublicationDate().getDay()}, ${this.getPublicationDate().getFullYear()}.`;
  }
}
