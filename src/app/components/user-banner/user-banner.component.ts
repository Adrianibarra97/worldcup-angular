import { Component, Input } from '@angular/core'
import { User } from 'src/app/domain/user'
import { calcularEdad } from 'src/app/util/calcularEdad'
@Component({
  selector: 'app-user-banner',
  templateUrl: './user-banner.component.html',
  styleUrls: ['./user-banner.component.css']
})
export class UserBannerComponent {
  @Input() user: User | undefined

  edad(): number {
    return calcularEdad(this.user?.birthOfDate || new Date())
  }
}