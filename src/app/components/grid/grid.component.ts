import { Component, Input } from '@angular/core'
import { Figurine } from 'src/app/domain/figurine'
import { PointOfSale } from 'src/app/domain/pointOfSale'
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {

  @Input() content: Array<Figurine | PointOfSale> = []
  @Input() addFigurineDisplay: boolean = false
  @Input() trashDisplay: boolean = false

  isFigurine(item: Figurine | PointOfSale): item is Figurine {
    return item instanceof Figurine
  }

  isPointOfSale(item: Figurine | PointOfSale): item is PointOfSale {
    return item instanceof PointOfSale
  }

}