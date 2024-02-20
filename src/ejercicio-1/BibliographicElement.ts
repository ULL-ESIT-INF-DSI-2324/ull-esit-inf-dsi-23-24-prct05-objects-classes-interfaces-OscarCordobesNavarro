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

export interface BibliographicElement { 
    getTitle(): string;
    getAuthors(): string[];
    getKeywords(): string[];
    getAbstract(): string;
    getPublicationDate(): Date;
    getPages(): string;
    getEditorial(): string;
}

