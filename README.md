[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct05-objects-classes-interfaces-OscarCordobesNavarro/badge.svg?branch=oscarcn)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct05-objects-classes-interfaces-OscarCordobesNavarro?branch=oscarcn)

## Introducción

En esta práctica, nos enfocaremos en realizar ejercicios que profundicen nuestro entendimiento sobre interfaces, clases y objetos en TypeScript. Además, exploraremos herramientas como Istanbul y Coveralls.

Istanbul, también conocido como nyc, se utiliza como un instrumentador de código en JavaScript, facilitando el seguimiento de las líneas ejecutadas durante las pruebas unitarias.

Por otro lado, Coveralls es un servicio en línea que aprovechamos para analizar y visualizar informes de cobertura generados por herramientas como Istanbul.

Es fundamental recordar que, antes de comenzar con los ejercicios, debemos configurar un entorno de trabajo adecuado. Puedes encontrar información detallada sobre cómo hacerlo [aquí](https://ull-esit-inf-dsi-2324.github.io/ull-esit-inf-dsi-23-24-prct02-vscode-OscarCordobesNavarro/)

Además, incorporaremos pruebas unitarias con Mocha y Chai, así como la generación automática de documentación. Para obtener más detalles y aprender a configurar tanto TypeDoc como Mocha y Chai, puedes consultar [este link](https://ull-esit-inf-dsi-2324.github.io/ull-esit-inf-dsi-23-24-prct03-types-functions-OscarCordobesNavarro/#instalación-de-typedoc-y-configuración-del-mismo)

## Resolución de los ejercicios

### Gestor de referencias bibliográficas

La idea en esta practica es crear un pequeño gestor de referencias bibliográficas donde vamos a tener distintos objetos tales como libros, recursos electronicos, trabajos de fin de grado y demás. Pero antes de empezar a ver el código en mi caso he realizado un pequeño esquema en la web app [Excalidraw](https://excalidraw.com/) de como será nuestra estructura y las relaciones entre los objetos.

![Esquema ](/IdeaEjercicio-1-V3.png)

En primer lugar, es crucial considerar que los objetos que se almacenarán en nuestro gestor serán diversos entre sí, aunque compartirán atributos comunes. En este contexto, he creado una interfaz y la he implementado en la clase abstracta, la cual será heredada por todos los objetos de nuestro gestor bibliográfico.

```typescript
export interface BibliographicElement {
  getTitle(): string;

  getAuthors(): string[];

  getKeywords(): string[];

  getAbstract(): string;

  getPublicationDate(): Date;

  getPages(): string;

  getEditorial(): string;

  getIEEECitation(): string;
}
```

Con este "modelo" de los objetos ya tenemos la base para crear la clase abstracta 

```typescript
export abstract class BibliographicElementObject
  implements BibliographicElement
{
  constructor(
    private title: string,
    private authors: string[],
    private keywords: string[],
    private abstract: string,
    private publicationDate: Date,
    private pages: string,
    private editorial: string,
  ) {}

  public getTitle(): string {
    return this.title;
  }

  public getAuthors(): string[] {
    return this.authors;
  }

  public getKeywords(): string[] {
    return this.keywords;
  }

  public getAbstract(): string {
    return this.abstract;
  }

  public getPublicationDate(): Date {
    return this.publicationDate;
  }

  public getPages(): string {
    return this.pages;
  }

  public getEditorial(): string {
    return this.editorial;
  }

  abstract getIEEECitation(): string;
}
```


Observamos que el único método abstracto presente en la clase abstracta será la forma de obtener el resultado en formato IEEE para cada tipo de objeto. En este caso, he consultado [esta referencia](https://journals.ieeeauthorcenter.ieee.org/wp-content/uploads/sites/7/IEEE_Reference_Guide.pdf) para entender la estructura del formato según el tipo de objeto en cuestión.

Un ejemplo de los objetos que vamos a extender de esta clase podría ser:

```typescript
export class Book extends BibliographicElementObject {
  constructor(
    title: string,
    authors: string[],
    keywords: string[],
    abstract: string,
    publicationDate: Date,
    pages: string,
    editorial: string,
    private genre: string,
    private language: string,
    private ISBN: string,
    private city: string,
    private country: string,
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
  }

  public getGenre(): string {
    return this.genre;
  }

  public getLanguage(): string {
    return this.language;
  }

  public getISBN(): string {
    return this.ISBN;
  }

  public getCity(): string {
    return this.city;
  }

  public getCountry(): string {
    return this.country;
  }

  public getIEEECitation(): string {
    // Format: [1] A. Author, "Title of chapter in the book," in Title of His Published Book, xth ed. City of Publisher, (only U.S. State), Country: Publisher, year, ch. x, sec. x, pp. xxx-xxx.
    const authors = this.getAuthors().join(" and ");
    return `${authors}, "${this.getTitle()}", ${this.getCity()}, ${this.getCountry()}: ${this.getEditorial()}, ${this.getPublicationDate().getFullYear()}, pp. ${this.getPages()}.`;
  }
}
```

Podemos observan que solo se añaden los `getters` para los nuevos atributos, y además se implementa el método abstracto declarado en la clase padre.

Esto lo hacemos para las clases `Book`, `ConferenceContribution`, `ElectronicResource`, `FinalProject`, `JournalArticle`, `Patent` y `Thesis`. Como podemos observar, con estra estructura podemos hacer que los objetos que va a contener nuestro gestor sea lo mas escalable posible.




