import { inject } from "@angular/core"
import { CanActivateFn, Router } from "@angular/router"
import { AuthService } from "../services/auth/auth.service"

export const authGuard: CanActivateFn = () => {
    if(inject(AuthService).isAuthtorize()) {
        return true
    }
    const router: Router = inject(Router)
    router.navigateByUrl('/auth/login')
    return false
}