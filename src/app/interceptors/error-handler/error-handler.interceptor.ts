import { Injectable } from '@angular/core'
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http'
import { Observable, catchError, throwError } from 'rxjs'
import { ToastrService } from 'ngx-toastr'

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

  constructor(private toastr: ToastrService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(catchError((error: HttpErrorResponse) => {
      const errorMessage: string = "Error Code: " + error.status + "\n Error Message: " + error.message
      this.toastr.error(errorMessage)
      throw(() => errorMessage)
    }))
  }
}
