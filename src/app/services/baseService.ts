import { FilterFigurineJSON } from "../domain/figurine"
import { FilterPointOfSalesJSON } from "../domain/pointOfSale"
import { FilterUserJSON } from "../domain/user"

export interface BaseService<T> {
  
  getAll(): Promise<T[]>

  getOneById(id: number): Promise<T>

  getAllByTitle(searchText: string, filterJSON: FilterFigurineJSON | FilterPointOfSalesJSON | FilterUserJSON): Promise<T[]>
  
  getFilterBy(filterJSON: FilterFigurineJSON | FilterPointOfSalesJSON | FilterUserJSON): Promise<T[]>
}