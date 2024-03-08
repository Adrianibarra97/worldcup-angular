import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FigurineTemplateComponent } from './figurine-template.component'
import { BigFigurineComponent } from 'src/app/components/big-figurine/big-figurine.component'
import { RouterModule } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'
import { Figurine } from 'src/app/domain/figurine'

describe('FigurineTemplateComponent', () => {
  let component: FigurineTemplateComponent
  let fixture: ComponentFixture<FigurineTemplateComponent>
  const figurine: Figurine = Figurine.fromJSONDefault({
    "id": 1,
    "numero": 2,
    "nivelImpresion": "BAJA",
    "onFire": true,
    "url": "",
    "jugador": {
      "id":1,
      "nombre": "Nicolas",
      "apellido": "Stebner",
      "fechaNacimiento": "2001-09-20",
      "numeroCamiseta": 5,
      "seleccion": {
        "id":1,
        "pais": "Peru",
        "nombreConfederacion": "CONMEBOL",
        "copasDelMundo": 0
      },
      "anioDebut": 2015,
      "altura": 1.82,
      "peso": 80.0,
      "posicion":"defensor",
      "valoracion":1500,
      "esLider":true,
      "cotizacion": 1.0E7,
      "esPromesa":false
    }
  })

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        FigurineTemplateComponent,
        BigFigurineComponent
      ],
      imports: [
        RouterModule,
        RouterTestingModule
      ],
    })
    fixture = TestBed.createComponent(FigurineTemplateComponent)
    component = fixture.componentInstance
    component.figurine = figurine
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
