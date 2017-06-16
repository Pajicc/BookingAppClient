import { Component, OnInit } from '@angular/core';
import {Accomodation} from '../accomodation/accomodation.model';
import {SearchService} from '../services/search-odata-service';
import { NgForm } from '@angular/forms';
import { SearchModel} from '../search-acc-odata/search.model';

@Component({
  selector: 'app-search-acc-odata',
  templateUrl: './search-acc-odata.component.html',
  styleUrls: ['./search-acc-odata.component.css'],
  providers: [SearchService]
})
export class SearchAccOdataComponent implements OnInit {

  accommodations: Accomodation [];
  count: number = 0;
  skip: number = 0;
  searchParamsSave;
  entitiesPerPage = 1; 

  constructor(private searchODataService: SearchService) { }

  ngOnInit() {
  }


 onSubmit(searchParams:SearchModel, form: NgForm)
  {
    this.skip = 0;
    //searchParams.pageSize = this.entitiesPerPage;
    //searchParams.skip = this.skip;
    this.searchParamsSave = new SearchModel(searchParams.Name,searchParams.Country,searchParams.Region,searchParams.Place,searchParams.AccommodationType,searchParams.BedCount,searchParams.Grade,searchParams.PriceMin,searchParams.PriceMax);
    this.searchODataService.generateQuery(searchParams).subscribe(x => this.oDataResponseParser(x));
  }

  oDataResponseParser(x: any)
  {
    this.count = x["odata.count"];
    this.accommodations = x.value as Accomodation[]
  }
}
