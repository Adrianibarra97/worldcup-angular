import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FooterComponent } from './footer.component'

describe('FooterComponent', () => {
  let component: FooterComponent
  let fixture: ComponentFixture<FooterComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent]
    })
    fixture = TestBed.createComponent(FooterComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('The footer title is:', () => {
    //Arrange
    const inputFooter = fixture
    .debugElement.nativeElement.querySelector('[data-testid = "footer-title"]')

    //Assert
    expect(inputFooter.textContent).toBe('WorldCApp')
  })
})
