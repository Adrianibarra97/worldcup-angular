import { ComponentFixture, TestBed} from '@angular/core/testing'
import { SearchFigurinesComponent } from './search-figurines.component'
import { BrowserComponent } from 'src/app/components/browser/browser.component'
import { FilterComponent } from 'src/app/components/filter/filter.component'
import { GridComponent } from 'src/app/components/grid/grid.component'
import { FigurineComponent } from 'src/app/components/figurine/figurine.component'
import { AppRoutingModule } from 'src/app/app-routing.module'
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { figuritaServiceStub, httpClientSpy } from 'src/app/services/figurine/figurineHttpClientSpy'
import { FigurineService } from 'src/app/services/figurine/figurine.service'

let fixture: ComponentFixture<SearchFigurinesComponent>

describe('SearchFigurinesComponent', () => {
  let component: SearchFigurinesComponent
  
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [
        SearchFigurinesComponent,
        BrowserComponent,
        FilterComponent,
        GridComponent,
        FigurineComponent
      ],
      imports: [AppRoutingModule,HttpClientModule,FormsModule],
      providers:[
        {provide: FigurineService, useValue: figuritaServiceStub}
      ]
    })
    fixture = TestBed.createComponent(SearchFigurinesComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
    await fixture.whenStable()
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('checkbox on fire es clickeado',async ()=>{
    const checkBoxOnFire = getElementByDataTestId("filter-first-checkbox")
    checkBoxOnFire.click()
    
    await component.filterFigurines({
      esPromesa: false,
      esOnFire: checkBoxOnFire.checked,
      valoracionMin: 0,
      valoracionMax: 9999999
    })

    expect(checkBoxOnFire.checked).toBeTrue()
    expect(component.figurines.length).toBe(2)
    expect(component.figurines[0].onFire).toBeTrue()
  })
  
  it('checkbox promesa es clickeado', async()=>{
    const checkBoxPromesa = getElementByDataTestId("filter-second-checkbox")
    checkBoxPromesa.click()
    
    await component.filterFigurines({
      esPromesa: checkBoxPromesa.checked,
      esOnFire: false,
      valoracionMin: 0,
      valoracionMax: 9999999
    })

    expect(checkBoxPromesa.checked).toBeTrue()
    expect(component.figurines.length).toBe(2)
  })
  it('checkboxes promesa y onFire clickeados',async()=>{
    const checkBoxOnFire = getElementByDataTestId("filter-first-checkbox")
    const checkBoxPromesa = getElementByDataTestId("filter-second-checkbox")
    checkBoxPromesa.click()
    checkBoxOnFire.click()
    
    await component.filterFigurines({
      esPromesa: checkBoxPromesa.checked,
      esOnFire: checkBoxOnFire.checked,
      valoracionMin: 0,
      valoracionMax: 9999999
    })

    expect(component.figurines.length).toBe(1)
  })
  
  it('inputs desde y hasta, se verifica que la respuesta sea correcta',async()=>{
    const desdeInput = getElementByDataTestId("filter-desde")
    const hastaInput = getElementByDataTestId("filter-hasta")
    
    desdeInput.textContent = 250
    hastaInput.textContent = 700
    fixture.detectChanges()

    await component.filterFigurines({
      esPromesa: false,
      esOnFire: false,
      valoracionMin: parseInt(desdeInput.textContent),
      valoracionMax: parseInt(hastaInput.textContent)
    })

    expect(+desdeInput.textContent).toBe(250)
    expect(+hastaInput.textContent).toBe(700)
    expect(component.figurines.length).toBe(4)
  })

  it('realizar una busqueda por string', async()=>{
    const palabra:string = "test"
    component.figurines = await component.figurineService.getAllByTitle(palabra,{
      esPromesa: false,
      esOnFire: false,
      valoracionMin: 0,
      valoracionMax: 9999999
    })
    const nombreToLowerCase = component.figurines[0].player.name.toLocaleLowerCase()
    expect(component.figurines.length).toBe(2)
    expect(nombreToLowerCase).toBe(palabra)
  })

})

function getElementByDataTestId(dataTestId:string){
  //Retorna el elemento HTML que coincida con ese dataTestId pasado por parametros
  return fixture.debugElement.nativeElement.querySelector(`[data-testid="${dataTestId}"]`)
}