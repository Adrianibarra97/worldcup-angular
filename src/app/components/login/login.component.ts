import { Component } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { AuthService } from 'src/app/services/auth/auth.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public user: FormGroup

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.user = this.formBuilder.group({
      name: '',
      password: ''
    })
  }

  async onSubmit() {
    this.authService.login({
      username: this.user.value.name || '',
      password: this.user.value.password || ''
    })
  }
}