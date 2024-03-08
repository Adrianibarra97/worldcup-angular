import { FilterPointOfSalesJSON, PointOfSaleJSON } from './../../domain/pointOfSale'
import { Injectable } from '@angular/core'
import { PointOfSale } from 'src/app/domain/pointOfSale'
import { PointOfSaleService } from './pointOfSale.service'
import { REST_SERVER_URL } from '../configurations'
import { HttpClient } from '@angular/common/http'
import { AuthService } from '../auth/auth.service'
import { lastValueFrom } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PointOfSaleServiceRest extends PointOfSaleService {

  constructor(private http: HttpClient, private authService: AuthService) {
    super()
  }

  async getAll(): Promise<PointOfSale[]> {
    const pointsJSON$ = this.http.get<PointOfSaleJSON[]>(REST_SERVER_URL + "/puntosDeVentas")
    const points = await lastValueFrom(pointsJSON$)
    return points.map(pointJSON => PointOfSale.fromJSON(pointJSON))
  }

  async getOneById(id: number): Promise<PointOfSale> {
    const pointJSON$ = this.http.get<PointOfSaleJSON>(REST_SERVER_URL + "/puntosDeVentas/" + id)
    const point = await lastValueFrom(pointJSON$)
    return PointOfSale.fromJSON(point)
  }

  async getAllByTitle(searchText: string, filterJSON: FilterPointOfSalesJSON): Promise<PointOfSale[]> {
    let urlParameters: string = "/puntosDeVentas/filterByName/" + this.authService.getActiveUserId() + "/"
    urlParameters = searchText
      ? urlParameters + searchText
      : urlParameters + "''"
    const pointsJSON$ = this.http.post<PointOfSaleJSON[]>(REST_SERVER_URL + urlParameters, filterJSON)
    const points = await lastValueFrom(pointsJSON$)
    return points.map(pointJSON => PointOfSale.fromJSON(pointJSON))
  }

  async getFilterBy(filterJSON: FilterPointOfSalesJSON): Promise<PointOfSale[]> {
    const urlParameters: string = "/stores/filterBy/" + this.authService.getActiveUserId()
    const pointsJSON$ = this.http.post<PointOfSaleJSON[]>(REST_SERVER_URL + urlParameters, filterJSON)
    const points = await lastValueFrom(pointsJSON$)
    return points.map(pointJSON => PointOfSale.fromJSON(pointJSON))
  }
}