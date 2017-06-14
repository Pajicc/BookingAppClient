export class Comment {

    public Id: number;
    public Grade: number;
    public Text: string;
    public AccomodationId: number;
    public AppUsersId: number;

    constructor(
        Id: number,
         Grade: number,
         Text: string,
         AccomodationId: number,
         AppUsersId: number){
             this.Id=Id;
             this.Grade = Grade;
             this.Text = Text;
             this.AccomodationId = AccomodationId;
             this.AppUsersId = AppUsersId;
         }
}