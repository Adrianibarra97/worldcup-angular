import { Injectable } from '@angular/core'
import { AuthService } from './auth.service'
import { UserJSONLogin } from 'src/app/domain/user'
import { of } from 'rxjs'
import { REST_SERVER_URL } from '../configurations'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
class AuthServiceStub extends AuthService {

  logout() {
    localStorage.removeItem("user_token")
    this.router.navigateByUrl('/auth/login')
  }

  authorizeUser(userId: string): void {
    if(userId != "-1") {
      localStorage.setItem("user_token", userId)
      this.router.navigateByUrl('/home')
    }
  }

  login(loginJson: UserJSONLogin): Promise<void> {
    if(loginJson.username == "admin" && loginJson.password == "1111") {
      this.authorizeUser("3")
    } else {
      return new Promise((resolve, reject) => {
        reject(
          "ErrorCode: 401 \nSu usuario y/o contraseña no corresponde!"
        )
      })
    }
    return new Promise((resolve) => {
      resolve()
    })
  }

  isAuthtorize(): boolean {
    return localStorage.getItem("user_token") != undefined
  }

  getActiveUserId(): string {
    const activeUserId = localStorage.getItem("user_token")
    return activeUserId === null ? "-1" : activeUserId
  }
}

export const authHttpClientSpy = jasmine.createSpyObj('HttpClient', [ 'post' ])

authHttpClientSpy.post.and.callFake(
  (_url: `${typeof REST_SERVER_URL}/loginUsuario`, body: { username: string; password: string }) => of(
    new Promise((resolve, reject) => {
      if(body.username == 'admin' && body.password == '1111') {
        resolve('3')
      } else {
        reject('ErrorCode: 401 \nSu usuario y/o contraseña no corresponde!')
      }
    })
  )
)

export const routerSpy: jasmine.SpyObj<Router> = jasmine.createSpyObj('Router', [ 'navigate', 'navigateByUrl' ])

routerSpy.navigateByUrl.and.callFake((url: string) => new Promise((resolve) => resolve(true)))