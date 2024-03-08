import { Component, OnInit } from '@angular/core'
import { Figurine } from 'src/app/domain/figurine'
import { FigurineService } from 'src/app/services/figurine/figurine.service'

@Component({
  selector: 'app-missing-figurines',
  templateUrl: './missing-figurines.component.html',
  styleUrls: ['./missing-figurines.component.css']
})
export class MissingFigurinesComponent implements OnInit {
  
  public figurines: Figurine[] = []
  public addFigurineDisplay: boolean = true
  public trashDisplay: boolean = true

  constructor(public figurineService: FigurineService) { }

  async ngOnInit() {
    this.figurines = await this.figurineService.getMissingFigurines()
  }
}
