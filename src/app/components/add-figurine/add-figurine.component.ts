import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { Figurine } from 'src/app/domain/figurine'
import { FigurineService } from 'src/app/services/figurine/figurine.service'

@Component({
  selector: 'app-add-figurine',
  templateUrl: './add-figurine.component.html',
  styleUrls: ['./add-figurine.component.css']
})
export class AddFigurineComponent {

  public figurines!: Figurine[]
  public selectIsActive: boolean = false
  public SelectedValue: string = '0'

  constructor(
    private router: Router,
    private figurineService: FigurineService
  ) { }

  desactiveSelect() {
    this.selectIsActive = false
  }

  async handlerChangeSelect() {
    this.selectIsActive = false

    if(this.router.url == '/profile/missing-figurines') {
      this.figurineService.requestMissingFigurine(parseInt(this.SelectedValue))
      this.router.navigateByUrl('/home')
    }

    if(this.router.url == '/profile/repeated-figurines') {
      this.figurineService.requestRepeatedFigurine(parseInt(this.SelectedValue))
      this.router.navigateByUrl('/home')
    }
  }

  async handleClick() {
    this.selectIsActive = true

    if(this.router.url == '/profile/missing-figurines') {
      this.figurines = await this.figurineService.getRepeatedFigurines()
    }

    if(this.router.url == '/profile/repeated-figurines') {
      this.figurines = await this.figurineService.getMissingFigurines()
    }
  }
}