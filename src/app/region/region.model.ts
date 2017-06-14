import { Country } from "app/country/country.model";

export class Region {

    public Id: number;
    public Name: string;    
 
    public CountryId: number;
    
    constructor(
        Id: number,
        Name:string,
        CountryId:number
    ){
        this.Id = Id;
        this.Name = Name;
        this.CountryId = CountryId;
    }
}