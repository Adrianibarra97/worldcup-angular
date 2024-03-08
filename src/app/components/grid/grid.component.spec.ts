import { ComponentFixture, TestBed } from '@angular/core/testing'
import { GridComponent } from './grid.component'
import { HttpClientModule } from '@angular/common/http'

describe('GridComponent', () => {
  let component: GridComponent
  let fixture: ComponentFixture<GridComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GridComponent],
      imports: [HttpClientModule]
    })
    fixture = TestBed.createComponent(GridComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
