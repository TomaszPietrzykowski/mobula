import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeaturedComponent } from './featured.component';
import { FeaturedModule } from './featured.module';

describe('FeaturedComponent', () => {
  let component: FeaturedComponent;
  let fixture: ComponentFixture<FeaturedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedModule],
    }).compileComponents();

    fixture = TestBed.createComponent(FeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
