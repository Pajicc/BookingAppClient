/**
 * Provides a `Country` object
 */
export class Country {
  Id: number;
  Name: String;
  Code: String;

  constructor(
    Id: number,
    Name: string,
    Code: string) {

    this.Id = Id;
    this.Name = Name;
    this.Code = Code;
  }
}
