import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { firstValueFrom } from "rxjs";
import { Plantillas } from "../models/plantilla";

@Injectable()
export class ServicePlantilla {
    urlApi = environment.urlApiPlantilla;
    constructor(private _http: HttpClient) {}

    async getFunciones(): Promise<string>{
        let request = "api/Plantilla/funciones"
        return firstValueFrom(this._http.get<string>(this.urlApi + request))
    }

    async getFunciones2(): Promise<string[]>{
        let request = "api/Plantilla/funciones"
        return firstValueFrom(this._http.get<string[]>(this.urlApi + request))
    }

    async getPantillaFuncion(funcion: string): Promise<Plantillas[]>{
        let request = "api/Plantilla/PlantillaFuncion/" + funcion;
        return firstValueFrom(this._http.get<Plantillas[]>(this.urlApi + request))
    }

    async getPlantillasFunciones(funciones: Array<string>): Promise<Plantillas[]> {
        let content = "";
        for (let fun of funciones) {
            content += "funcion=" + fun + "&";
        }
        content = content.substring(0, content.length -1);
        let request = "api/plantilla/plantillafunciones?" + content;
        return firstValueFrom(this._http.get<Plantillas[]>(this.urlApi + request)) 
    }
}