import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkspaceOutputComponent } from './workspace-output.component';

describe('WorkspaceOutputComponent', () => {
    let component: WorkspaceOutputComponent;
    let fixture: ComponentFixture<WorkspaceOutputComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({}).compileComponents();

        fixture = TestBed.createComponent(WorkspaceOutputComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
