import { AppUser } from "../app-user/app-user.model";

export class Comment {

    public Id: number;
    public Grade: number;
    public Text: string;
    public AccomodationId: number;
    public AppUserId: number;
    public AppUser: AppUser;
    constructor(
        Id: number,
         Grade: number,
         Text: string,
         AccomodationId: number,
         AppUserId: number){
             this.Id=Id;
             this.Grade = Grade;
             this.Text = Text;
             this.AccomodationId = AccomodationId;
             this.AppUserId = AppUserId;
         }
}