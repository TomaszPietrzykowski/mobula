import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResponseBrowserComponent } from './response-browser.component';
import { ResponseBrowserModule } from './response-browser.module';

describe('ResponseBrowserComponent', () => {
  let component: ResponseBrowserComponent;
  let fixture: ComponentFixture<ResponseBrowserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResponseBrowserModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ResponseBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
