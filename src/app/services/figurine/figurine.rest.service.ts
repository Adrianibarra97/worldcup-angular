import { Injectable } from '@angular/core'
import { Figurine, FigurineGiveByJSON, FigurineJSON, FilterFigurineJSON } from '../../domain/figurine'
import { FigurineService } from './figurine.service'
import { REST_SERVER_URL } from '../configurations'
import { HttpClient } from '@angular/common/http'
import { lastValueFrom } from 'rxjs'
import { AuthService } from '../auth/auth.service'

@Injectable({
  providedIn: 'root'
})
export class FigurineServiceRest extends FigurineService {

  constructor(private http: HttpClient, private authService: AuthService) {
    super()
  }

  async getAll(): Promise<Figurine[]> {
    const figurinesJSON$ = this.http.get<FigurineJSON[]>(REST_SERVER_URL + '/figuritas')
    const figurines = await lastValueFrom(figurinesJSON$)
    return figurines.map(figurineJSON => Figurine.fromJSONDefault(figurineJSON))
  }

  async getOneById(id: number): Promise<Figurine> {
    const figurineJSON$ = this.http.get<FigurineGiveByJSON>(REST_SERVER_URL + '/figuritas/' + id)
    const figurine = await lastValueFrom(figurineJSON$)
    return Figurine.fromJSON(figurine)
  }

  async getAllByTitle(searchText: string, filterJSON: FilterFigurineJSON): Promise<Figurine[]> {
    let urlParameters: string = "/figuritas/filterByName/" + this.authService.getActiveUserId() + "/"
    urlParameters = searchText
      ? urlParameters + searchText
      : urlParameters + "''"
    const figurinesJSON$ = this.http.post<FigurineGiveByJSON[]>(REST_SERVER_URL + urlParameters, filterJSON)
    const figurines = await lastValueFrom(figurinesJSON$)
    return figurines.map(figurineJSON => Figurine.fromJSON(figurineJSON))
  }

  async getFilterBy(filterJSON: FilterFigurineJSON): Promise<Figurine[]> {
    const urlParameters: string = "/figuritas/filterActivated/" + this.authService.getActiveUserId()
    const figurinesJSON$ = this.http.post<FigurineGiveByJSON[]>(REST_SERVER_URL + urlParameters, filterJSON)
    const figurines = await lastValueFrom(figurinesJSON$)
    return figurines.map(figurineJSON => Figurine.fromJSON(figurineJSON))
  }

  async getRepeatedFigurines(): Promise<Figurine[]> {
    const urlParameters: string = "/usuarios/repetidas/" + this.authService.getActiveUserId()
    const figurinesJSON$ = this.http.get<FigurineJSON[]>(REST_SERVER_URL + urlParameters)
    const figurines = await lastValueFrom(figurinesJSON$)
    return figurines.map(figurineJSON => Figurine.fromJSONDefault(figurineJSON))
  }
  
  async getMissingFigurines(): Promise<Figurine[]> {
    const urlParameters: string = "/usuarios/faltantes/" + this.authService.getActiveUserId()
    const figurinesJSON$ = this.http.get<FigurineJSON[]>(REST_SERVER_URL + urlParameters)
    const figurines = await lastValueFrom(figurinesJSON$)
    return figurines.map(figurineJSON => Figurine.fromJSONDefault(figurineJSON))
  }

  async requestFigurine(figurineId: number): Promise<void> {
    const urlParameters: string = "/figuritas/solicitarFigurita/" + this.authService.getActiveUserId() + "/" + figurineId
    const rta = this.http.get<void>(REST_SERVER_URL + urlParameters)
    await lastValueFrom(rta)
  }

  async requestRepeatedFigurine(figurineId: number): Promise<void> {
    const urlParameters: string = "/figuritas/agregarARepetidas/" + this.authService.getActiveUserId() + "/" + figurineId
    const rta = this.http.get<void>(REST_SERVER_URL + urlParameters)
    await lastValueFrom(rta)
  }

  async requestMissingFigurine(figurineId: number): Promise<void> {
    const urlParameters: string = "/figuritas/agregarAFaltantes/" + this.authService.getActiveUserId() + "/" + figurineId
    const rta = this.http.get<void>(REST_SERVER_URL + urlParameters)
    await lastValueFrom(rta)
  }

  async createFigurine(newFigurine: Figurine): Promise<void> {
    const newFigurineJSON: FigurineJSON = newFigurine.toJSON()
    this.http.post<FigurineJSON>(REST_SERVER_URL + "/nuevaFigurita", newFigurineJSON)
  }

  async deleteFigurine(id: number): Promise<void> {
    const deleteFigurine$ = this.http.delete<void>(REST_SERVER_URL + "/figuritas/" + id)
    await lastValueFrom(deleteFigurine$)
  }
}
