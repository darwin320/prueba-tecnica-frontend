import { Component } from '@angular/core';
import { HomeComponent } from '../components/home/home.component';
import { CampanaApiService } from '../services/api/campana/campana-api.service';
import { Campana } from '../models/campana';
import { SearchResult } from '../services/api/apiTypes';
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {
  public  totalR: number = 0
  constructor(
    public campanasApi : CampanaApiService
  ){
  }
  searchTerm: string = '';
  startDate: string = '';
  endDate: string = '';
  searchResults: Campana[] = [];
  totalResults: number = 0;
  
 
  search() {
  }
  

}
