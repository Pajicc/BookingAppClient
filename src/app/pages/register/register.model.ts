export class RegUser {

    /*[StringLength(50)]*/
    public Name: string;
    public Lastname: string;
    /*[StringLength(50)]*/
    public Email: string;
    /*[StringLength(50)]*/
    public Password: string;
    public ConfirmPassword: string;
    public Role: string;

    constructor(name: string, lastname: string, email: string, pass: string, confpass: string, role: string){
        this.Name = name;
        this.Lastname = lastname;
        this.Email = email;
        this.Password = pass;
        this.ConfirmPassword = confpass;
        this.Role = role;
    }
}