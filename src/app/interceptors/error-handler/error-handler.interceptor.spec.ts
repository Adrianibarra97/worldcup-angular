import { TestBed } from '@angular/core/testing'

import { ErrorHandlerInterceptor } from './error-handler.interceptor'
import { CommonModule } from '@angular/common'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ToastrModule } from 'ngx-toastr'

describe('ErrorHandlerInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ErrorHandlerInterceptor
    ],
    imports: [
      CommonModule,
      BrowserAnimationsModule,
      ToastrModule.forRoot()
    ]
  }))

  it('should be created', () => {
    const interceptor: ErrorHandlerInterceptor = TestBed.inject(ErrorHandlerInterceptor)
    expect(interceptor).toBeTruthy()
  })
})
