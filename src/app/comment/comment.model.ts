export class Comment {

    public Grade: number;
    public Text: string;
    public AccomodationId: number;
    public AppUsersId: number;

    constructor(
         Grade: number,
         Text: string,
         AccomodationId: number,
         AppUsersId: number){
             this.Grade = Grade;
             this.Text = Text;
             this.AccomodationId = AccomodationId;
             this.AppUsersId = AppUsersId;
         }
}