import { ComponentFixture, TestBed } from '@angular/core/testing'
import { EnvelopesFilterComponent } from './envelopes-filter.component'

describe('EnvelopesFilterComponent', () => {
  let component: EnvelopesFilterComponent
  let fixture: ComponentFixture<EnvelopesFilterComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnvelopesFilterComponent]
    })
    fixture = TestBed.createComponent(EnvelopesFilterComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('The filter title is: ', () => {
    //Arrange
    const inputFilter = fixture
    .debugElement.nativeElement.querySelector('[data-testid = "filter-title"]')

    //Assert
    expect(inputFilter.textContent).toBe('Ordenar')
  })

  it('The label menor distance title is: ', () => {
    //Arrange
    const inputLabelMenorDistancia = fixture
    .debugElement.nativeElement.querySelector('[data-testid = "label-menor-distancia"]')

    //Assert
    expect(inputLabelMenorDistancia.textContent).toBe('Menor Distancia')
  })

  it('The label most cheaper title is: ', () => {
    //Arrange
    const inputLabelMasBarato = fixture
    .debugElement.nativeElement.querySelector('[data-testid = "label-mas-barato"]')

    //Assert
    expect(inputLabelMasBarato.textContent).toBe('Más Barato')
  })

  it('The label most envelops title is: ', () => {
    //Arrange
    const inputLabelMasSobres = fixture
    .debugElement.nativeElement.querySelector('[data-testid = "label-mas-sobres"]')

    //Assert
    expect(inputLabelMasSobres.textContent).toBe('Más Sobres')
  })

  it('The label most close title is: ', () => {
    //Arrange
    const inputLabelMasCercanos = fixture
    .debugElement.nativeElement.querySelector('[data-testid = "label-mas-cercanos"]')

    //Assert
    expect(inputLabelMasCercanos.textContent).toBe('Sólo los más cercanos')
  })

  it('The menor distance is selected: ', () => {
    //Arrange
    const inputMenorDistance = fixture
    .debugElement.nativeElement.querySelector('[data-testid = "menor-distance"]')

    //Act
    inputMenorDistance.click()
    fixture.detectChanges()

    //Assert
    expect(component.filterPointOfSaleJSON.byDistance).toBeTruthy()
    expect(component.filterPointOfSaleJSON.byCheapFigurine).toBeFalsy()
    expect(component.filterPointOfSaleJSON.byClosestPlaces).toBeFalsy()
    expect(component.filterPointOfSaleJSON.byMostStock).toBeFalsy()
  })

  it('The most cheaper is selected: ', () => {
    //Arrange
    const inputMostCheaper = fixture
    .debugElement.nativeElement.querySelector('[data-testid = "most-cheaper"]')

    //Act
    inputMostCheaper.click()
    fixture.detectChanges()

    //Assert
    expect(component.filterPointOfSaleJSON.byClosestPlaces).toBeFalsy()
    expect(component.filterPointOfSaleJSON.byCheapFigurine).toBeTruthy()
    expect(component.filterPointOfSaleJSON.byClosestPlaces).toBeFalsy()
    expect(component.filterPointOfSaleJSON.byMostStock).toBeFalsy()
  })

  it('The most stock is selected: ', () => {
    //Arrange
    const inputMostStock = fixture
    .debugElement.nativeElement.querySelector('[data-testid = "most-stock"]')

    //Act
    inputMostStock.click()
    fixture.detectChanges()

    //Assert
    expect(component.filterPointOfSaleJSON.byClosestPlaces).toBeFalsy()
    expect(component.filterPointOfSaleJSON.byCheapFigurine).toBeFalsy()
    expect(component.filterPointOfSaleJSON.byClosestPlaces).toBeFalsy()
    expect(component.filterPointOfSaleJSON.byMostStock).toBeTruthy()
  })

  it('The closest places  is selected: ', () => {
    //Arrange
    const inputClosestPlaces = fixture
    .debugElement.nativeElement.querySelector('[data-testid = "closest-places"]')

    //Act
    inputClosestPlaces.click()
    fixture.detectChanges()

    //Assert
    expect(component.filterPointOfSaleJSON.byDistance).toBeFalsy()
    expect(component.filterPointOfSaleJSON.byCheapFigurine).toBeFalsy()
    expect(component.filterPointOfSaleJSON.byClosestPlaces).toBeTruthy()
    expect(component.filterPointOfSaleJSON.byMostStock).toBeFalsy()
  })
  
})