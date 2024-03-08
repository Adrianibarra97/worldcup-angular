import { Component, Input } from '@angular/core'
import { PointOfSale } from 'src/app/domain/pointOfSale'

@Component({
  selector: 'app-pointOfSale',
  templateUrl: './pointOfSale.component.html',
  styleUrls: ['./pointOfSale.component.css']
})
export class PointOfSaleComponent {

  @Input() pointOfSale!: PointOfSale
}