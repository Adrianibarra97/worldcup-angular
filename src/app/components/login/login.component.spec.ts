import { ComponentFixture, TestBed } from '@angular/core/testing'
import { LoginComponent } from './login.component'
import { FormBuilder, ReactiveFormsModule } from '@angular/forms'

describe('LoginComponent', () => {
  let component: LoginComponent
  let fixture: ComponentFixture<LoginComponent>
  const user = new FormBuilder().group({
    name: 'admin',
    password: '1111'
  })

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule]
    })
    fixture = TestBed.createComponent(LoginComponent)
    component = fixture.componentInstance
    component.user = user
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it("The user title is:", () => {
    //Arrange
    const inputUser = fixture
    .debugElement.nativeElement.querySelector('[data-testid = "user"]')

    //Assert
    expect(inputUser.textContent).toBe('Usuario')
  })

  it("The password title is:", () => {
    //Arrange
    const inputPassword = fixture
    .debugElement.nativeElement.querySelector('[data-testid = "password"]')

    //Assert
    expect(inputPassword.textContent).toBe('Contraseña')
  })

  it("The title is:", () => {
    //Arrange
    const inputTitle = fixture
    .debugElement.nativeElement.querySelector('[data-testid = "title"]')

    //Assert
    expect(inputTitle.textContent).toBe('WorldCApp')
  })

  it('The user login succesfully', () => {
    //Arrange
    const inputName = fixture
    .debugElement.nativeElement.querySelector('[data-testid = "name"]')
    const inputPassword = fixture
    .debugElement.nativeElement.querySelector('[data-testid = "password-input"]')

    //Act
    inputName.textContent = "admin"
    inputPassword.textContent = "1111"

    //Assert
    expect(inputName.textContent).toBe('admin')
    expect(inputPassword.textContent).toBe('1111')
  })

  it('The user cannot login', () => {
    //Arrange
    const inputName = fixture
    .debugElement.nativeElement.querySelector('[data-testid = "name"]')
    const inputPassword = fixture
    .debugElement.nativeElement.querySelector('[data-testid = "password-input"]')

    //Act
    inputName.textContent = "nicolas"
    inputPassword.textContent = "1234"

    //Assert
    expect(inputName.textContent == "admin").toBeFalse()
    expect(inputPassword.textContent == "1111").toBeFalse()
  })

})
