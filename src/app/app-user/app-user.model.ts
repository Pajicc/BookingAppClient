export class AppUser {
    Id: number;
    Name: String;
    Lastname: String;

    constructor(
        Name: string, Lastname: string, id: number){
            this.Id = id;
            this.Name = Name;
            this.Lastname = Lastname;
        }
}