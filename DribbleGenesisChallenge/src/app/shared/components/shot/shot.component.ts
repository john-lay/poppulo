import { Component, Input } from '@angular/core';
import { IShotModel } from '../../interfaces/shot.model';

@Component({
    selector: 'shot',
    templateUrl: './shot.component.html',
    styleUrls: ['./shot.component.less']
})

export class ShotComponent {
    @Input() shot: IShotModel;
}