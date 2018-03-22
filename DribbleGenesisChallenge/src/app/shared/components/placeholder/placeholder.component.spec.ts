import { TestBed, async } from '@angular/core/testing';
import { PlaceholderComponent } from './placeholder.component';
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe('PlaceholderComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                PlaceholderComponent
            ],
            imports: [],
            providers: [],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    }));

    it('should create the placeholder component', async(() => {
        const fixture = TestBed.createComponent(PlaceholderComponent);
        const component = fixture.debugElement.componentInstance;
        expect(component).toBeTruthy();
    }));
});