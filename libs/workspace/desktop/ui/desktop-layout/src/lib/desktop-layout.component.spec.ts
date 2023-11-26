import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DesktopLayoutComponent } from './desktop-layout.component';
import { DesktopLayoutModule } from './desktop-layout.module';

describe('DesktopLayoutComponent', () => {
  let component: DesktopLayoutComponent;
  let fixture: ComponentFixture<DesktopLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesktopLayoutModule],
    }).compileComponents();

    fixture = TestBed.createComponent(DesktopLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
