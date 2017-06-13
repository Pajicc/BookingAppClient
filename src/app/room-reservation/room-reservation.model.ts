export class RoomReservations {

    public StartDate: Date;
    public EndDate: Date;
    public Timestamp: Date;
    public AppUserId: number;
    public RoomId: number;

    constructor(
       StartDate: Date,
        EndDate: Date,
        Timestamp: Date,
        AppUserId: number,
         RoomId: number
    ){
        this.StartDate = StartDate;
        this.EndDate = EndDate;
        this.Timestamp = Timestamp;
        this.AppUserId = AppUserId;
        this.RoomId = RoomId;
    }
}