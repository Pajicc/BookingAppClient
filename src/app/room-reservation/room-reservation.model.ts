export class RoomReservations {

    public Id: number;
    public StartDate: Date;
    public EndDate: Date;
    public Timestamp: Date;
    public AppUserId: number;
    public RoomId: number;

    constructor(
        Id: number,
        StartDate: Date,
        EndDate: Date,
        Timestamp: Date,
        AppUserId: number,
        RoomId: number
    ) {
        this.Id = Id;
        this.StartDate = StartDate;
        this.EndDate = EndDate;
        this.Timestamp = Timestamp;
        this.AppUserId = AppUserId;
        this.RoomId = RoomId;
    }
}