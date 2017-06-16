export class SearchModel {

    public Name: string;
    public Country: string;
    public Region: string;
    public Place: string;
    public AccommodationType: string;
    public BedCount: number;
    public Grade: number;
    public PriceMin: number;
    public PriceMax: number;

    constructor(
        Name: string,
        Country: string,
        Region: string,
        Place: string,
        AccommodationType: string,
        BedCount: number,
        Grade: number,
        PriceMin: number,
        PriceMax: number
    ){
        this.Name = Name;
        this.Country = Country;
        this.BedCount = BedCount;
        this.Region = Region;
        this.Place = Place;
        this.AccommodationType = AccommodationType;
        this.Grade = Grade;
        this.PriceMin = PriceMin;
        this.PriceMax = PriceMax;
    }


}