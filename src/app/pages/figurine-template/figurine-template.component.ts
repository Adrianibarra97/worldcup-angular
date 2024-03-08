import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Figurine } from 'src/app/domain/figurine'
import { FigurineService } from 'src/app/services/figurine/figurine.service'
@Component({
  selector: 'app-figurine-template',
  templateUrl: './figurine-template.component.html',
  styleUrls: ['./figurine-template.component.css']
})
export class FigurineTemplateComponent implements OnInit {
  public figurine: Figurine = Figurine.fromJSON({
    "id": 0,
    "numero": 0,
    "nivelImpresion": "",
    "onFire": false,
    "url": "",
    "jugador": {
      "id":0,
      "nombre": "",
      "apellido": "",
      "fechaNacimiento": "",
      "numeroCamiseta": 0,
      "seleccion": {
        "id": 0,
        "pais": "",
        "nombreConfederacion": "",
        "copasDelMundo": 0
      },
      "anioDebut": 0,
      "altura": 0,
      "peso": 0,
      "posicion":"",
      "valoracion":0,
      "esLider": false,
      "cotizacion": 0,
      "esPromesa": false
    },
    "cedidaPor": {
      "nombre": "",
      "apellido": ""
    }
  })
  public repeatedFigurines: Figurine[] = []
  
  constructor (public figurineService: FigurineService, private route: ActivatedRoute) { }
  
  async ngOnInit() {
    const figurineId: number = +this.route.snapshot.params['id']
    this.figurine = await this.figurineService.getOneById(figurineId)
    this.repeatedFigurines = await this.figurineService.getRepeatedFigurines()
  }

  hasFigurineRepeated(): boolean {
    return this.repeatedFigurines.filter(figurine => figurine.id == this.figurine.id).length > 0
  }
}