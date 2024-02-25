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
 * Clase que representa un recurso electrónico.
 * Hereda de la clase BibliographicElementObject.
 */
export class ElectronicResource extends BibliographicElementObject {
  /**
   * Crea una instancia de ElectronicResource.
   * @param title - Título del recurso.
   * @param authors - Autores del recurso.
   * @param keywords - Palabras clave del recurso.
   * @param abstract - Resumen del recurso.
   * @param publicationDate - Fecha de publicación del recurso.
   * @param pages - Páginas del recurso.
   * @param editorial - Editorial del recurso.
   * @param URL - URL del recurso.
   * @param format - Formato del recurso.
   */
  constructor(
    title: string,
    authors: string[],
    keywords: string[],
    abstract: string,
    publicationDate: Date,
    pages: string,
    editorial: string,
    private URL: string,
    private format: string,
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
   * Obtiene la URL del recurso.
   * @returns La URL del recurso.
   */
  public getURL(): string {
    return this.URL;
  }

  /**
   * Obtiene el formato del recurso.
   * @returns El formato del recurso.
   */
  public getFormat(): string {
    return this.format;
  }

  /**
   * Obtiene la cita IEEE del recurso.
   * @returns La cita IEEE del recurso.
   */
  public getIEEECitation(): string {
    return `${this.getAuthors().join(" and ")}, "${this.getTitle()}", ${this.getPublicationDate().getFullYear()}. [Online]. Available: ${this.getURL()}.`;
  }
}
