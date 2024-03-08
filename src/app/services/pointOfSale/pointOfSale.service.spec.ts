import { TestBed } from '@angular/core/testing'
import { PointOfSaleService } from './pointOfSale.service'
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from 'src/app/app-routing.module'
import { pointOfSaleHttpClientSpy } from './pointOfSaleHttpClientSpy'
import { PointOfSaleServiceRest } from './pointOfSale.rest.service'
import { FilterPointOfSalesJSON } from 'src/app/domain/pointOfSale'
import { AuthService } from '../auth/auth.service'
import { AuthServiceRest } from '../auth/auth.rest.service'

describe('PointOfSaleService', () => {
  let pointOfSaleService!: PointOfSaleService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        AppRoutingModule
      ],
      providers: [
        { provide: HttpClient, useValue: pointOfSaleHttpClientSpy },
        { provide: AuthService, useClass: AuthServiceRest }
      ]
    })
    pointOfSaleService = TestBed.inject(PointOfSaleServiceRest)  
  })

  it('should be created', () => {
    expect(PointOfSaleService).toBeTruthy()
  })

  it('Devuelve todos los puntos de venta', async () => {
    //Act
    const pointsOfSales = await pointOfSaleService.getAll()

    //Assert
    expect(pointsOfSales.length).toBeGreaterThan(0)
  })

  it('Devuelve un punto de venta Kiosko', async () => {
    //Act
    const pointsOfSales = await pointOfSaleService.getOneById(2)

    //Assert
    expect(pointsOfSales.name).toBe('Kiosko Los Pibe!')
  })

  it('Busqueda de punto de venta con todos los filtros desactivados', async () => {
    //Arrange
    const pointOfSaleJSON: FilterPointOfSalesJSON = {
      byDistance: false,
      byCheapFigurine: false,
	    byMostStock: false,
	    byClosestPlaces: false
    }
    
    //Act
    let errorMessage = ""
    await pointOfSaleService.getFilterBy(pointOfSaleJSON).catch(error => errorMessage = error)
    
    //Assert
    expect(errorMessage).toBe("Error code: 401\nNo puede acceder a la información!")
  })

})