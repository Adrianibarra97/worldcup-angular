import { ComponentFixture, TestBed } from '@angular/core/testing'
import { UserLoginComponent } from './user-login.component'
import { FooterComponent } from 'src/app/components/footer/footer.component'
import { LoginComponent } from 'src/app/components/login/login.component'
import { ReactiveFormsModule } from '@angular/forms'

describe('UserLoginComponent', () => {
  let component: UserLoginComponent
  let fixture: ComponentFixture<UserLoginComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginComponent,
        FooterComponent
      ],
      imports: [
        ReactiveFormsModule
      ]
    })
    fixture = TestBed.createComponent(UserLoginComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
