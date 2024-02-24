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
 * Clase que representa una tesis.
 * Hereda de la clase BibliographicElementObject.
 */
export class Thesis extends BibliographicElementObject {
  private tutor: string;
  private degree: string;
  private university: string;

  /**
   * Crea una instancia de la clase Thesis.
   * @param title - Título de la tesis.
   * @param authors - Autores de la tesis.
   * @param keywords - Palabras clave de la tesis.
   * @param abstract - Resumen de la tesis.
   * @param publicationDate - Fecha de publicación de la tesis.
   * @param pages - Páginas de la tesis.
   * @param editorial - Editorial de la tesis.
   * @param tutor - Tutor de la tesis.
   * @param degree - Grado de la tesis.
   * @param university - Universidad de la tesis.
   */
  constructor(
    title: string,
    authors: string[],
    keywords: string[],
    abstract: string,
    publicationDate: Date,
    pages: string,
    editorial: string,
    tutor: string,
    degree: string,
    university: string,
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
    this.tutor = tutor;
    this.degree = degree;
    this.university = university;
  }

  /**
   * Obtiene el tutor de la tesis.
   * @returns El tutor de la tesis.
   */
  public getTutor(): string {
    return this.tutor;
  }

  /**
   * Obtiene el grado de la tesis.
   * @returns El grado de la tesis.
   */
  public getDegree(): string {
    return this.degree;
  }

  /**
   * Obtiene la universidad de la tesis.
   * @returns La universidad de la tesis.
   */
  public getUniversity(): string {
    return this.university;
  }

  /**
   * Obtiene la cita IEEE de la tesis.
   * @returns La cita IEEE de la tesis.
   */
  public getIEEECitation(): string {
    // Formato: J. K. Autor, "Título de la tesis," Tesis de grado, Universidad, Año.
    const authors = this.getAuthors().join(" and ");
    return `${authors}, "${this.getTitle()}", ${this.getDegree()} thesis, ${this.getUniversity()}, ${this.getPublicationDate().getFullYear()}.`;
  }
}
