import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FilterComponent } from './filter.component'

let fixture: ComponentFixture<FilterComponent>
let component: FilterComponent

describe('FilterComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterComponent]
    })
    fixture = TestBed.createComponent(FilterComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('checkboxes inicializacion',()=>{
    const checkBoxOnFire = getElementByDataTestId("filter-first-checkbox")
    const checkBoxEsPromesa = getElementByDataTestId("filter-second-checkbox")

    expect(checkBoxEsPromesa.checked).toBeFalse()
    expect(checkBoxOnFire.checked).toBeFalse()
  })

  it('inputs inicializacion',()=>{
    const checkBoxDesde = getElementByDataTestId("filter-desde")
    const checkBoxHasta = getElementByDataTestId("filter-hasta")
    expect(checkBoxDesde.textContent).toBe('')
    expect(checkBoxHasta.textContent).toBe('')
  })

  it('evento click en checkbox',()=>{
    const checkBoxOnFire = getElementByDataTestId("filter-first-checkbox")
    checkBoxOnFire.click()
    fixture.detectChanges()
    expect(checkBoxOnFire.checked).toBeTrue()
  })

  it('input cambia de valor',()=>{
    const checkBoxDesde = getElementByDataTestId("filter-desde")
    const checkBoxHasta = getElementByDataTestId("filter-hasta")
    checkBoxDesde.textContent = "200"
    checkBoxHasta.textContent = "350"
    fixture.detectChanges()
    expect(checkBoxDesde.textContent).toBe("200")
    expect(checkBoxHasta.textContent).toBe("350")
  })
})

function getElementByDataTestId(dataTestId:string){
  //Retorna el elemento HTML que coincida con ese dataTestId pasado por parametros
  return fixture.debugElement.nativeElement.querySelector(`[data-testid="${dataTestId}"]`)
}