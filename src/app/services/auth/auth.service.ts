import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { UserJSONLogin } from 'src/app/domain/user'

@Injectable({
  providedIn: 'root'
})
export abstract class AuthService { 
  public router = new Router()

  abstract logout(): void

  abstract authorizeUser(userId: string): void

  abstract login(loginJson: UserJSONLogin): Promise<void>

  abstract isAuthtorize(): boolean

  abstract getActiveUserId(): string
}