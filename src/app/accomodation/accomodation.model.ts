//import { AccType } from '../accomodation-type/accomodation-type.model';

import { MapInfo } from "../map/map-info.model";

export class Accomodation {

    public Id: number;
    public Name: string;

    public Description: string;

    public Address: string;
    public AverageGrade: number;
    public Latitude: number;
    public Longtitude: number;

    public ImageURL: string;
    public Approved: boolean;

    public PlaceId: number;

    public AppUserId: number;

    public AccomodationTypeId: number;
    public Map: MapInfo;

    constructor(
        Id: number,
        Name: string,
        Description: string,
        Address: string,
        AverageGrade: number,
        Latitude: number,
        Longtitude: number,
        ImageURL: string,
        Approved: boolean,
        PlaceId: number,
        AppUserId: number,
        AccomodationTypeId: number,
        Map: MapInfo
    ) {
        this.Id = Id;
        this.Name = Name;
        this.Description = Description;
        this.Address = Address;
        this.AverageGrade = AverageGrade;
        this.Latitude = Latitude;
        this.Longtitude = Longtitude;
        this.ImageURL = ImageURL;
        this.Approved = Approved;
        this.PlaceId = PlaceId;
        this.AppUserId = AppUserId;
        this.AccomodationTypeId = AccomodationTypeId;
        this.Map = Map;
    }
}