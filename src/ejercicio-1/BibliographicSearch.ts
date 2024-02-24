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
 * Interfaz que define los métodos para realizar búsquedas bibliográficas.
 */
export interface BibliographicSearch {
  /**
   * Realiza una búsqueda por palabra clave en la bibliografía.
   * @param keyword - Palabra clave a buscar.
   * @param IEEE - (Opcional) Indica si se debe utilizar el formato IEEE para la búsqueda.
   */
  searchByKeyword(keyword: string, IEEE?: boolean): void;

  /**
   * Filtra la bibliografía por título.
   * @param title - Título a filtrar.
   * @param IEEE - (Opcional) Indica si se debe utilizar el formato IEEE para el filtrado.
   */
  filterByTitle(title: string, IEEE?: boolean): void;

  /**
   * Filtra la bibliografía por autores.
   * @param authors - Autores a filtrar.
   * @param IEEE - (Opcional) Indica si se debe utilizar el formato IEEE para el filtrado.
   */
  filterByAuthors(authors: string[], IEEE?: boolean): void;

  /**
   * Filtra la bibliografía por fecha de publicación.
   * @param date - Fecha de publicación a filtrar.
   * @param IEEE - (Opcional) Indica si se debe utilizar el formato IEEE para el filtrado.
   */
  filterByPublicationDate(date: Date, IEEE?: boolean): void;

  /**
   * Filtra la bibliografía por editorial.
   * @param editorial - Editorial a filtrar.
   * @param IEEE - (Opcional) Indica si se debe utilizar el formato IEEE para el filtrado.
   */
  filterByEditorial(editorial: string, IEEE?: boolean): void;
}
