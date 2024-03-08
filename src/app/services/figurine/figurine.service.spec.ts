import { TestBed, fakeAsync } from '@angular/core/testing'
import { FigurineService } from './figurine.service'
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from 'src/app/app-routing.module'
import { httpClientSpy } from './figurineHttpClientSpy'
import { FigurineServiceRest } from './figurine.rest.service'
import { FilterFigurineJSON } from 'src/app/domain/figurine'
import { AuthService } from '../auth/auth.service'
import { AuthServiceRest } from '../auth/auth.rest.service'

describe('FigurineService', () => {
  let service: FigurineService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientModule,
        AppRoutingModule
      ],
      providers:[
        { provide : HttpClient, useValue: httpClientSpy},
        { provide: FigurineService, useValue: FigurineServiceRest},
        { provide: AuthService, useClass: AuthServiceRest }
      ]
    })
    service = TestBed.inject(FigurineServiceRest)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('service retorna todas las figuritas', fakeAsync(()=>{
    service.getAll().then((rta)=>{
      expect(rta.length).toBe(11)
    })
  }))

  it('Obtenemos una figurita por id', fakeAsync(()=>{
    service.getOneById(1).then((figurita)=>{
      expect(figurita.player.name).toBe("teSt")
      expect(figurita.id).toBe(1)
    })
  }))

  it('Obtenemos figuritas on fire', fakeAsync(()=>{
    const filtro: FilterFigurineJSON = {
      esPromesa:false,
      esOnFire:true,
      valoracionMin:0,
      valoracionMax:9999,
    }
    service.getAllByTitle("",filtro).then((rta)=>{
      expect(rta.length).toBe(2)
    })
  }))

  it('Obtenemos figuritas que son promesas',fakeAsync(()=>{
    const filtro: FilterFigurineJSON = {
      esPromesa:true,
      esOnFire:false,
      valoracionMin:0,
      valoracionMax:9999,
    }
    service.getAllByTitle("",filtro).then((rta)=>{
      expect(rta.length).toBe(2)
    })
  }))

  it('Obtenemos figuritas que son promesas y estan on Fire',fakeAsync(()=>{
    const filtro: FilterFigurineJSON = {
      esPromesa:true,
      esOnFire:true,
      valoracionMin:0,
      valoracionMax:9999,
    }
    service.getAllByTitle("",filtro).then((rta)=>{
      expect(rta.length).toBe(1)
    })
  }))

  it('Obtenemos figuritas que son promesas y estan on Fire',fakeAsync(()=>{
    const filtro: FilterFigurineJSON = {
      esPromesa:false,
      esOnFire:false,
      valoracionMin:264,
      valoracionMax:476,
    }
    service.getAllByTitle("",filtro).then((rta)=>{
      expect(rta.length).toBe(3)
    })
  }))

})
