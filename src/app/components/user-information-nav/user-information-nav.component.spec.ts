import { ComponentFixture, TestBed } from '@angular/core/testing'
import { UserInformationNavComponent } from './user-information-nav.component'
import { RouterTestingModule } from '@angular/router/testing'

describe('UserInformationNavComponent', () => {
  let component: UserInformationNavComponent
  let fixture: ComponentFixture<UserInformationNavComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserInformationNavComponent
      ],
      imports: [
        RouterTestingModule
      ]
    })
    fixture = TestBed.createComponent(UserInformationNavComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('The user clicks on profile information', () => {
    //Arrange
    const element = fixture
    .debugElement
    .nativeElement
    .querySelector(`[data-testid = "user-information"]`)

    //Act
    element.click()
    fixture.detectChanges()

    //Assert

    expect(element.textContent).toBe("Información del perfil")
  })

  it('The user clicks on repeated figurines', () => {
    //Arrange
    const element = fixture
    .debugElement
    .nativeElement
    .querySelector(`[data-testid = "repeated-figurines"]`)

    //Act
    element.click()
    fixture.detectChanges()

    //Assert
    
    expect(element.textContent).toBe("Figuritas Repetidas")
  })

  it('The user clicks on missing figurines', () => {
    //Arrange
    const element = fixture
    .debugElement
    .nativeElement
    .querySelector(`[data-testid = "missing-figurines"]`)

    //Act
    element.click()
    fixture.detectChanges()

    //Assert
    
    expect(element.textContent).toBe("Figuritas Faltantes")
  })
})