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

import { BibliographicElement } from "./BibliographicElement";

/**
 * Clase abstracta que representa un elemento bibliográfico.
 * Implementa la interfaz BibliographicElement.
 */
export abstract class BibliographicElementObject
  implements BibliographicElement
{
  /**
   * Crea una instancia de BibliographicElementObject.
   * @param title - El título del elemento bibliográfico.
   * @param authors - Los autores del elemento bibliográfico.
   * @param keywords - Las palabras clave del elemento bibliográfico.
   * @param abstract - El resumen del elemento bibliográfico.
   * @param publicationDate - La fecha de publicación del elemento bibliográfico.
   * @param pages - Las páginas del elemento bibliográfico.
   * @param editorial - La editorial del elemento bibliográfico.
   */
  constructor(
    private title: string,
    private authors: string[],
    private keywords: string[],
    private abstract: string,
    private publicationDate: Date,
    private pages: string,
    private editorial: string,
  ) {}

  /**
   * Obtiene el título del elemento bibliográfico.
   * @returns El título del elemento bibliográfico.
   */
  public getTitle(): string {
    return this.title;
  }

  /**
   * Obtiene los autores del elemento bibliográfico.
   * @returns Los autores del elemento bibliográfico.
   */
  public getAuthors(): string[] {
    return this.authors;
  }

  /**
   * Obtiene las palabras clave del elemento bibliográfico.
   * @returns Las palabras clave del elemento bibliográfico.
   */
  public getKeywords(): string[] {
    return this.keywords;
  }

  /**
   * Obtiene el resumen del elemento bibliográfico.
   * @returns El resumen del elemento bibliográfico.
   */
  public getAbstract(): string {
    return this.abstract;
  }

  /**
   * Obtiene la fecha de publicación del elemento bibliográfico.
   * @returns La fecha de publicación del elemento bibliográfico.
   */
  public getPublicationDate(): Date {
    return this.publicationDate;
  }

  /**
   * Obtiene las páginas del elemento bibliográfico.
   * @returns Las páginas del elemento bibliográfico.
   */
  public getPages(): string {
    return this.pages;
  }

  /**
   * Obtiene la editorial del elemento bibliográfico.
   * @returns La editorial del elemento bibliográfico.
   */
  public getEditorial(): string {
    return this.editorial;
  }

  /**
   * Obtiene la cita IEEE del elemento bibliográfico.
   * @returns La cita IEEE del elemento bibliográfico.
   */
  abstract getIEEECitation(): string;
}
