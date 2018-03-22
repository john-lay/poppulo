import { TestBed, async } from '@angular/core/testing';
import { ShotComponent } from './shot.component';
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe('ShotComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ShotComponent
            ],
            imports: [],
            providers: [],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    }));

    it('should create the shot component', async(() => {
        const fixture = TestBed.createComponent(ShotComponent);
        const component = fixture.debugElement.componentInstance;
        expect(component).toBeTruthy();
    }));
});