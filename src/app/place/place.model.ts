export class Place {

    public Id:number;
    public Name: string;

    public RegionId: number;

    constructor(
        Id: number,
        Name:string,
        RegionId: number
    ){
        this.Id = Id,
        this.Name = Name;
        this.RegionId = RegionId;
    }
    
}