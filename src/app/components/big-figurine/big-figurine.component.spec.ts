import { ComponentFixture, TestBed } from '@angular/core/testing'
import { BigFigurineComponent } from './big-figurine.component'
import { Router, RouterLinkWithHref, RouterModule } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'
import { Figurine } from 'src/app/domain/figurine'
import { figurineStubList } from 'src/app/services/figurine/figurine.stub.list'
import { AppRoutingModule } from 'src/app/app-routing.module'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

let component: BigFigurineComponent
let fixture: ComponentFixture<BigFigurineComponent>

describe('BigFigurineComponent', () => {
  const figurine: Figurine = Figurine.fromJSONDefault(figurineStubList[0])
  let routerSpy: Router

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [BigFigurineComponent],
      imports:[AppRoutingModule,HttpClientModule,FormsModule,RouterTestingModule.withRoutes([])],
    })
    fixture = TestBed.createComponent(BigFigurineComponent)
    routerSpy = TestBed.inject(Router)
    component = fixture.componentInstance
    component.figurine = figurine
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('boton deberia retornar a la ruta correspondiente',()=>{
    const navSpy = spyOn(routerSpy, 'navigateByUrl')
    //
    const boton = getElementByDataTestId("big-figurine-volver")
    boton.click()
    //
    expect(navSpy.calls.mostRecent().args[0].toString()).toEqual('/home')
  })
})

function getElementByDataTestId(dataTestId:string){
  //Retorna el elemento HTML que coincida con ese dataTestId pasado por parametros
  return fixture.debugElement.nativeElement.querySelector(`[data-testid="${dataTestId}"]`)
}
