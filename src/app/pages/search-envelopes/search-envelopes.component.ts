import { Component, OnInit } from '@angular/core'
import { FilterPointOfSalesJSON, PointOfSale } from 'src/app/domain/pointOfSale'
import { PointOfSaleService } from 'src/app/services/pointOfSale/pointOfSale.service'

@Component({
  selector: 'app-search-envelopes',
  templateUrl: './search-envelopes.component.html',
  styleUrls: ['./search-envelopes.component.css']
})
export class SearchEnvelopesComponent implements OnInit {

  public pointOfSales: PointOfSale[] = []
  private searchByName: string = ''
  private filterPointOfSalesJSON: FilterPointOfSalesJSON = {
    byDistance: true,
    byCheapFigurine: false,
    byMostStock: false,
    byClosestPlaces: false
  }

  constructor(public pointOfSaleService: PointOfSaleService) { }

  async filterPointOfSale(event: FilterPointOfSalesJSON) {
    this.filterPointOfSalesJSON = event
    this.pointOfSales = await this.pointOfSaleService.getAllByTitle(this.searchByName, this.filterPointOfSalesJSON)
  }

  async searchByTitle(event: string) {
    this.searchByName = event
    this.pointOfSales = await this.pointOfSaleService.getAllByTitle(this.searchByName, this.filterPointOfSalesJSON)
  }

  async ngOnInit() {
    this.pointOfSales = await this.pointOfSaleService.getAllByTitle(this.searchByName, this.filterPointOfSalesJSON)
  }
}