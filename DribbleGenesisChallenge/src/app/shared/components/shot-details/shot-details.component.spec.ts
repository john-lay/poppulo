import { TestBed, async, inject } from '@angular/core/testing';
import { ShotDetailsComponent } from './shot-details.component';
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ShotService } from "../../services/shot.service";
import { ActivatedRoute } from "@angular/router";
import { HttpModule } from "@angular/http";

describe('ShotDetailsComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ShotDetailsComponent
            ],
            imports: [
                HttpModule
            ],
            providers: [
                ShotService,
                { provide: ActivatedRoute, useClass: MockActivatedRoute }
            ],
            schemas: [
                NO_ERRORS_SCHEMA
            ]
        }).compileComponents();
    }));

    it('should create the shot details component', async(inject([ShotService],
        (shotService: ShotService) => {
            const fixture = TestBed.createComponent(ShotDetailsComponent);
            const component = fixture.debugElement.componentInstance;
            expect(component).toBeTruthy();
        })));
});

class MockActivatedRoute {
    // here you can add your mock objects, like snapshot or parent or whatever
    // example:
    parent = {
        snapshot: { data: { title: 'myTitle ' } },
        routeConfig: { children: { filter: () => { } } }
    };
}