import { Component } from '@angular/core'
import { AuthService } from 'src/app/services/auth/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  private menuOpen: boolean = false

  constructor(private auth: AuthService) { }
  
  logout() {
    this.auth.logout()
  }

  menuAction() {
    if(!this.menuOpen) {
      document.getElementById('menu')?.setAttribute('style', 'height: 30%;')
      this.menuOpen = true
    } else {
      document.getElementById('menu')?.setAttribute('style', 'height: 8%;')
      this.menuOpen = false
    }
  }
}