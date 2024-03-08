import { Injectable } from '@angular/core'
import { Figurine, FigurineJSON, FilterFigurineJSON } from '../../domain/figurine'
import { figurineStubList, onFireFigurineStubList, promiseFigurineStubList, promiseOnFireFigurineStubList } from './figurine.stub.list'
import { FigurineService } from './figurine.service'

@Injectable({
  providedIn: 'root'
})
export class FigurineServiceStub extends FigurineService {
  
  public figurinesDelete = figurineStubList

  async getAll(): Promise<Figurine[]> {
    return figurineStubList.map((figurita) => Figurine.fromJSONDefault(figurita))
  }
  async getOneById(id: number): Promise<Figurine> {
    const figurita = figurineStubList.filter((f)=>f.id == id)
    return Figurine.fromJSONDefault(figurita[0])
  }
  async getAllByTitle(searchText: string, filterJSON: FilterFigurineJSON): Promise<Figurine[]> {
    let figuritaARetornar: FigurineJSON[] = figurineStubList

    if(filterJSON.esOnFire && filterJSON.esPromesa){
      figuritaARetornar = figuritaARetornar.filter((f)=> f.onFire && f.jugador.esPromesa)
    }
    if(filterJSON.esOnFire && !filterJSON.esPromesa){
      figuritaARetornar = figuritaARetornar.filter((f)=> f.onFire)
    }
    if(filterJSON.esPromesa && !filterJSON.esOnFire){
      figuritaARetornar = figuritaARetornar.filter((f)=> f.jugador.esPromesa)
    }
    if(filterJSON.valoracionMin >= 0 || filterJSON.valoracionMax != 99999){
      figuritaARetornar = figuritaARetornar.filter((f)=>{
        const max = Math.max(f.jugador.valoracion,filterJSON.valoracionMax)
        const min = Math.min(f.jugador.valoracion,filterJSON.valoracionMin)
        return f.jugador.valoracion > min && f.jugador.valoracion < max
      })
    }
    if(searchText != ""){
      const searchTextToLowerCase = searchText.toLocaleLowerCase()
      figuritaARetornar = figuritaARetornar.filter((f)=>{
        const nombreToLowerCase = f.jugador.nombre.toLocaleLowerCase()
        const apellidoToLowerCase = f.jugador.apellido.toLocaleLowerCase()
        return nombreToLowerCase.includes(searchTextToLowerCase) || apellidoToLowerCase.includes(searchTextToLowerCase)
      })
    }
    return figuritaARetornar.map((figurita) => Figurine.fromJSONDefault(figurita))
  }

  async getFilterBy(filterJSON: FilterFigurineJSON): Promise<Figurine[]> {
    if(filterJSON.esOnFire && filterJSON.esPromesa) {
      return promiseOnFireFigurineStubList.map(figurineJSON => Figurine.fromJSONDefault(figurineJSON))
    }
    if(filterJSON.esPromesa) {
      return promiseFigurineStubList.map(figurineJSON => Figurine.fromJSONDefault(figurineJSON))
    }
    if(filterJSON.esOnFire) {
      return onFireFigurineStubList.map(figurineJSON => Figurine.fromJSONDefault(figurineJSON))
    }
    return this.getAll()
  }

  async requestRepeatedFigurine(figurineId: number): Promise<void> {
    console.log("Se ejecutó la solicitud de la figurita: " + figurineId)
  }
  async requestMissingFigurine(figurineId: number): Promise<void> {
    console.log("Se ejecutó la solicitud de la figurita: " + figurineId)
  }
  
  async getRepeatedFigurines(): Promise<Figurine[]> {
    return figurineStubList.map(figurineJSON => Figurine.fromJSONDefault(figurineJSON))
  }

  async getMissingFigurines(): Promise<Figurine[]> {
    return figurineStubList.map(figurineJSON => Figurine.fromJSONDefault(figurineJSON))
  }

  async requestFigurine(figurineId: number): Promise<void> {
    console.log("Se ejecutó la solicitud de la figurita: " + figurineId)
  }

  async createFigurine(newFigurine: Figurine): Promise<void> {
    figurineStubList.push(newFigurine.toJSON())
  }
  
  async deleteFigurine(id: number): Promise<void> {
    this.figurinesDelete = figurineStubList.filter(figurine => figurine.id != id)
  }
}