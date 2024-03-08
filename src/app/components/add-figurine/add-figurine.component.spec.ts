import { ComponentFixture, TestBed } from '@angular/core/testing'
import { AddFigurineComponent } from './add-figurine.component'

describe('AddFigurineComponent', () => {
  let component: AddFigurineComponent
  let fixture: ComponentFixture<AddFigurineComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddFigurineComponent]
    })
    fixture = TestBed.createComponent(AddFigurineComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
