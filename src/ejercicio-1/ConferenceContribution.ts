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
 * Clase que representa una contribución a una conferencia.
 * Hereda de la clase BibliographicElementObject.
 */
export class ConferenceContribution extends BibliographicElementObject {
  private conference: string;

  /**
   * Crea una instancia de ConferenceContribution.
   * @param title - Título de la contribución.
   * @param authors - Autores de la contribución.
   * @param keywords - Palabras clave de la contribución.
   * @param abstract - Resumen de la contribución.
   * @param publicationDate - Fecha de publicación de la contribución.
   * @param pages - Páginas de la contribución.
   * @param editorial - Editorial de la contribución.
   * @param conference - Conferencia de la contribución.
   */
  constructor(
    title: string,
    authors: string[],
    keywords: string[],
    abstract: string,
    publicationDate: Date,
    pages: string,
    editorial: string,
    conference: string,
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
    this.conference = conference;
  }

  /**
   * Obtiene la conferencia de la contribución.
   * @returns La conferencia de la contribución.
   */
  public getConference(): string {
    return this.conference;
  }

  /**
   * Obtiene la cita en formato IEEE de la contribución.
   * @returns La cita en formato IEEE de la contribución.
   */
  public getIEEECitation(): string {
    // J. K. Author, “Title of paper,” presented at the Abbreviated Name of Conf., City of Conf., Abbrev. State, Country, Month and day(s), year, Paper number.
    const authors = this.getAuthors().join(" and ");
    return `${authors}, "${this.getTitle()}", presentado en la ${this.getConference()}, ${this.getPublicationDate().getFullYear()}.`;
  }
}
