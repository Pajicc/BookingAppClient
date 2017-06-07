
import {Country} from '../country/country.model'

export class CountryData{

    myData: Country[];

    constructor(){
        this.myData = [];

        this.myData.push( new Country(1, "Srbija", "SRB"));
        this.myData.push( new Country(2, "Hrvatska", "HR"));
        this.myData.push( new Country(3, "United Kingdom", "UK"));
        this.myData.push( new Country(4, "USA", "HR"));
    }

    fetchData(): Country[] {
        return this.myData;
    }

}