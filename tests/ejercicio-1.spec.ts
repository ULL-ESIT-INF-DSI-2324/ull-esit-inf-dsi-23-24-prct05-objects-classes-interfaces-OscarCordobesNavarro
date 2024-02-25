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
import "mocha";
import { expect } from "chai";
import { BibliographicElementObject } from "../src/ejercicio-1/BibliographicElementObject";
import { Book } from "../src/ejercicio-1/Book";
import { FinalProject } from "../src/ejercicio-1/FinalProject";
import { Thesis } from "../src/ejercicio-1/Thesis";
import { ElectronicResource } from "../src/ejercicio-1/ElectronicResource";
import { JournalArticle } from "../src/ejercicio-1/JournalArticle";
import { Patent } from "../src/ejercicio-1/Patent";
import { ConferenceContribution } from "../src/ejercicio-1/ConferenceContribution";

describe("some objects tests", () => {
  const realisticBook = new Book(
    "The Great Gatsby",
    ["F. Scott Fitzgerald"],
    ["American literature", "Roaring Twenties"],
    "A novel exploring the American Dream during the Jazz Age.",
    new Date("1925-04-10"),
    "9780743273565",
    "Scribner",
    "Classic",
    "English",
    "978-3-16-148410-0",
    "New York",
    "USA",
  );
  const realisticConferenceContribution = new ConferenceContribution(
    "Machine Learning in Healthcare",
    ["Dr. Emily Johnson", "Dr. Michael Smith"],
    ["Artificial Intelligence", "Medical Applications"],
    "Exploring the impact of machine learning on healthcare outcomes.",
    new Date("2023-07-15"),
    "CS-2023-001",
    "Springer",
    "International Conference on Computer Science",
  );
  const realisticJournalArticle = new JournalArticle(
    "Climate Change Effects on Biodiversity",
    ["Dr. Sarah Thompson", "Dr. James Miller"],
    ["Climate Science", "Biodiversity Conservation"],
    "Analyzing the impact of climate change on global biodiversity.",
    new Date("2023-02-28"),
    "JCLIM-2023-005",
    "Nature",
    "Journal of Climate",
    "USA",
  );
  const realisticThesis = new Thesis(
    "Understanding Quantum Computing",
    ["John Davis"],
    ["Quantum Physics", "Computational Complexity"],
    "Investigating the principles and applications of quantum computing.",
    new Date("2023-05-20"),
    "PhD-CompSci-2023-001",
    "Springer",
    "Dr. Katherine Adams",
    "Doctor of Philosophy in Computer Science",
    "MIT",
  );
  const realisticElectronicResource = new ElectronicResource(
    "Web Development Basics",
    ["Jane Smith"],
    ["Web Development", "Programming"],
    "A comprehensive guide to web development for beginners.",
    new Date("2023-09-10"),
    "WEB-101",
    "Online Tutorials",
    "https://www.example.com/web-dev-basics",
    "PDF",
  );
  const realisticFinalProject = new FinalProject(
    "Autonomous Drone Navigation",
    ["Dr. Robert Turner", "Alice Johnson"],
    ["Autonomous Systems", "Drone Technology"],
    "Design and implementation of an autonomous drone navigation system.",
    new Date("2023-12-05"),
    "ENG-FP-2023-002",
    "Springer",
    "Dr. Robert Turner",
    9,
    "Stanford University",
  );
  const realisticPatent = new Patent(
    "Smart Home Automation System",
    ["Inventor: Mark Anderson"],
    ["Home Automation", "Internet of Things"],
    "A patent for an innovative smart home automation system.",
    new Date("2023-10-15"),
    "US2023000001A1",
    "US Patent Office",
    2023000001,
    "USA",
    new Date("2023-11-01"),
  );

  it("should return the title of the book", () => {
    expect(realisticBook.getTitle()).to.be.equal("The Great Gatsby");
  });
  it("should return the authors of the book", () => {
    expect(realisticBook.getAuthors()).to.be.eql(["F. Scott Fitzgerald"]);
  });
  it("should return the keywords of the book", () => {
    expect(realisticBook.getKeywords()).to.be.eql([
      "American literature",
      "Roaring Twenties",
    ]);
  });
  it("should return the abstract of the book", () => {
    expect(realisticBook.getAbstract()).to.be.equal(
      "A novel exploring the American Dream during the Jazz Age.",
    );
  });

  it("should return the title of the conference contribution", () => {
    expect(realisticConferenceContribution.getTitle()).to.be.equal(
      "Machine Learning in Healthcare",
    );
  });
  it("should return the authors of the conference contribution", () => {
    expect(realisticConferenceContribution.getAuthors()).to.be.eql([
      "Dr. Emily Johnson",
      "Dr. Michael Smith",
    ]);
  });
  it("should return the keywords of the conference contribution", () => {
    expect(realisticConferenceContribution.getKeywords()).to.be.eql([
      "Artificial Intelligence",
      "Medical Applications",
    ]);
  });
  it("should return the abstract of the conference contribution", () => {
    expect(realisticConferenceContribution.getAbstract()).to.be.equal(
      "Exploring the impact of machine learning on healthcare outcomes.",
    );
  });

  it("should return the title of the journal article", () => {
    expect(realisticJournalArticle.getTitle()).to.be.equal(
      "Climate Change Effects on Biodiversity",
    );
  });
  it("should return the authors of the journal article", () => {
    expect(realisticJournalArticle.getAuthors()).to.be.eql([
      "Dr. Sarah Thompson",
      "Dr. James Miller",
    ]);
  });
  it("should return the keywords of the journal article", () => {
    expect(realisticJournalArticle.getKeywords()).to.be.eql([
      "Climate Science",
      "Biodiversity Conservation",
    ]);
  });
  it("should return the abstract of the journal article", () => {
    expect(realisticJournalArticle.getAbstract()).to.be.equal(
      "Analyzing the impact of climate change on global biodiversity.",
    );
  });

  it("should return the title of the thesis", () => {
    expect(realisticThesis.getTitle()).to.be.equal(
      "Understanding Quantum Computing",
    );
  });
  it("should return the authors of the thesis", () => {
    expect(realisticThesis.getAuthors()).to.be.eql(["John Davis"]);
  });
  it("should return the keywords of the thesis", () => {
    expect(realisticThesis.getKeywords()).to.be.eql([
      "Quantum Physics",
      "Computational Complexity",
    ]);
  });
  it("should return the abstract of the thesis", () => {
    expect(realisticThesis.getAbstract()).to.be.equal(
      "Investigating the principles and applications of quantum computing.",
    );
  });

  it("should return the title of the electronic resource", () => {
    expect(realisticElectronicResource.getTitle()).to.be.equal(
      "Web Development Basics",
    );
  });
  it("should return the authors of the electronic resource", () => {
    expect(realisticElectronicResource.getAuthors()).to.be.eql(["Jane Smith"]);
  });
  it("should return the keywords of the electronic resource", () => {
    expect(realisticElectronicResource.getKeywords()).to.be.eql([
      "Web Development",
      "Programming",
    ]);
  });
  it("should return the abstract of the electronic resource", () => {
    expect(realisticElectronicResource.getAbstract()).to.be.equal(
      "A comprehensive guide to web development for beginners.",
    );
  });

  it("should return the title of the final project", () => {
    expect(realisticFinalProject.getTitle()).to.be.equal(
      "Autonomous Drone Navigation",
    );
  });
  it("should return the authors of the final project", () => {
    expect(realisticFinalProject.getAuthors()).to.be.eql([
      "Dr. Robert Turner",
      "Alice Johnson",
    ]);
  });
  it("should return the keywords of the final project", () => {
    expect(realisticFinalProject.getKeywords()).to.be.eql([
      "Autonomous Systems",
      "Drone Technology",
    ]);
  });
  it("should return the abstract of the final project", () => {
    expect(realisticFinalProject.getAbstract()).to.be.equal(
      "Design and implementation of an autonomous drone navigation system.",
    );
  });

  it("should return the title of the patent", () => {
    expect(realisticPatent.getTitle()).to.be.equal(
      "Smart Home Automation System",
    );
  });
  it("should return the authors of the patent", () => {
    expect(realisticPatent.getAuthors()).to.be.eql(["Inventor: Mark Anderson"]);
  });
  it("should return the keywords of the patent", () => {
    expect(realisticPatent.getKeywords()).to.be.eql([
      "Home Automation",
      "Internet of Things",
    ]);
  });
  it("should return the abstract of the patent", () => {
    expect(realisticPatent.getAbstract()).to.be.equal(
      "A patent for an innovative smart home automation system.",
    );
  });
});

describe("IEEE format tests", () => {
  it("should return the IEEE format of the book", () => {
    const realisticBook = new Book(
      "The Great Gatsby",
      ["F. Scott Fitzgerald"],
      ["American literature", "Roaring Twenties"],
      "A novel exploring the American Dream during the Jazz Age.",
      new Date("1925-04-10"),
      "9780743273565",
      "Scribner",
      "Classic",
      "English",
      "978-3-16-148410-0",
      "New York",
      "USA",
    );
    expect(realisticBook.getIEEECitation()).to.be.equal(
      `F. Scott Fitzgerald, "The Great Gatsby", New York, USA: Scribner, 1925, pp. 9780743273565.`,
    );
  });
  it("should return the IEEE format of the conference contribution", () => {
    const realisticConferenceContribution = new ConferenceContribution(
      "Machine Learning in Healthcare",
      ["Dr. Emily Johnson", "Dr. Michael Smith"],
      ["Artificial Intelligence", "Medical Applications"],
      "Exploring the impact of machine learning on healthcare outcomes.",
      new Date("2023-07-15"),
      "CS-2023-001",
      "Springer",
      "International Conference on Computer Science",
    );
    expect(realisticConferenceContribution.getIEEECitation()).to.be.equal(
      `Dr. Emily Johnson and Dr. Michael Smith, "Machine Learning in Healthcare", presentado en la International Conference on Computer Science, 2023.`,
    );
  });
  it("should return the IEEE format of the journal article", () => {
    const realisticJournalArticle = new JournalArticle(
      "Climate Change Effects on Biodiversity",
      ["Dr. Sarah Thompson", "Dr. James Miller"],
      ["Climate Science", "Biodiversity Conservation"],
      "Analyzing the impact of climate change on global biodiversity.",
      new Date("2023-02-28"),
      "JCLIM-2023-005",
      "Nature",
      "Journal of Climate",
      "USA",
    );
    expect(realisticJournalArticle.getIEEECitation()).to.be.equal(
      `Dr. Sarah Thompson and Dr. James Miller, "Climate Change Effects on Biodiversity", presented at the Journal of Climate, USA, 2023.`,
    );
  });
  it("should return the IEEE format of the thesis", () => {
    const realisticThesis = new Thesis(
      "Understanding Quantum Computing",
      ["John Davis"],
      ["Quantum Physics", "Computational Complexity"],
      "Investigating the principles and applications of quantum computing.",
      new Date("2023-05-20"),
      "PhD-CompSci-2023-001",
      "Springer",
      "Dr. Katherine Adams",
      "Doctor of Philosophy in Computer Science",
      "MIT",
    );
    expect(realisticThesis.getIEEECitation()).to.be.equal(
      `John Davis, "Understanding Quantum Computing", Doctor of Philosophy in Computer Science thesis, MIT, 2023.`,
    );
  });
  it("should return the IEEE format of the electronic resource", () => {
    const realisticElectronicResource = new ElectronicResource(
      "Web Development Basics",
      ["Jane Smith"],
      ["Web Development", "Programming"],
      "A comprehensive guide to web development for beginners.",
      new Date("2023-09-10"),
      "WEB-101",
      "Online Tutorials",
      "https://www.example.com/web-dev-basics",
      "PDF",
    );
    expect(realisticElectronicResource.getIEEECitation()).to.be.equal(
      `Jane Smith, "Web Development Basics", 2023. [Online]. Available: https://www.example.com/web-dev-basics.`,
    );
  });
  it("should return the IEEE format of the final project", () => {
    const realisticFinalProject = new FinalProject(
      "Autonomous Drone Navigation",
      ["Dr. Robert Turner", "Alice Johnson"],
      ["Autonomous Systems", "Drone Technology"],
      "Design and implementation of an autonomous drone navigation system.",
      new Date("2023-12-05"),
      "ENG-FP-2023-002",
      "Springer",
      "Dr. Robert Turner",
      9,
      "Stanford University",
    );
    expect(realisticFinalProject.getIEEECitation()).to.be.equal(
      `Dr. Robert Turner and Alice Johnson, "Autonomous Drone Navigation", Stanford University, 2023.`,
    );
  });
  it("should return the IEEE format of the patent", () => {
    const realisticPatent = new Patent(
      "Smart Home Automation System",
      ["Inventor: Mark Anderson"],
      ["Home Automation", "Internet of Things"],
      "A patent for an innovative smart home automation system.",
      new Date("2023-10-15"),
      "US2023000001A1",
      "US Patent Office",
      2023000001,
      "USA",
      new Date("2023-11-01"),
    );
    expect(realisticPatent.getIEEECitation()).to.be.equal(
      `Inventor: Mark Anderson, "Smart Home Automation System", USA Patent 2023000001, 9, 0, 2023.`,
    );
  });
});
