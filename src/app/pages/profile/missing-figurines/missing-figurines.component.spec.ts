import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MissingFigurinesComponent } from './missing-figurines.component'
import { UserInformationNavComponent } from 'src/app/components/user-information-nav/user-information-nav.component'
import { GridComponent } from 'src/app/components/grid/grid.component'
import { FigurineComponent } from 'src/app/components/figurine/figurine.component'
import { HttpClientModule } from '@angular/common/http'

describe('MissingFigurinesComponent', () => {
  let component: MissingFigurinesComponent
  let fixture: ComponentFixture<MissingFigurinesComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        MissingFigurinesComponent,
        UserInformationNavComponent, 
        GridComponent, 
        FigurineComponent
      ],
      imports: [HttpClientModule]
    })
    fixture = TestBed.createComponent(MissingFigurinesComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
