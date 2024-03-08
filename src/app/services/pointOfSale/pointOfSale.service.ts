import { Injectable } from '@angular/core'
import { FilterPointOfSalesJSON, PointOfSale } from '../../domain/pointOfSale'
import { BaseService } from '../baseService'

@Injectable({
  providedIn: 'root'
})
export abstract class PointOfSaleService implements BaseService<PointOfSale> { 

  abstract getAll(): Promise<PointOfSale[]>

  abstract getOneById(id: number): Promise<PointOfSale>

  abstract getAllByTitle(searchText: string, filterJSON: FilterPointOfSalesJSON): Promise<PointOfSale[]>
  
  abstract getFilterBy(filterJSON: FilterPointOfSalesJSON): Promise<PointOfSale[]>
}