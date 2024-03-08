import { ComponentFixture, TestBed } from '@angular/core/testing'
import { BrowserComponent } from './browser.component'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

let fixture: ComponentFixture<BrowserComponent>
let component: BrowserComponent

describe('BrowserComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrowserComponent],
      imports: [HttpClientModule, FormsModule]
    })
    fixture = TestBed.createComponent(BrowserComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('input inicializacion',()=>{
    const inputEl = getElementByDataTestId("browser-input")
    expect(inputEl.textContent).toBe('')
  })

  it('input detecta un cambio',()=>{
    const inputEl = getElementByDataTestId("browser-input")
    inputEl.textContent = "test-nombre-jugador"
    fixture.detectChanges()
    expect(inputEl.textContent).toBe("test-nombre-jugador")
  })
})

function getElementByDataTestId(dataTestId:string){
  //Retorna el elemento HTML que coincida con ese dataTestId pasado por parametros
  return fixture.debugElement.nativeElement.querySelector(`[data-testid="${dataTestId}"]`)
}
