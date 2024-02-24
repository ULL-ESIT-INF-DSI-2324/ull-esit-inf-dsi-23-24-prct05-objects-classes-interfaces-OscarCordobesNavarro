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
 * Clase que representa un libro.
 */
export class Book extends BibliographicElementObject {
  private genre: string;
  private language: string;
  private ISBN: string;
  private city: string;
  private country: string;

  /**
   * Crea una instancia de la clase Book.
   * @param title - Título del libro.
   * @param authors - Autores del libro.
   * @param keywords - Palabras clave del libro.
   * @param abstract - Resumen del libro.
   * @param publicationDate - Fecha de publicación del libro.
   * @param pages - Número de páginas del libro.
   * @param editorial - Editorial del libro.
   * @param genre - Género del libro.
   * @param language - Idioma del libro.
   * @param ISBN - ISBN del libro.
   * @param city - Ciudad de publicación del libro.
   * @param country - País de publicación del libro.
   */
  constructor(
    title: string,
    authors: string[],
    keywords: string[],
    abstract: string,
    publicationDate: Date,
    pages: string,
    editorial: string,
    genre: string,
    language: string,
    ISBN: string,
    city: string,
    country: string,
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
    this.genre = genre;
    this.language = language;
    this.ISBN = ISBN;
    this.city = city;
    this.country = country;
  }

  /**
   * Obtiene el género del libro.
   * @returns El género del libro.
   */
  public getGenre(): string {
    return this.genre;
  }

  /**
   * Obtiene el idioma del libro.
   * @returns El idioma del libro.
   */
  public getLanguage(): string {
    return this.language;
  }

  /**
   * Obtiene el ISBN del libro.
   * @returns El ISBN del libro.
   */
  public getISBN(): string {
    return this.ISBN;
  }

  /**
   * Obtiene la ciudad de publicación del libro.
   * @returns La ciudad de publicación del libro.
   */
  public getCity(): string {
    return this.city;
  }

  /**
   * Obtiene el país de publicación del libro.
   * @returns El país de publicación del libro.
   */
  public getCountry(): string {
    return this.country;
  }

  /**
   * Obtiene la cita IEEE del libro.
   * @returns La cita IEEE del libro.
   */
  public getIEEECitation(): string {
    // Format: [1] A. Author, "Title of chapter in the book," in Title of His Published Book, xth ed. City of Publisher, (only U.S. State), Country: Publisher, year, ch. x, sec. x, pp. xxx-xxx.
    const authors = this.getAuthors().join(" and ");
    return `${authors}, "${this.getTitle()}", ${this.getCity()}, ${this.getCountry()}: ${this.getEditorial()}, ${this.getPublicationDate().getFullYear()}, pp. ${this.getPages()}.`;
  }
}
