import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResponseBrowserComponent } from './response-browser.component';

describe('ResponseBrowserComponent', () => {
    let component: ResponseBrowserComponent;
    let fixture: ComponentFixture<ResponseBrowserComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
        }).compileComponents();

        fixture = TestBed.createComponent(ResponseBrowserComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
