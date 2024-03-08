import { EnvelopesFilterComponent } from './../../components/envelopes-filter/envelopes-filter.component'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { SearchEnvelopesComponent } from './search-envelopes.component'
import { BrowserComponent } from 'src/app/components/browser/browser.component'
import { GridComponent } from 'src/app/components/grid/grid.component'
import { PointOfSaleComponent } from 'src/app/components/pointOfSale/pointOfSale.component'
import { AppRoutingModule } from 'src/app/app-routing.module'
import { FigurineComponent } from 'src/app/components/figurine/figurine.component'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

describe('SearchEnvelopesComponent', () => {
  let component: SearchEnvelopesComponent
  let fixture: ComponentFixture<SearchEnvelopesComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SearchEnvelopesComponent, 
        BrowserComponent, 
        EnvelopesFilterComponent, 
        GridComponent, 
        PointOfSaleComponent,
        FigurineComponent
      ],
      imports: [AppRoutingModule,HttpClientModule,FormsModule]
    })
    fixture = TestBed.createComponent(SearchEnvelopesComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
