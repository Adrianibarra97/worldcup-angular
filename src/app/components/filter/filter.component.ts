import { Component, EventEmitter, Output } from '@angular/core'
import { FilterFigurineJSON } from './../../domain/figurine'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  @Output() filterFigurines = new EventEmitter<FilterFigurineJSON>()
  public filterFigurineJSON: FilterFigurineJSON = {
    esPromesa: false,
    esOnFire: false,
    valoracionMin: 0,
    valoracionMax: 9999
  }

  onFireChange(event: Event) {
    event.preventDefault()
    this.filterFigurineJSON.esOnFire = (<HTMLInputElement>event.target).checked
    this.filterFigurines.emit(this.filterFigurineJSON)
  }

  isPromiseChange(event: Event) {
    event.preventDefault()
    this.filterFigurineJSON.esPromesa = (<HTMLInputElement>event.target).checked
    this.filterFigurines.emit(this.filterFigurineJSON)
  }

  minChange(event: Event) {
    event.preventDefault()
    this.filterFigurineJSON.valoracionMin = Number.parseInt((<HTMLInputElement>event.target).value)
    if(Number.isNaN(this.filterFigurineJSON.valoracionMin)) {
      this.filterFigurineJSON.valoracionMin = 0
    }
    this.filterFigurines.emit(this.filterFigurineJSON)
  }

  maxChange(event: Event) {
    event.preventDefault()
    this.filterFigurineJSON.valoracionMax = Number.parseInt((<HTMLInputElement>event.target).value)
    if(Number.isNaN(this.filterFigurineJSON.valoracionMax)) {
      this.filterFigurineJSON.valoracionMax = 9999
    }
    this.filterFigurines.emit(this.filterFigurineJSON)
  }
}