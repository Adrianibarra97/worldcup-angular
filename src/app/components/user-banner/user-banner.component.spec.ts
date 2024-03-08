import { ComponentFixture, TestBed } from '@angular/core/testing'
import { UserBannerComponent } from './user-banner.component'
import { User } from 'src/app/domain/user'

describe('UserBannerComponent', () => {
  let component: UserBannerComponent
  let fixture: ComponentFixture<UserBannerComponent>
  const user: User = User.fromJSON({
		"id": 0,
		"username": "juli123",
		"nombre": "Julian",
		"apellido": "Gonzalez",
		"fechaNacimiento": "12/02/1991",
		"direccionMail": "juligon@gmail.com",
		"domicilioUsuario": {
				"ubicacionGeograficaX": 12,
				"ubicacionGeograficaY": 32,
				"calle": "Pedro Ortega 234", 
				"altura": 2342,
				"localidad": "San Martín",
				"provincia": "Bs As"
		},
		"maxDistanciaConOtroUsuario": 12,
    "url": "https://login/yawe"
	})

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserBannerComponent]
    })
    fixture = TestBed.createComponent(UserBannerComponent)
    component = fixture.componentInstance
    component.user = user
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('The user name is:', () => {
    //Arrange
    const inputName = fixture
    .debugElement.nativeElement.querySelector('[data-testid = "name"]')

    //Act
    inputName.textContent = "eze"
    
    //Assert
    expect(inputName.textContent).toBe('eze')
  })

  it('The age is:', () => {
    //Arrange
    const inputAge = fixture
    .debugElement.nativeElement.querySelector('[data-testid = "age"]')

    //Act
    inputAge.textContent = "31"
    
    //Assert
    expect(inputAge.textContent).toBe('31')
  })

  it('The ubication is:', () => {
    //Arrange
    const inputUbication = fixture
    .debugElement.nativeElement.querySelector('[data-testid = "ubication"]')

    //Act
    inputUbication.textContent = "Villa Urquiza"
    
    //Assert
    expect(inputUbication.textContent).toBe('Villa Urquiza')
  })
})
