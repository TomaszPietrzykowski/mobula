import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RequestBrowserComponent } from './request-browser.component';
import { RequestBrowserModule } from './request-browser.module';

describe('RequestBrowserComponent', () => {
  let component: RequestBrowserComponent;
  let fixture: ComponentFixture<RequestBrowserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestBrowserModule],
    }).compileComponents();

    fixture = TestBed.createComponent(RequestBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
