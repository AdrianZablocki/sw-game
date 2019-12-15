import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderIconComponent } from './loader-icon.component';

describe('LoaderIconComponent', () => {
    let component: LoaderIconComponent;
    let fixture: ComponentFixture<LoaderIconComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LoaderIconComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoaderIconComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should render spinner wrapper', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('.lds-double-ring')).toBeTruthy();
    });

    it('should render spinner elements', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelectorAll('.lds-double-ring div').length === 2).toBeTruthy();
    });

    it('should create component', () => {
        expect(component).toBeTruthy();
    });
});
