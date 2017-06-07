/**
 * Provides a `Country` object
 */
export class Country {
    Id: Number;
    Name: String;
    Code: String;

  constructor(
     Id: Number,
     Name: string,
     Code: string) {

         this.Id = Id;
         this.Name = Name;
         this.Code = Code;
  }
}
