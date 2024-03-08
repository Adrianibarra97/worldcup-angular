import { Component, OnInit } from '@angular/core'
import { Figurine } from 'src/app/domain/figurine'
import { FigurineService } from 'src/app/services/figurine/figurine.service'
@Component({
  selector: 'app-repeated-figurines',
  templateUrl: './repeated-figurines.component.html',
  styleUrls: ['./repeated-figurines.component.css']
})
export class RepeatedFigurinesComponent implements OnInit {
  public figurines: Figurine[] = []
  public addFigurineDisplay: boolean = true
  public trashDisplay: boolean = true

  constructor(public figurineService: FigurineService) { }

  async ngOnInit() {
    this.figurines = await this.figurineService.getRepeatedFigurines()
  }
}
