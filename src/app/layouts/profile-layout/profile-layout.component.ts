import { Component, OnInit } from '@angular/core'
import { User } from 'src/app/domain/user'
import { AuthService } from 'src/app/services/auth/auth.service'
import { UserService } from 'src/app/services/user/user.service'

@Component({
  selector: 'app-profile-layout',
  templateUrl: './profile-layout.component.html',
  styleUrls: ['./profile-layout.component.css']
})
export class ProfileLayoutComponent implements OnInit {
  
  public user!: User
  constructor (private authService: AuthService, private userService: UserService) { }
  
  async ngOnInit(){
    const userId: string = this.authService.getActiveUserId()
    this.user = await this.userService.getOneById(Number.parseInt(userId))
  }
}