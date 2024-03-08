import { Injectable } from '@angular/core'
import { BaseService } from './../baseService'
import { Figurine, FilterFigurineJSON } from '../../domain/figurine'

@Injectable({
  providedIn: 'root'
})
export abstract class FigurineService implements BaseService<Figurine> { 

  abstract getAll(): Promise<Figurine[]>

  abstract getOneById(id: number): Promise<Figurine>

  abstract getAllByTitle(searchText: string, filterJSON: FilterFigurineJSON): Promise<Figurine[]>

  abstract getFilterBy(filterJSON: FilterFigurineJSON): Promise<Figurine[]>

  abstract getRepeatedFigurines(): Promise<Figurine[]>

  abstract getMissingFigurines(): Promise<Figurine[]>

  abstract requestFigurine(figurineId: number): Promise<void>

  abstract requestRepeatedFigurine(figurineId: number): Promise<void>

  abstract requestMissingFigurine(figurineId: number): Promise<void>

  abstract createFigurine(newFigurine: Figurine): Promise<void>

  abstract deleteFigurine(id: number): Promise<void>
}