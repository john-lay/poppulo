import { Component } from '@angular/core';
import { IShotModel } from '../../interfaces/shot.model';

@Component({
    selector: 'shot-list',
    templateUrl: './shot-list.component.html'
})

export class ShotListComponent {

    shots: IShotModel[] = [{
        Title: 'Tile 1',
        Description: 'This is the first time',
        PublishedDate: '2018-03-20'
    },
    {
        Title: 'Tile 2',
        Description: 'This is another time',
        PublishedDate: '2018-03-20'
    }];
}