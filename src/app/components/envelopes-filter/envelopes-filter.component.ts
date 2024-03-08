import { Component, EventEmitter, Output } from '@angular/core'
import { FilterPointOfSalesJSON } from 'src/app/domain/pointOfSale'

@Component({
  selector: 'app-envelopes-filter',
  templateUrl: './envelopes-filter.component.html',
  styleUrls: ['./envelopes-filter.component.css']
})
export class EnvelopesFilterComponent {

  @Output() filterPointOfSale = new EventEmitter<FilterPointOfSalesJSON>()
  public filterPointOfSaleJSON: FilterPointOfSalesJSON = {
    byDistance: true,
    byCheapFigurine: false,
    byMostStock: false,
    byClosestPlaces: false
  }

  byDistance(event: Event) {
    this.filterPointOfSaleJSON = {
      byDistance: (<HTMLInputElement>event.target).checked,
      byCheapFigurine: false,
      byMostStock: false,
      byClosestPlaces: false
    }
    this.filterPointOfSale.emit(this.filterPointOfSaleJSON)
  }

  cheapFigurine(event: Event) {
    this.filterPointOfSaleJSON = {
      byDistance: false,
      byCheapFigurine: (<HTMLInputElement>event.target).checked,
      byMostStock: false,
      byClosestPlaces: false
    }
    this.filterPointOfSale.emit(this.filterPointOfSaleJSON)
  }

  mostStock(event: Event) {
    this.filterPointOfSaleJSON = {
      byDistance: false,
      byCheapFigurine: false,
      byMostStock: (<HTMLInputElement>event.target).checked,
      byClosestPlaces: false
    }
    this.filterPointOfSale.emit(this.filterPointOfSaleJSON)
  }

  closestPlaces(event: Event) {
    this.filterPointOfSaleJSON = {
      byDistance: false,
      byCheapFigurine: false,
      byMostStock: false,
      byClosestPlaces: (<HTMLInputElement>event.target).checked
    }
    this.filterPointOfSale.emit(this.filterPointOfSaleJSON)
  }
}