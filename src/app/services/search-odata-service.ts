import { Injectable } from "@angular/core"
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {SearchModel} from '../search-acc-odata/search.model';

@Injectable()
export class SearchService{

searchPattern: string;

    constructor (private http: Http){
        this.searchPattern= "";
    }

    generateQuery(searchParams: SearchModel): Observable<any> 
    {
        this.searchPattern= "";

        if (searchParams.Name != "" && searchParams.Name != null)
        {                 
             this.searchPattern += `filter=Name eq '${searchParams.Name}'`;
        }

        if (searchParams.Country != ""  && searchParams.Country != null)
        {
          if ( this.searchPattern !="")
          {
             this.searchPattern += " and ";
          }
          else
          {
             this.searchPattern += `filter=`;
          }
           this.searchPattern += `Place/Region/Country/Name eq '${searchParams.Country}'`;
        }

        if (searchParams.Region != ""  && searchParams.Region != null)
        {
          if ( this.searchPattern !="")
          {
             this.searchPattern += " and ";
          }
          else
          {
             this.searchPattern += `filter=`;
          }
           this.searchPattern += `Place/Region/Name eq '${searchParams.Region}'`;
        }
    
        if (searchParams.Place != ""  && searchParams.Place != null)
        {
          if ( this.searchPattern !="")
          {
             this.searchPattern += " and ";
          }
          else
          {
             this.searchPattern += `filter=`;
          }
           this.searchPattern += `Place/Name eq '${searchParams.Place}'`;
        }

        if (searchParams.AccomodationType != ""  && searchParams.AccomodationType != null)
        {
          if ( this.searchPattern !="" )
          {
             this.searchPattern += " and ";
          }
          else
          {
             this.searchPattern += `filter=`;
          }
           this.searchPattern += `AccomodationType/Name eq '${searchParams.AccomodationType}'`;
        }

        if (searchParams.BedCount)
        {
          if (this.searchPattern !="")
          {
             this.searchPattern += " and ";
          }
          else
          {
             this.searchPattern += `filter=`;
          }
           this.searchPattern += `Rooms/any(r: r/BedCount ge ${searchParams.BedCount})`;
        }

        if (searchParams.Grade)
        {
          if ( this.searchPattern !="")
          {
             this.searchPattern += " and ";
          }
          else
          {
             this.searchPattern += `filter=`;
          }
           this.searchPattern += `AverageGrade ge ${searchParams.Grade}`;
        }

        if (searchParams.PriceMin || searchParams.PriceMax)
        {
          let min = Number.MIN_VALUE;
          let max = Number.MAX_VALUE;
          if(searchParams.PriceMin)
          {
            min = searchParams.PriceMin;
          }

          if(searchParams.PriceMax)
          {
            max = searchParams.PriceMax;
          }

          if ( this.searchPattern !="")
          {
             this.searchPattern += " and ";
          }
          else
          {
             this.searchPattern += `filter=`;
          }
           this.searchPattern += `Rooms/any(r: r/PricePerNight ge ${min} and r/PricePerNight le ${max})`;
        }

        /*if(searchPattern != "")
        {
          searchPattern = '?$inlinecount=allpages' + searchPattern; 
        }
        else
        {
           searchPattern = '?$inlinecount=allpages';
        }*/

        //searchPattern += `&$top=${searchParams.pageSize}`;
        //searchPattern += `&$skip=${searchParams.skip}`;
              
        //return this.http.get(this.urlProviderService.getURL() + "odata/AccommodationOData" + searchPattern).map(res => res.json());   
    

        return this.http.get(`http://localhost:54042/api/Accomodations?$${this.searchPattern}`).map(res => res.json());//&$expand=Place, Owner, AccomodationType
  }
  
}