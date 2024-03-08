import { Component, OnInit } from '@angular/core'
import { Figurine, FilterFigurineJSON } from 'src/app/domain/figurine'
import { FigurineService } from 'src/app/services/figurine/figurine.service'

@Component({
  selector: 'app-search-figurines',
  templateUrl: './search-figurines.component.html',
  styleUrls: ['./search-figurines.component.css']
})
export class SearchFigurinesComponent implements OnInit {

  public figurines: Figurine[] = []
  private searchByName: string = ''
  private filterFigurineJSON: FilterFigurineJSON = {
    esPromesa: false,
    esOnFire: false,
    valoracionMin: 0,
    valoracionMax: 9999
  }

  constructor(public figurineService: FigurineService) { }

  async filterFigurines(event: FilterFigurineJSON) {
    this.filterFigurineJSON = event
    this.figurines = await this.figurineService.getAllByTitle(this.searchByName, this.filterFigurineJSON)
  }

  async searchByTitle(event: string){
    this.searchByName = event
    this.figurines = await this.figurineService.getAllByTitle(this.searchByName, this.filterFigurineJSON)
  }

  async ngOnInit() {
    this.figurines = await this.figurineService.getAllByTitle(this.searchByName, this.filterFigurineJSON)
  }
}