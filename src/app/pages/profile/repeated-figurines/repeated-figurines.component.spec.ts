import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RepeatedFigurinesComponent } from './repeated-figurines.component'
import { UserInformationNavComponent } from 'src/app/components/user-information-nav/user-information-nav.component'
import { GridComponent } from 'src/app/components/grid/grid.component'
import { FigurineComponent } from 'src/app/components/figurine/figurine.component'
import { HttpClientModule } from '@angular/common/http'

describe('RepeatedFigurinesComponent', () => {
  let component: RepeatedFigurinesComponent
  let fixture: ComponentFixture<RepeatedFigurinesComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        RepeatedFigurinesComponent,
        UserInformationNavComponent, 
        GridComponent, 
        FigurineComponent
      ],
      imports: [HttpClientModule]
    })
    fixture = TestBed.createComponent(RepeatedFigurinesComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
