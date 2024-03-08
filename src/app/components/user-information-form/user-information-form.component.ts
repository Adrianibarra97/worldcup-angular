import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { User } from 'src/app/domain/user'
import { AuthService } from 'src/app/services/auth/auth.service'
import { UserService } from 'src/app/services/user/user.service'

@Component({
  selector: 'app-user-information-form',
  templateUrl: './user-information-form.component.html',
  styleUrls: ['./user-information-form.component.css']
})
export class UserInformationFormComponent implements OnInit {

  public user!: User
  public newUser!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private userService: UserService
  ) {
    this.user = User.fromJSON({
      "id": 0,
      "username": "",
      "nombre": "",
      "apellido": "",
      "fechaNacimiento": "",
      "direccionMail": "",
      "domicilioUsuario": {
          "ubicacionGeograficaX": 0,
          "ubicacionGeograficaY": 0,
          "calle": "", 
          "altura": 0,
          "localidad": "",
          "provincia": ""
      },
      "maxDistanciaConOtroUsuario": 0,
      "url": ""
    })

    this.newUser = this.formBuilder.group({
      name: "",
      surname: "",
      birthOfDate: new Date(),
      emailAddress: "",
      geographicLocationX: 0,
      geographicLocationY: 0,
      street: "",
      streetHeight: 0,
      location: "",
      province: "",
      maxDistanceBetweenOtherUser: 0,
      criterio: "",
    })
  }

  async ngOnInit() {
    const userId: string = this.authService.getActiveUserId()
    this.user = await this.userService.getOneById(Number.parseInt(userId))

    this.newUser = this.formBuilder.group({
      name: this.user.name,
      surname: this.user.surname,
      birthOfDate: this.user.birthOfDate,
      emailAddress: this.user.emailAddress,
      geographicLocationX: this.user.address.geographicLocationX,
      geographicLocationY: this.user.address.geographicLocationY,
      street: this.user.address.street,
      streetHeight: this.user.address.streetHeight,
      location: this.user.address.location,
      province: this.user.address.province,
      maxDistanceBetweenOtherUser: this.user.maxDistanceBetweenOtherUser,
      criterio: "Seleccione una opción",
    })
  }

  async onSubmit(event: SubmitEvent) {
    if(event.submitter?.className == "item__button item__button--save") {
      this.user.name = this.newUser.value.name
      this.user.surname = this.newUser.value.surname
      this.user.birthOfDate = new Date(this.newUser.value.birthOfDate)
      this.user.emailAddress = this.newUser.value.emailAddress
      this.user.address.geographicLocationX = this.newUser.value.geographicLocationX
      this.user.address.geographicLocationY = this.newUser.value.geographicLocationY
      this.user.address.street = this.newUser.value.street
      this.user.address.streetHeight = this.newUser.value.streetHeight
      this.user.address.location = this.newUser.value.location
      this.user.address.province = this.newUser.value.province
      this.user.maxDistanceBetweenOtherUser = this.newUser.value.maxDistanceBetweenOtherUser

      await this.userService.updateUser(this.user)
    }
      
    if(event.submitter?.className == "item__button item__button--reset") {
      this.ngOnInit()
    }
  }
}