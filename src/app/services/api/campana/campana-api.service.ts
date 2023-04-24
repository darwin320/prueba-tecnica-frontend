import { Injectable } from "@angular/core";
import { ApiService, ApiWithSearch } from "../api.service";
import { SearchResult } from "../apiTypes";

import { from, Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { Campana } from "src/app/models/campana";


@Injectable({
    providedIn: "root",
})
export class CampanaApiService
    extends ApiService
    implements ApiWithSearch<Campana>
    
{

    public search(
        userSearch: string,
        currentSearchPage: number,
        searchLimit: number
    ): Observable<SearchResult<Campana>> {
        return from(this.getCampanas(userSearch, currentSearchPage, searchLimit));
    }

    public async count() {
        const result = await this.makeSimpleGetRequest<number>("/campanas/count");     
        
        return result.unwrap();
    }

    public async getCampanas(
        userSearch: string,
        currentPage: number,
        searchAmount: number
    ): Promise<SearchResult<Campana>> {
        const result = await this.makeSearchPaginationRequest<Campana>(
            "/campana/search",
            userSearch,
            currentPage,
            searchAmount
        );

        return result.unwrap();
    }

        
  


    public createCampana(camapanaInformation: {
         nombre: string,
         apellido: string,
         telefono: string,
         direccion: string,
         campanaCode: string,
         fecha: Date,
    }) {
        return this.makeSimplePostRequest(
            "/campana/create",
            camapanaInformation
        );
    }
    
}