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

export interface BibliographicSearch {
    searchByKeyword(keyword: string, IEEE?: boolean): void;
    filterByTitle(title: string, IEEE?: boolean): void;
    filterByAuthors(authors: string[], IEEE?: boolean): void;
    filterByPublicationDate(date: Date, IEEE?: boolean): void;
    filterByEditorial(editorial: string, IEEE?: boolean): void;
}

// Podría crear una interfaz para cada tipo de busqueda y tener esta clase que extienda de todas ellas?
// Y esa sería la interfaz que implementaría BibliographicManager?