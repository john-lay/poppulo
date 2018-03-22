import { TestBed, async, inject } from '@angular/core/testing';
import { ShotListComponent } from './shot-list.component';
import { ShotComponent } from "../shot/shot.component";
import { PlaceholderComponent } from "../placeholder/placeholder.component";
import { RouterTestingModule } from "@angular/router/testing";
import { ShotService } from "../../services/shot.service";
import { HttpModule } from "@angular/http";
import { PlaceholderService } from "../../services/placeholder.service";
import { Observable } from "rxjs/Observable";

describe('ShotListComponent', () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ShotListComponent,
                ShotComponent,
                PlaceholderComponent
            ],
            imports: [
                RouterTestingModule,
                HttpModule
            ],
            providers: [
                ShotService,
                PlaceholderService
            ]
        }).compileComponents();
    }));

    it('should create the shot-list component', async(inject([ShotService, PlaceholderService],
        (shotService: ShotService, placeholderService: PlaceholderService) => {
            const fixture = TestBed.createComponent(ShotListComponent);
            const component = fixture.debugElement.componentInstance;
            expect(component).toBeTruthy();
        })));

    it('should render a shot list container', async(() => {
        const fixture = TestBed.createComponent(ShotListComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('.shot-list-container')).not.toBe(null);
    }));
});
