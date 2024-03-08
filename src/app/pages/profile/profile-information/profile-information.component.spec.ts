import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ProfileInformationComponent } from './profile-information.component'
import { UserInformationNavComponent } from 'src/app/components/user-information-nav/user-information-nav.component'
import { UserInformationFormComponent } from 'src/app/components/user-information-form/user-information-form.component'
import { ReactiveFormsModule } from '@angular/forms'

describe('ProfileInformationComponent', () => {
  let component: ProfileInformationComponent
  let fixture: ComponentFixture<ProfileInformationComponent>
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProfileInformationComponent,
        UserInformationNavComponent,
        UserInformationFormComponent
      ],
      imports: [
        ReactiveFormsModule
      ],
    })
    fixture = TestBed.createComponent(ProfileInformationComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
