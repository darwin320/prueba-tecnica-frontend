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

    public files: File[] = [];

    public getListFiles(): File[] {
        return this.files;
    }

        
    search(userSearch?: string | undefined, currentSearchPage?: number | undefined, searchLimit?: number | undefined): Observable<SearchResult<Campana>> {
        throw new Error("Method not implemented.");
    }
    count(): Promise<number> {
        throw new Error("Method not implemented.");
    }


    public createCampana(camapanaInformation: {
         id: number,
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