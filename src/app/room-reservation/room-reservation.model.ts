export class RoomReservations {

    public Id: number;
    public StartDate: Date;
    public EndDate: Date;
    public Timestamp: Date;
    public AppUserId: number;
    public RoomId: number;
    public Canceled: boolean;

    constructor(
        Id: number,
        StartDate: Date,
        EndDate: Date,
        Timestamp: Date,
        AppUserId: number,
        RoomId: number,
        Canceled: boolean
    ) {
        this.Id = Id;
        this.StartDate = StartDate;
        this.EndDate = EndDate;
        this.Timestamp = Timestamp;
        this.AppUserId = AppUserId;
        this.RoomId = RoomId;
        this.Canceled = Canceled;
    }
}