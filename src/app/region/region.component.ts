import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Response } from '@angular/http';
import { HttpRegionService } from "app/services/http.region.service";
import { Region } from "app/region/region.model";

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css'],
  providers: [HttpRegionService]
})
export class RegionComponent implements OnInit {

  region: Region;
  regions: Object[];

  constructor(private httpRegionService: HttpRegionService) { }

  ngOnInit() {
    this.httpRegionService.getRegions().subscribe(
      (reg: any) => { this.regions = reg; console.log(this.regions) },
      error => { alert("Unsuccessful fetch operation!"); console.log(error); }
    );
  }

  addRegion(newRegion: Region, form: NgForm): void {
    this.httpRegionService.postRegion(newRegion).subscribe(this.onPost);
    form.reset();
  }

  onPost(res: any): void {
    alert("Post!");
    console.log(res.json());
  }
}
