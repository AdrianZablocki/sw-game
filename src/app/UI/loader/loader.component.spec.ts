import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoaderComponent } from './loader.component';
import { LoaderIconComponent } from '../loader-icon/loader-icon.component';

describe('LoaderComponent', () => {
    let component: LoaderComponent;
    let fixture: ComponentFixture<LoaderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [BrowserAnimationsModule],
            declarations: [LoaderComponent, LoaderIconComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should render loader icon', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('.loader-icon')).toBeTruthy();
    });

    it(`should have as label 'loading'`, () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('.text-under')
            .textContent).toContain('loading');
    });

    it('should create component', () => {
        expect(component).toBeTruthy();
    });
});
