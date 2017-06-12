export class AppUser {

    Username: String;
    Email: String;
    Password: String;

    constructor(
        Username: string, Email: string, Password: string){
            this.Username = Username;
            this.Email = Email;
            this.Password = Password;
        }
}