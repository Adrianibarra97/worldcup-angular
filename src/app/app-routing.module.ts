import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { UserLoginComponent } from './pages/user-login/user-login.component'
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component'
import { SearchFigurinesComponent } from './pages/search-figurines/search-figurines.component'
import { SearchEnvelopesComponent } from './pages/search-envelopes/search-envelopes.component'
import { FigurineTemplateComponent } from './pages/figurine-template/figurine-template.component'
import { ProfileInformationComponent } from './pages/profile/profile-information/profile-information.component'
import { RepeatedFigurinesComponent } from './pages/profile/repeated-figurines/repeated-figurines.component'
import { MissingFigurinesComponent } from './pages/profile/missing-figurines/missing-figurines.component'
import { ProfileLayoutComponent } from './layouts/profile-layout/profile-layout.component'
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component'
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component'
import { authGuard } from './guards/auth.guard'

export const routes: Routes = [
  { path: 'auth', component: AuthLayoutComponent, children: [
      { path: 'login', component: UserLoginComponent }
    ]
  },
  { path: '', component: MainLayoutComponent, canActivate: [authGuard], children: [
      { path: 'home', component: SearchFigurinesComponent },
      { path: 'search-envelopes', component: SearchEnvelopesComponent },
      { path: 'detail-figurine/:id', component: FigurineTemplateComponent },
      { path: 'profile', component: ProfileLayoutComponent, children: [
          { path: 'information', component: ProfileInformationComponent },
          { path: 'repeated-figurines', component: RepeatedFigurinesComponent },
          { path: 'missing-figurines', component: MissingFigurinesComponent }
        ]
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' } // Solo es para que angular levante en home!
    ]
  },
  { path: 'not-found', component: PageNotFoundComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }