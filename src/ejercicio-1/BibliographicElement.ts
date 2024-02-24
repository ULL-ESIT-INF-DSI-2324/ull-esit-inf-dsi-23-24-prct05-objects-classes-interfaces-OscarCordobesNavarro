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

/**
 * Interfaz que representa un elemento bibliográfico.
 */
export interface BibliographicElement {
  /**
   * Obtiene el título del elemento bibliográfico.
   * @returns El título del elemento bibliográfico.
   */
  getTitle(): string;

  /**
   * Obtiene los autores del elemento bibliográfico.
   * @returns Los autores del elemento bibliográfico.
   */
  getAuthors(): string[];

  /**
   * Obtiene las palabras clave del elemento bibliográfico.
   * @returns Las palabras clave del elemento bibliográfico.
   */
  getKeywords(): string[];

  /**
   * Obtiene el resumen del elemento bibliográfico.
   * @returns El resumen del elemento bibliográfico.
   */
  getAbstract(): string;

  /**
   * Obtiene la fecha de publicación del elemento bibliográfico.
   * @returns La fecha de publicación del elemento bibliográfico.
   */
  getPublicationDate(): Date;

  /**
   * Obtiene las páginas del elemento bibliográfico.
   * @returns Las páginas del elemento bibliográfico.
   */
  getPages(): string;

  /**
   * Obtiene la editorial del elemento bibliográfico.
   * @returns La editorial del elemento bibliográfico.
   */
  getEditorial(): string;

  /**
   * Obtiene la cita en formato IEEE del elemento bibliográfico.
   * @returns La cita en formato IEEE del elemento bibliográfico.
   */
  getIEEECitation(): string;
}
