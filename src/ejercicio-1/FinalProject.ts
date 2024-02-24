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
 * Clase que representa un proyecto final.
 * Hereda de la clase BibliographicElementObject.
 */
export class FinalProject extends BibliographicElementObject {
  private tutor: string;
  private qualification: number;
  private university: string;

  /**
   * Crea una instancia de FinalProject.
   * @param title - Título del proyecto final.
   * @param authors - Autores del proyecto final.
   * @param keywords - Palabras clave del proyecto final.
   * @param abstract - Resumen del proyecto final.
   * @param publicationDate - Fecha de publicación del proyecto final.
   * @param pages - Páginas del proyecto final.
   * @param editorial - Editorial del proyecto final.
   * @param tutor - Tutor del proyecto final.
   * @param qualification - Calificación del proyecto final.
   * @param university - Universidad del proyecto final.
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
    qualification: number,
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
    this.qualification = qualification;
    this.university = university;
  }

  /**
   * Obtiene el tutor del proyecto final.
   * @returns El tutor del proyecto final.
   */
  public getTutor(): string {
    return this.tutor;
  }

  /**
   * Obtiene la calificación del proyecto final.
   * @returns La calificación del proyecto final.
   */
  public getQualification(): number {
    return this.qualification;
  }

  /**
   * Obtiene la universidad del proyecto final.
   * @returns La universidad del proyecto final.
   */
  public getUniversity(): string {
    return this.university;
  }

  /**
   * Obtiene la cita IEEE del proyecto final.
   * @returns La cita IEEE del proyecto final.
   */
  public getIEEECitation(): string {
    return `${this.getAuthors().join(" and ")}, "${this.getTitle()}", ${this.getUniversity()}, ${this.getPublicationDate().getFullYear()}.`;
  }
}
