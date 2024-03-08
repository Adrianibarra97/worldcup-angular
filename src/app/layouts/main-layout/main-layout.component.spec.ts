import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MainLayoutComponent } from './main-layout.component'
import { HeaderComponent } from 'src/app/components/header/header.component'
import { FooterComponent } from 'src/app/components/footer/footer.component'
import { AppRoutingModule } from 'src/app/app-routing.module'
import { HttpClientModule } from '@angular/common/http'

describe('MainLayoutComponent', () => {
  let component: MainLayoutComponent
  let fixture: ComponentFixture<MainLayoutComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        MainLayoutComponent,
        HeaderComponent,
        FooterComponent
      ],
      imports: [AppRoutingModule, HttpClientModule]
    })
    fixture = TestBed.createComponent(MainLayoutComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
