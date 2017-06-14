export class Room {

    public Id: number;
    public RoomNumber: number;
    public BedCount: number;
    public Description: string;
    public PricePerNight: number;
    public AccomodationId: number;

    constructor(
         Id : number,
         RoomNumber: number,
         BedCount: number,
         Description: string,
         PricePerNight: number,
         AccomodationId: number
    ){
        this.Id = Id;
        this.RoomNumber = RoomNumber;
        this.BedCount = BedCount;
        this.Description = Description;
        this.PricePerNight = PricePerNight;
        this.AccomodationId = AccomodationId;
    }
}