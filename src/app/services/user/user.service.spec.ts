import { TestBed } from '@angular/core/testing'
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from 'src/app/app-routing.module'
import { userHttpClientSpy } from './userHttpClientSpy'
import { User } from 'src/app/domain/user'
import { UserService } from './user.service'
import { UserServiceRest } from './user.rest.service'
import { AuthService } from '../auth/auth.service'
import { AuthServiceRest } from '../auth/auth.rest.service'
import { Router } from '@angular/router'
import { routerSpy } from '../auth/authHttpClientSpy'

describe('UserService', () => {

  let userService!: UserService

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        AppRoutingModule
      ],
      providers: [
        { provide: HttpClient, useValue: userHttpClientSpy },
        { provide: Router, useValue: routerSpy },
        { provide: UserService, useClass: UserServiceRest },
        { provide: AuthService, useClass: AuthServiceRest }
      ]
    })
    userService = TestBed.inject(UserServiceRest)
  })

  it('should be created', () => {
    expect(userService).toBeTruthy()
  })

  it('All users are requested', async () => {
    //Arrange
    const users: User[] = await userService.getAll()

    //Assert
    expect(users.length).toBe(10)
  })

  it('A user is requested by id', async () => {
    //Arrange
    const user: User = await userService.getOneById(2)

    //Assert
    expect(user.id).toEqual(2)
  })

  it('All users are requested by title', async () => {
    //Arrange
    const users: User[] = await userService.getAll()

    //Assert
    expect(users.length).toBeGreaterThan(0)
  })

  it('All users are requested by filter', async () => {
    //Arrange
    const users: User[] = await userService.getAll()

    //Assert
    expect(users.length).toBeGreaterThan(0)
  })

  it('A user are updated', async () => {
    //Arrange
    const updatedUser: User = User.fromJSON({
      "id": 0,
      "username": "juli2024",
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
      "url": "https://image-service.onefootball.com/transform?w=280&h=210&dpr=2&image=https%3A%2F%2Fwww.vermouth-deportivo.com.ar%2Fwp-content%2Fuploads%2F2023%2F08%2Fargentina-manager-carlos-bilardo-1984-scaled.jpg"
    })

    //Act
    await userService.updateUser(updatedUser)
    const user: User = await userService.getOneById(0)

    //Assert
    expect(user.username).toEqual("juli2024")
  })
})
