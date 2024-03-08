import { FooterComponent } from './../../components/footer/footer.component'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ProfileLayoutComponent } from './profile-layout.component'
import { HeaderComponent } from 'src/app/components/header/header.component'
import { UserInformationNavComponent } from 'src/app/components/user-information-nav/user-information-nav.component'
import { AppRoutingModule } from 'src/app/app-routing.module'
import { UserBannerComponent } from 'src/app/components/user-banner/user-banner.component'

describe('ProfileLayoutComponent', () => {
  let component: ProfileLayoutComponent
  let fixture: ComponentFixture<ProfileLayoutComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProfileLayoutComponent,
        HeaderComponent,
        FooterComponent,
        UserInformationNavComponent,
        UserBannerComponent
      ],
      imports: [AppRoutingModule]
    })
    fixture = TestBed.createComponent(ProfileLayoutComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
