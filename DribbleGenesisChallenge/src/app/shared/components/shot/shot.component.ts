import { Component, Input } from '@angular/core';
import { IShotModel } from '../../interfaces/shot.model';

@Component({
    selector: 'shot',
    templateUrl: './shot.component.html'
})

export class ShotComponent {
    @Input() shot: IShotModel;
}