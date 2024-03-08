import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FooterComponent } from './components/footer/footer.component'
import { HeaderComponent } from './components/header/header.component'
import { FilterComponent } from './components/filter/filter.component'
import { EnvelopesFilterComponent } from './components/envelopes-filter/envelopes-filter.component'
import { BrowserComponent } from './components/browser/browser.component'
import { UserBannerComponent } from './components/user-banner/user-banner.component'
import { UserInformationFormComponent } from './components/user-information-form/user-information-form.component'
import { UserInformationNavComponent } from './components/user-information-nav/user-information-nav.component'
import { GridComponent } from './components/grid/grid.component'
import { FigurineComponent } from './components/figurine/figurine.component'
import { PointOfSaleComponent } from './components/pointOfSale/pointOfSale.component'
import { AddFigurineComponent } from './components/add-figurine/add-figurine.component'
import { LoginComponent } from './components/login/login.component'
import { BigFigurineComponent } from './components/big-figurine/big-figurine.component'
import { UserLoginComponent } from './pages/user-login/user-login.component'
import { SearchFigurinesComponent } from './pages/search-figurines/search-figurines.component'
import { SearchEnvelopesComponent } from './pages/search-envelopes/search-envelopes.component'
import { FigurineTemplateComponent } from './pages/figurine-template/figurine-template.component'
import { ProfileInformationComponent } from './pages/profile/profile-information/profile-information.component'
import { RepeatedFigurinesComponent } from './pages/profile/repeated-figurines/repeated-figurines.component'
import { MissingFigurinesComponent } from './pages/profile/missing-figurines/missing-figurines.component'
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component'
import { ProfileLayoutComponent } from './layouts/profile-layout/profile-layout.component'
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component'
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { AuthService } from './services/auth/auth.service'
import { AuthServiceRest } from './services/auth/auth.rest.service'
import { FigurineServiceRest } from './services/figurine/figurine.rest.service'
import { PointOfSaleService } from './services/pointOfSale/pointOfSale.service'
import { PointOfSaleServiceRest } from './services/pointOfSale/pointOfSale.rest.service'
import { FigurineService } from './services/figurine/figurine.service'
import { ErrorHandlerInterceptor } from './interceptors/error-handler/error-handler.interceptor'
import { UserService } from './services/user/user.service'
import { UserServiceRest } from './services/user/user.rest.service'
import { CommonModule } from '@angular/common'
import { ToastrModule } from 'ngx-toastr'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    FilterComponent,
    EnvelopesFilterComponent,
    BrowserComponent,
    UserBannerComponent,
    UserInformationFormComponent,
    UserInformationNavComponent,
    GridComponent,
    FigurineComponent,
    PointOfSaleComponent,
    AddFigurineComponent,
    BigFigurineComponent,
    UserLoginComponent,
    LoginComponent,
    SearchFigurinesComponent,
    SearchEnvelopesComponent,
    FigurineTemplateComponent,
    ProfileInformationComponent,
    RepeatedFigurinesComponent,
    MissingFigurinesComponent,
    MainLayoutComponent,
    ProfileLayoutComponent,
    PageNotFoundComponent,
    AuthLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    { provide: AuthService, useClass: AuthServiceRest },
    { provide: FigurineService, useClass: FigurineServiceRest },
    { provide: PointOfSaleService, useClass: PointOfSaleServiceRest },
    { provide: UserService, useClass: UserServiceRest },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorHandlerInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }