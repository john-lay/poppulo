import { Component } from '@angular/core';
import { IShotModel } from '../../interfaces/shot.model';
import { ShotService } from '../../services/shot.service';

@Component({
    selector: 'shot-list',
    templateUrl: './shot-list.component.html'
})

export class ShotListComponent {

    shots: IShotModel[] = this.shotService.getShots();

    public constructor(private shotService: ShotService) { }

    showDetails(i: number) {
        this.shots[i].ShowDetails = true;
    }

    hideDetails(i: number) {
        this.shots[i].ShowDetails = false;
    }
}