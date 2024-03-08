import { ComponentFixture, TestBed } from '@angular/core/testing'
import { UserInformationFormComponent } from './user-information-form.component'
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { User } from 'src/app/domain/user'

describe('UserInformationFormComponent', () => {
  let component: UserInformationFormComponent
  let fixture: ComponentFixture<UserInformationFormComponent>
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
    "url": ""
	})
  const formBuilder: FormBuilder = new FormBuilder()
  const newUser: FormGroup = formBuilder.group({
    name: '',
    surname: '',
    birthOfDate: "1997/03/30",
    emailAddress: '',
    geographicLocationX: '', 
    geographicLocationY: '',
    street: '',
    streetHeight: '',
    location: '',
    province: '',
    maxDistanceBetweenOtherUser: '',
    criterio: ''
  })
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserInformationFormComponent],
      imports: [ReactiveFormsModule]
    })
    fixture = TestBed.createComponent(UserInformationFormComponent)
    component = fixture.componentInstance
    component.newUser = newUser
    component.user = user
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('The title is: ', () => { 
    const title = fixture
      .debugElement.nativeElement.querySelector('[data-testid = "title"]')
     expect(title.textContent).toBe('Información general')
  })

  it('The name is: ', () => {
    //Arrange
    const inputName = fixture
      .debugElement.nativeElement.querySelector('[data-testid = "name"]')

    //Act
    inputName.textContent = "Joaquín"
    fixture.detectChanges()

    //Assert
     expect(inputName.textContent).toBe('Joaquín')
  })

  it('The surname is: ', () => {
    //Arrange
    const inputSurname = fixture
      .debugElement.nativeElement.querySelector('[data-testid = "surname"]')

    //Act
    inputSurname.textContent = "Iozzia"
    fixture.detectChanges()

    //Assert
     expect(inputSurname.textContent).toBe('Iozzia')
  })

  it('The email address is: ', () => {
    //Arrange
    const inputEmail = fixture
      .debugElement.nativeElement.querySelector('[data-testid = "emailAddress"]')

    //Act
    inputEmail.textContent = "eiozzia@estudiantes.unsam.edu.ar"
    fixture.detectChanges()

    //Assert
     expect(inputEmail.textContent).toBe('eiozzia@estudiantes.unsam.edu.ar')
  })

  it('The date of birth is: ', () => {
    //Arrange
    const inputBirthOfDate = fixture
      .debugElement.nativeElement.querySelector('[data-testid = "birthOfDate"]')

    //Act
    inputBirthOfDate.textContent = "01/12/1991"
    fixture.detectChanges()

    //Assert
     expect(inputBirthOfDate.textContent).toBe('01/12/1991')
  })

  it('The address is: ', () => {
    //Arrange
    const inputAdress = fixture
      .debugElement.nativeElement.querySelector('[data-testid = "address"]')

    //Assert
     expect(inputAdress.textContent).toBe('Dirección')
  })

  it('The province is: ', () => {
    //Arrange
    const inputProvince = fixture
      .debugElement.nativeElement.querySelector('[data-testid = "province"]')

    //Act
    inputProvince.textContent = "Mendoza"
    fixture.detectChanges()

    //Assert
     expect(inputProvince.textContent).toBe('Mendoza')
  })

  it('The street is: ', () => {
    //Arrange
    const inputStreet = fixture
      .debugElement.nativeElement.querySelector('[data-testid = "street"]')

    //Act
    inputStreet.textContent = "Av. Olazabal"
    fixture.detectChanges()

    //Assert
     expect(inputStreet.textContent).toBe('Av. Olazabal')
  })

  it('The location is: ', () => {
    //Arrange
    const inputLocation = fixture
      .debugElement.nativeElement.querySelector('[data-testid = "location"]')

    //Act
    inputLocation.textContent = "Balcarce"
    fixture.detectChanges()

    //Assert
     expect(inputLocation.textContent).toBe('Balcarce')
  })

  it('The streetHeight is: ', () => {
    //Arrange
    const inputStreetHeight = fixture
      .debugElement.nativeElement.querySelector('[data-testid = "streetHeight"]')

    //Act
    inputStreetHeight.textContent = "2435"
    fixture.detectChanges()

    //Assert
     expect(inputStreetHeight.textContent).toBe('2435')
  })

  it('The geographic Location is: ', () => {
    //Arrange
    const inputGeographicLocation = fixture
      .debugElement.nativeElement.querySelector('[data-testid = "geographicLocation"]')

    //Assert
     expect(inputGeographicLocation.textContent).toBe('Ubicación geográfica')
  })

  it('The geographic location X is: ', () => {
    //Arrange
    const inputGeographicLocationX = fixture
      .debugElement.nativeElement.querySelector('[data-testid = "geographicLocationX"]')

    //Act
    inputGeographicLocationX.textContent = "50"
    fixture.detectChanges()

    //Assert
     expect(inputGeographicLocationX.textContent).toBe('50')
  })

  it('The geographic location Y is: ', () => {
    //Arrange
    const inputGeographicLocationY = fixture
      .debugElement.nativeElement.querySelector('[data-testid = "geographicLocationY"]')

    //Act
    inputGeographicLocationY.textContent = "21"
    fixture.detectChanges()

    //Assert
     expect(inputGeographicLocationY.textContent).toBe('21')
  })

  it('The max distance between other user is: ', () => {
    //Arrange
    const inputMaxDistance = fixture
      .debugElement.nativeElement.querySelector('[data-testid = "maxDistanceBetweenOtherUser"]')

    //Act
    inputMaxDistance.textContent = "200"
    fixture.detectChanges()

    //Assert
     expect(inputMaxDistance.textContent).toBe('200')
  })

  it('The criterio is: ', () => {
    //Arrange
    const inputCriterion = fixture
      .debugElement.nativeElement.querySelector('[data-testid = "criterion"]')

    //Assert
     expect(inputCriterion.textContent).toBe('Criterio para el cambio')
  })

  it('The criterio is: ', () => {
    //Arrange
    const inputCriterio = fixture
      .debugElement.nativeElement.querySelector('[data-testid = "criterio"]')

    //Act
    inputCriterio.textContent = "criterio uno"
    fixture.detectChanges()

    //Assert
     expect(inputCriterio.textContent).toBe('criterio uno')
  })

  it('Execute reset button: ', () => {
    //Arrange
    const inputName = fixture
      .debugElement.nativeElement.querySelector('[data-testid = "name"]')
    const resetButton = fixture
      .debugElement.nativeElement.querySelector('[data-testid = "reset"]')

    //Act
    inputName.textContent = "Eze"
    fixture.detectChanges()
    resetButton.click()

    //Assert
    expect(inputName.textContent).toBe('Eze')
  })

  it('Execute save button: ', () => {
    //Arrange
    const inputName = fixture
      .debugElement.nativeElement.querySelector('[data-testid = "name"]')
    const saveButton = fixture
      .debugElement.nativeElement.querySelector('[data-testid = "save"]')

    //Act
    inputName.textContent = "Adri"
    fixture.detectChanges()
    saveButton.click()

    //Assert
    expect(inputName.textContent).toBe('Adri')
  })
})
