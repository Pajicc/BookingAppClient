export class Region {

    public Name: string;    
 
    public CountryId: number;
    
    constructor(
        Name:string,
        CountryId:number
    ){
        this.Name = Name;
        this.CountryId = CountryId;
    }
}