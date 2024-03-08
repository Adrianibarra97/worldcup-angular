import { ComponentFixture, TestBed } from '@angular/core/testing'
import { PointOfSaleComponent } from './pointOfSale.component'
import { PointOfSale } from './../../domain/pointOfSale'
import { LocationPointOfSale } from 'src/app/domain/LocationPointOfSale'
import { FormsModule } from '@angular/forms'

let component: PointOfSaleComponent
let fixture: ComponentFixture<PointOfSaleComponent>

describe('PointOfSaleComponent', () => {
  const pointOfSale: PointOfSale = new PointOfSale(
    1,
    "Kiosko Los Pibes!",
    100,
    new LocationPointOfSale(
      19.2312312321,
      58.93821938192,
      "Av. Monroe",
      2543,
      "CABA",
      "Buenos Aires"
    ),
    "fa-solid fa-basket-shopping",
    1,
    1,
    10
  )

  const pointOfSaleError: PointOfSale = new PointOfSale(
    1,
    "Kiosko Los Pibes!",
    -1,
    new LocationPointOfSale(
      -50.012312,
      -12.0332321321,
      "Blanco Encalada",
      4650,
      "Villa Urquiza",
      "Buenos Aires"
    ),
    "fa-solid fa-basket-shopping",
    1,
    0,
    10
  )

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PointOfSaleComponent],
      imports: [
        FormsModule
      ]
    })
    fixture = TestBed.createComponent(PointOfSaleComponent)
    component = fixture.componentInstance
    component.pointOfSale = pointOfSale
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('La cantidad de stock de sobres es mayor a 0', () => {
    const cantidadSobres = component.pointOfSale.stockEnvelopes
    expect(cantidadSobres).toBeGreaterThan(0)
  })

  it('La cantidad de stock de sobres es menor a 0', () => {
    component.pointOfSale = pointOfSaleError
    const cantidadSobres = component.pointOfSale.stockEnvelopes
    expect(cantidadSobres).toBeLessThan(0)
  })

  it('La cantidad de stock de sobres es 100', () => {
    const cantidad = component.pointOfSale.stockEnvelopes
    const cantidadSobres = fixture
      .debugElement.nativeElement.querySelector('[data-testid = "stockEnvelopes"]')
     expect(cantidadSobres.textContent).toBe('Stock de Sobres: ' + cantidad)
  })

  it('La cantidad de stock de sobres es menor a 0', () => 
  {
    component.pointOfSale = pointOfSaleError
    const cantidad = component.pointOfSale.stockEnvelopes
    fixture.detectChanges()
    const cantidadSobres = fixture
      .debugElement.nativeElement.querySelector('[data-testid = "stockEnvelopes"]')
     expect(cantidadSobres.textContent).toBe('Stock de Sobres: ' + cantidad)
  })

  it('El precio por sobre debe ser mayor o igual a cero', () => {
    const precioPorSobre = component.pointOfSale.precioPorSobre
    expect(precioPorSobre).toBeGreaterThanOrEqual(0)
  })

  it('El precio por sobre es de $1 ', () => {
    const precio = component.pointOfSale.precioPorSobre
    const precioPorSobre = fixture
      .debugElement.nativeElement.querySelector('[data-testid = "priceEnvelopes"]')
     expect(precioPorSobre.textContent).toBe('Precio por sobre ' + '$' + precio)
  })

  it('El precio por sobre es de $0 ', () => {
    component.pointOfSale = pointOfSaleError
    const precio = component.pointOfSale.precioPorSobre
    fixture.detectChanges()
    const precioPorSobre = fixture
      .debugElement.nativeElement.querySelector('[data-testid = "priceEnvelopes"]')
     expect(precioPorSobre.textContent).toBe('Precio por sobre ' + '$' + precio)
  })


  it('La cantidad de pedidos pendientes debe ser positiva', () => {
    const pedidosPendientes = component.pointOfSale.pedidosPendientes
    expect(pedidosPendientes).toBeGreaterThan(0)
  })

  it('La cantidad de pedidos pendientes debe ser 10 unidades', () => {
    const pedidosPendientes = component.pointOfSale.pedidosPendientes
    const cantidadPedidosPendientes = fixture
      .debugElement.nativeElement.querySelector('[data-testid = "amountOrders"]')
     expect(cantidadPedidosPendientes.textContent).toBe('Pedidos Pendientes: ' + pedidosPendientes + ' unidades ')
  })

  it('La ubicación geográfica X debe estar definida', () => {
    const ubicacionGeograficaX = component.pointOfSale.locationPointOfSale.geographicLocationX
    expect(ubicacionGeograficaX).toBeDefined()
  })

  it('La ubicación geográfica X debe ser menor o igual a cero', () => {
    component.pointOfSale = pointOfSaleError
    const ubicacionGeograficaX = component.pointOfSale.locationPointOfSale.geographicLocationX
    fixture.detectChanges()
    expect(ubicacionGeograficaX).toBeLessThanOrEqual(0)
  })

  it('La ubicación geográfica X debe ser mayor a cero', () => {
    const ubicacionGeograficaX = component.pointOfSale.locationPointOfSale.geographicLocationX
    expect(ubicacionGeograficaX).toBeGreaterThanOrEqual(0)
  })

  it('La ubicación geográfica Y debe estar definida', () => {
    const ubicacionGeograficaY = component.pointOfSale.locationPointOfSale.geographicLocationY
    expect(ubicacionGeograficaY).toBeDefined()
  })

  it('La ubicación geográfica Y debe ser menor o igual a cero', () => {
    component.pointOfSale = pointOfSaleError
    const ubicacionGeograficaY = component.pointOfSale.locationPointOfSale.geographicLocationY
    fixture.detectChanges()
    expect(ubicacionGeograficaY).toBeLessThanOrEqual(0)
  })

  it('La ubicación geográfica Y debe ser mayor a cero', () => {
    const ubicacionGeograficaY = component.pointOfSale.locationPointOfSale.geographicLocationY
    expect(ubicacionGeograficaY).toBeGreaterThanOrEqual(0)
  })


  it('La calle debe esta definida', () => {
    const calle = component.pointOfSale.locationPointOfSale.street
    expect(calle).toBeDefined()
  })

  it('La calle debe ser Av. Monroe', () => {
    const calle = component.pointOfSale.locationPointOfSale.street
    expect(calle).toBe('Av. Monroe')
  })

  it('La altura de la calle debe ser un número positivo', () => {
    const alturaCalle = component.pointOfSale.locationPointOfSale.streetHeight
    expect(alturaCalle).toBeGreaterThan(0)
  })

  it('La localidad debe esta definida', () => {
    const localidad = component.pointOfSale.locationPointOfSale.location
    expect(localidad).toBeDefined()
  })

  it('La localidad debe ser CABA', () => {
    const localidad = component.pointOfSale.locationPointOfSale.location
    expect(localidad).toBe('CABA')
  })

  it('La provincia debe esta definida', () => {
    const provincia = component.pointOfSale.locationPointOfSale.province
    expect(provincia).toBeDefined()
  })

  it('El nombre del punto de venta debe estar definido', () => {
    const nombrePointOfSale = component.pointOfSale.name
    expect(nombrePointOfSale).toBeDefined()
  })
})
