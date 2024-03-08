import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.css']
})
export class BrowserComponent {
  @Output() searchByTitle: EventEmitter<string> = new EventEmitter<string>()
  @Input() valueOfInput: string = ''
  lastValueofInput: string = ''
  
  search() {
    if(this.lastValueofInput != this.valueOfInput){
      this.searchByTitle.emit(this.valueOfInput)
      this.lastValueofInput = this.valueOfInput
    }
  }
}
