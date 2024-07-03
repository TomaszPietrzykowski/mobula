import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MobulaIconComponent } from './mobula-icon.component';

describe('MobulaIconComponent', () => {
    let component: MobulaIconComponent;
    let fixture: ComponentFixture<MobulaIconComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MobulaIconComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(MobulaIconComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
