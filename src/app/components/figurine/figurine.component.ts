import { Component, Input } from '@angular/core'
import { Router } from '@angular/router'
import { Figurine } from 'src/app/domain/figurine'
import { FigurineService } from 'src/app/services/figurine/figurine.service'

@Component({
  selector: 'app-figurine',
  templateUrl: './figurine.component.html',
  styleUrls: ['./figurine.component.css']
})
export class FigurineComponent {

  @Input() figurine!: Figurine
  @Input() trashDisplay!: boolean

  constructor(
    private figurineService: FigurineService,
    private router: Router  
  ) { }

  handlerDelete() {
    this.figurineService.deleteFigurine(this.figurine.id)
    this.router.navigateByUrl('/home')
  }
}