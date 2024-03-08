import { Component, Input } from '@angular/core'
import { Router } from '@angular/router'
import { Figurine } from 'src/app/domain/figurine'
import { FigurineService } from 'src/app/services/figurine/figurine.service'


@Component({
  selector: 'app-big-figurine',
  templateUrl: './big-figurine.component.html',
  styleUrls: ['./big-figurine.component.css']
})
export class BigFigurineComponent {

  @Input() figurine!: Figurine
  @Input() hasFigurineRepeated!: boolean
  public repeatedFigurines: Figurine[] = []
  
  constructor(private router: Router, private figurineService: FigurineService) { }

  async requestHandler(): Promise<void> {
    await this.figurineService.requestFigurine(this.figurine.id)
    this.repeatedFigurines = await this.figurineService.getRepeatedFigurines()
    this.router.navigateByUrl('/home')
  }
}
