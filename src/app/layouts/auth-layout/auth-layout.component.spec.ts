import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AuthLayoutComponent } from './auth-layout.component'
import { FooterComponent } from 'src/app/components/footer/footer.component'
import { AppRoutingModule } from 'src/app/app-routing.module'

describe('AuthLayoutComponent', () => {
  let component: AuthLayoutComponent
  let fixture: ComponentFixture<AuthLayoutComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthLayoutComponent,
      FooterComponent],
      imports: [AppRoutingModule]
    })
    fixture = TestBed.createComponent(AuthLayoutComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
