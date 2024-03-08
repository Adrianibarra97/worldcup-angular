import { Injectable } from '@angular/core'
import { AuthService } from './auth.service'
import { REST_SERVER_URL } from '../configurations'
import { UserJSONLogin } from 'src/app/domain/user'
import { HttpClient } from '@angular/common/http'
import { lastValueFrom } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthServiceRest extends AuthService {

  constructor(private http: HttpClient) { 
    super()
  }

  logout() {
    localStorage.removeItem("user_token")
    this.router.navigateByUrl('/auth/login')
  }

  authorizeUser(userId: string): void {
    localStorage.setItem("user_token", userId)
    this.router.navigateByUrl('/home')
  }

  async login(loginJson: UserJSONLogin): Promise<void> {
    const auth$ = this.http.post<string>(REST_SERVER_URL + '/loginUsuario', loginJson)
    const userId = await lastValueFrom(auth$)
    this.authorizeUser(userId)
  }

  isAuthtorize(): boolean {
    return localStorage.getItem("user_token") != undefined
  }

  getActiveUserId(): string {
    const activeUserId = localStorage.getItem("user_token")
    return activeUserId === null ? "-1" : activeUserId
  }
}