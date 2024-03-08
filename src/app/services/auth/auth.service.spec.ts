import { TestBed } from '@angular/core/testing'
import { AuthService } from './auth.service'
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from 'src/app/app-routing.module'
import { Router } from '@angular/router'
import { AuthServiceRest } from './auth.rest.service'
import { authHttpClientSpy, routerSpy } from './authHttpClientSpy'
import { UserJSONLogin } from 'src/app/domain/user'

describe('AuthService', () => {
  let authService!: AuthService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        AppRoutingModule
      ],
      providers: [
        { provide: HttpClient, useValue: authHttpClientSpy },
        { provide: Router, useValue: routerSpy },
        { provide: AuthService, useClass: AuthServiceRest }
      ]
    })
    authService = TestBed.inject(AuthServiceRest)
  })

  it('should be created', () => {
    expect(authService).toBeTruthy()
  })

  it('The user is not registered', () => {
    //Act
    authService.logout()

    //Assert
    expect(authService.isAuthtorize()).toBeFalsy()
    expect(authService.getActiveUserId()).toEqual("-1")
  })

  it('The user fails to register', async () => {
    //Arrange
    const loginJson: UserJSONLogin = {
      username: "birra12",
      password: "1234"
    }
    
    //Act
    let errorMessage = ""
    await authService.login(loginJson).catch(error => errorMessage = error)
    
    //Assert
    expect(errorMessage).toBe("ErrorCode: 401 \nSu usuario y/o contraseña no corresponde!")
  })

  it('The user is registered', async () => {
    //Arrange
    const loginJson: UserJSONLogin = {
      username: "admin",
      password: "1111"
    }

    //Act
    await authService.login(loginJson)

    //Assert
    expect(routerSpy.navigateByUrl('/home')).toBeTruthy()
    expect(authService.isAuthtorize()).toBeTruthy()
    expect(authService.getActiveUserId()).toBe("3")
  })
})