import { AuthService } from 'src/app/services/auth/auth.service'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { HeaderComponent } from './header.component'
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { authHttpClientSpy, routerSpy } from 'src/app/services/auth/authHttpClientSpy'
import { Router } from '@angular/router'
import { AuthServiceRest } from 'src/app/services/auth/auth.rest.service'

describe('HeaderComponent', () => {
  let component: HeaderComponent
  let fixture: ComponentFixture<HeaderComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [HttpClientModule],
      providers: [
        { provide: HttpClient, useValue: authHttpClientSpy },
        { provide: Router, useValue: routerSpy },
        { provide: AuthService, useClass: AuthServiceRest }
      ]
    })
    fixture = TestBed.createComponent(HeaderComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('The title is: ', () => {
    //Arrange
    const headerTitle = fixture
    .debugElement.nativeElement.querySelector('[data-testid = "title"]')

    //Assert
    expect(headerTitle.textContent).toBe('WorldCApp')
  })

  it('Redirect to home: ', () => {
    //Arrange
    const optionFigurine = fixture
    .debugElement.nativeElement.querySelector('[data-testid = "option-figurines"]')

    //Act
    optionFigurine.click()
    fixture.detectChanges()

    //Assert
    expect(routerSpy.navigateByUrl('/home')).toBeTruthy()
  })

  it('Redirect to search envelopes: ', () => {
    //Arrange
    const optionEnvelopes = fixture
    .debugElement.nativeElement.querySelector('[data-testid = "option-envelopes"]')

    //Act
    optionEnvelopes.click()
    fixture.detectChanges()

    //Assert
    expect(routerSpy.navigateByUrl('/search-envelopes')).toBeTruthy()
  })

  it('Redirect to profile information: ', () => {
    //Arrange
    const optionProfile = fixture
    .debugElement.nativeElement.querySelector('[data-testid = "option-profile"]')

    //Act
    optionProfile.click()
    fixture.detectChanges()

    //Assert
    expect(routerSpy.navigateByUrl('/profile/information')).toBeTruthy()
  })

  it('Logout and redirect to login page: ', () => {
    //Arrange
    const logoutButton = fixture
    .debugElement.nativeElement.querySelector('[data-testid = "button-logout"]')

    //Act
    logoutButton.click()
    fixture.detectChanges()

    //Assert
    expect(routerSpy.navigateByUrl('/auth/login')).toBeTruthy()
  })
})
