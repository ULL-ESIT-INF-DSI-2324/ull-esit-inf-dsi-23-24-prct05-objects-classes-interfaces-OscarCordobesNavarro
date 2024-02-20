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

import { BibliographicManager } from "./BibliographicHandler";
import { BibliographicElementObject } from "./BibliographicElementObject";
import { Book } from "./Book";
import { ConferenceContribution } from "./ConferenceContribution";
import { JournalArticle } from "./JournalArticle";
import { Thesis } from "./Thesis";
import { ElectronicResource } from "./ElectronicResource";
import { FinalProject } from "./FinalProject";
import { Patent } from "./Patent";

const bibliographicManager = new BibliographicManager();

const book1 = new Book(
  "Book1",
  ["Author1", "Author2"],
  ["Keyword1", "Keyword2"],
  "Abstract1",
  new Date("2022-02-02"),
  "100",
  "Editorial1",
  "Terror",
  "Español",
  "ISBN1",
  "City1",
    "Country1",
);
const book2 = new Book(
  "Book2",
  ["Author3", "Author4"],
  ["Keyword3", "Keyword4"],
  "Abstract2",
  new Date("2022-03-03"),
  "200",
  "Editorial2",
  "Mystery",
  "English",
  "ISBN2",
    "City2",
    "Country2",
);
const book3 = new Book(
  "Book3",
  ["Author5", "Author6"],
  ["Keyword5", "Keyword6"],
  "Abstract3",
  new Date("2022-04-04"),
  "300",
  "Editorial3",
  "Romance",
  "Spanish",
  "ISBN3",
    "City3",
    "Country3",
);

const conferenceContribution1 = new ConferenceContribution(
  "ConferenceContribution1",
  ["Author7", "Author8"],
  ["Keyword7", "Keyword8"],
  "Abstract4",
  new Date("2022-05-05"),
  "400",
  "Editorial4",
  "Conference1",
);
const conferenceContribution2 = new ConferenceContribution(
  "ConferenceContribution2",
  ["Author9", "Author10"],
  ["Keyword9", "Keyword10"],
  "Abstract5",
  new Date("2022-06-06"),
  "500",
  "Editorial5",
  "Conference2",
);
const conferenceContribution3 = new ConferenceContribution(
  "ConferenceContribution3",
  ["Author11", "Author12"],
  ["Keyword11", "Keyword12"],
  "Abstract6",
  new Date("2022-07-07"),
  "600",
  "Editorial6",
  "Conference3",
);

const journalArticle1 = new JournalArticle(
  "JournalArticle1",
  ["Author13", "Author14"],
  ["Keyword13", "Keyword14"],
  "Abstract7",
  new Date("2022-08-08"),
  "700",
  "Editorial7",
  "Journal1",
    "Country1",
);
const journalArticle2 = new JournalArticle(
  "JournalArticle2",
  ["Author15", "Author16"],
  ["Keyword15", "Keyword16"],
  "Abstract8",
  new Date("2022-09-09"),
  "800",
  "Editorial8",
  "Journal2",
    "Country2",
);
const journalArticle3 = new JournalArticle(
  "JournalArticle3",
  ["Author17", "Author18"],
  ["Keyword17", "Keyword18"],
  "Abstract9",
  new Date("2022-10-10"),
  "900",
  "Editorial9",
  "Journal3",
  "Country3",
);

const thesis1 = new Thesis(
  "Thesis1",
  ["Author19", "Author20"],
  ["Keyword19", "Keyword20"],
  "Abstract10",
  new Date("2022-11-11"),
  "1000",
  "Editorial10",
  "Tutor1",
  "Degree1",
    "University1",
);
const thesis2 = new Thesis(
  "Thesis2",
  ["Author21", "Author22"],
  ["Keyword21", "Keyword22"],
  "Abstract11",
  new Date("2022-12-12"),
  "1100",
  "Editorial11",
  "Tutor2",
  "Degree2",
    "University2",
);
const thesis3 = new Thesis(
  "Thesis3",
  ["Author23", "Author24"],
  ["Keyword23", "Keyword24"],
  "Abstract12",
  new Date("2022-01-01"),
  "1200",
  "Editorial12",
  "Tutor3",
  "Degree3",
  "University3",
);

const electronicResource1 = new ElectronicResource(
  "ElectronicResource1",
  ["Author25", "Author26"],
  ["Keyword25", "Keyword26"],
  "Abstract13",
  new Date("2022-02-02"),
  "1300",
  "Editorial13",
  "URL1",
  "Format1",
);
const electronicResource2 = new ElectronicResource(
  "ElectronicResource2",
  ["Author27", "Author28"],
  ["Keyword27", "Keyword28"],
  "Abstract14",
  new Date("2022-03-03"),
  "1400",
  "Editorial14",
  "URL2",
  "Format2",
);
const electronicResource3 = new ElectronicResource(
  "ElectronicResource3",
  ["Author29", "Author30"],
  ["Keyword29", "Keyword30"],
  "Abstract15",
  new Date("2022-04-04"),
  "1500",
  "Editorial15",
  "URL3",
  "Format3",
);

const finalProject1 = new FinalProject(
  "FinalProject1",
  ["Author31", "Author32"],
  ["Keyword31", "Keyword32"],
  "Abstract16",
  new Date("2022-05-05"),
  "1600",
  "Editorial16",
  "Tutor4",
  9,
  "University1",
);
const finalProject2 = new FinalProject(
  "FinalProject2",
  ["Author33", "Author34"],
  ["Keyword33", "Keyword34"],
  "Abstract17",
  new Date("2022-06-06"),
  "1700",
  "Editorial17",
  "Tutor5",
  10,
  "University2",
);
const finalProject3 = new FinalProject(
  "FinalProject3",
  ["Author35", "Author36"],
  ["Keyword35", "Keyword36"],
  "Abstract18",
  new Date("2022-07-07"),
  "1800",
  "Editorial18",
  "Tutor6",
  8,
  "University3",
);

const patent1 = new Patent(
  "Patent1",
  ["Author37", "Author38"],
  ["Keyword37", "Keyword38"],
  "Abstract19",
  new Date("2022-08-08"),
  "1900",
  "Editorial19",
  19928212,
  "Country1",
  new Date("2022-09-09"),
);
const patent2 = new Patent(
  "Patent2",
  ["Author39", "Author40"],
  ["Keyword39", "Keyword40"],
  "Abstract20",
  new Date("2022-10-10"),
  "2000",
  "Editorial20",
  19928213,
  "Country2",
  new Date("2022-11-11"),
);
const patent3 = new Patent(
  "Patent3",
  ["Author41", "Author42"],
  ["Keyword41", "Keyword42"],
  "Abstract21",
  new Date("2022-12-12"),
  "2100",
  "Editorial21",
  19928214,
  "Country3",
  new Date("2022-01-01"),
);

const bibliographicElements: BibliographicElementObject[] = [
  book1,
  book2,
  book3,
  conferenceContribution1,
  conferenceContribution2,
  conferenceContribution3,
  journalArticle1,
  journalArticle2,
  journalArticle3,
  thesis1,
  thesis2,
  thesis3,
  electronicResource1,
  electronicResource2,
  electronicResource3,
  finalProject1,
  finalProject2,
  finalProject3,
  patent1,
  patent2,
  patent3,
];

bibliographicElements.forEach((element) => {
  bibliographicManager.addElement(element);
});

// bibliographicManager.displayElements();
// console.log(conferenceContribution1.getIEEECitation());
// console.log(electronicResource1.getIEEECitation());
// console.log(finalProject1.getIEEECitation());
// console.log(thesis1.getIEEECitation());
// console.log(patent1.getIEEECitation());
console.log(journalArticle1.getIEEECitation());


