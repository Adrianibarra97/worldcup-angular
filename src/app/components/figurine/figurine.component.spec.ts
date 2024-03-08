import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FigurineComponent } from './figurine.component'
import { Figurine } from 'src/app/domain/figurine'
import { Player } from 'src/app/domain/player'
import { NationalTeam } from 'src/app/domain/NationalTeam'
import { RouterTestingModule } from '@angular/router/testing'
import { Router } from '@angular/router'

let fixture: ComponentFixture<FigurineComponent>

describe('FigurineComponent', () => {
  let component: FigurineComponent
  const figurine: Figurine = new Figurine(
    1,
    124,
    "BAJA",
    true,
    new Player(
      20,
      "Eze",
      "Iozzia",
      new Date("1991/12/01"),
      10,
      new NationalTeam(
        1,
        "Argentina",
        "CONMEBOL",
        10
      ),
      2005,
      1.78,
      85.0,
      "Delantero",
      1000000000,
      140,
      false,
      false,
    ),
    ""
  )
  let routerSpy: Router
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FigurineComponent],
      imports: [RouterTestingModule]
    })
    fixture = TestBed.createComponent(FigurineComponent)
    component = fixture.componentInstance
    routerSpy = TestBed.inject(Router)
    component.figurine = figurine
    component.trashDisplay = true
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('al clickear la zona de informacion de la figurita, comprobamos su ruta/path ',()=>{
    const navSpy = spyOn(routerSpy, 'navigateByUrl')
    //
    const infoFigurita = getElementByDataTestId("figurine-information_1")
    infoFigurita.click()
    //
    expect(navSpy.calls.mostRecent().args[0].toString()).toEqual('/detail-figurine/1')
  })
})
function getElementByDataTestId(dataTestId:string){
  //Retorna el elemento HTML que coincida con ese dataTestId pasado por parametros
  return fixture.debugElement.nativeElement.querySelector(`[data-testid="${dataTestId}"]`)
}
