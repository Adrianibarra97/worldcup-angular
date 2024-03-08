import { Injectable } from '@angular/core'
import { FilterPointOfSalesJSON, PointOfSale } from 'src/app/domain/pointOfSale'
import { masBaratoPointOfSaleStubList, masCercanoPointOfSaleStubList, masSobresPointOfSaleStubList, menorDistanciaPointOfSaleStubList, pointOfSaleStubList } from './pointOfSale.stub.list'
import { PointOfSaleService } from './pointOfSale.service'
import { REST_SERVER_URL } from '../configurations'
import { of } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
class PointOfSaleServiceStub extends PointOfSaleService {

  async getAll(): Promise<PointOfSale[]> {
    return pointOfSaleStubList.map(point => PointOfSale.fromJSON(point))
  }

  async getOneById(id: number): Promise<PointOfSale> {
    if(id <= pointOfSaleStubList.length) {
      return PointOfSale.fromJSON(pointOfSaleStubList[id])
    }
    throw("Error Code: 404 \nNo se encontro el punto buscado!")
  }

  async getAllByTitle(searchText: string, filterJSON: FilterPointOfSalesJSON): Promise<PointOfSale[]> {
    if(searchText != '') {
      return this.getAll()
    }
    return this.getFilterBy(filterJSON)
  }
  
  async getFilterBy(filterJSON: FilterPointOfSalesJSON): Promise<PointOfSale[]> {
    if(filterJSON.byCheapFigurine) {
      return masBaratoPointOfSaleStubList.map(point => PointOfSale.fromJSON(point))
    }
    if(filterJSON.byClosestPlaces) {
      return masSobresPointOfSaleStubList.map(point => PointOfSale.fromJSON(point))
    }
    if(filterJSON.byMostStock) {
      return menorDistanciaPointOfSaleStubList.map(point => PointOfSale.fromJSON(point))
    }
    return masCercanoPointOfSaleStubList.map(point => PointOfSale.fromJSON(point))
  }
}

export const pointOfSaleHttpClientSpy = jasmine.createSpyObj('HttpClient', [ 'get', 'post' ])

pointOfSaleHttpClientSpy.get.withArgs(`${REST_SERVER_URL}/puntosDeVentas`).and.returnValue(of(pointOfSaleStubList))

pointOfSaleHttpClientSpy.get.withArgs(`${REST_SERVER_URL}/puntosDeVentas/2`).and.returnValue(of(pointOfSaleStubList[2]))

pointOfSaleHttpClientSpy.post.and.callFake(
  (_url: `${typeof REST_SERVER_URL}/puntosDeVentas/filterByName/1/kiosko`, body: FilterPointOfSalesJSON) =>
  of(new Promise((resolve, reject) => {
    if(body.byDistance) {
      resolve(menorDistanciaPointOfSaleStubList)
    } else if(body.byCheapFigurine) {
      resolve(masBaratoPointOfSaleStubList)
    } else if(body.byClosestPlaces) {
      resolve(masCercanoPointOfSaleStubList)
    } else if(body.byMostStock) {
        resolve(masSobresPointOfSaleStubList)
    } else {
      reject("Error code: 401\nNo puede acceder a la información!")
    }
  }))
)

pointOfSaleHttpClientSpy.post.and.callFake(
  (_url: `${typeof REST_SERVER_URL}/stores/filterBy/1`, body: FilterPointOfSalesJSON) =>
  of(new Promise((resolve, reject) => {
    if(body.byDistance) {
      resolve(menorDistanciaPointOfSaleStubList)
    } else if(body.byCheapFigurine) {
      resolve(masBaratoPointOfSaleStubList)
    } else if(body.byClosestPlaces) {
      resolve(masCercanoPointOfSaleStubList)
    } else if(body.byMostStock) {
        resolve(masSobresPointOfSaleStubList)
    } else {
      reject("Error code: 401\nNo puede acceder a la información!")
    }
  }))
)