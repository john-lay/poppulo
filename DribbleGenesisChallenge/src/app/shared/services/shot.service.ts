import { Injectable } from '@angular/core';
import { IShotModel } from '../interfaces/shot.model';

@Injectable()
export class ShotService {
    getShots = (): IShotModel[] => {
        return [{
            Title: 'Health App mobile',
            Description: 'Some new screens from my upcoming Health app project.',
            PublishedDate: '2015-05-14',
            ThumbnailUrl: 'https://cdn.dribbble.com/users/149817/screenshots/2062953/app10-nahlad-2_teaser.png',
            ShowDetails: false
        },
        {
            Title: 'Xonom',
            Description: 'The idea is to colour it green',
            PublishedDate: '2014-09-24',
            ThumbnailUrl: 'https://cdn.dribbble.com/users/78637/screenshots/1738453/xonom_teaser.jpg',
            ShowDetails: false
        },
        {
            Title: 'Health app',
            Description: 'I was working on health app, and this is a main dashboard page of it.',
            PublishedDate: '2014-07-17',
            ThumbnailUrl: 'https://cdn.dribbble.com/users/149817/screenshots/1646215/nahlad_teaser.png',
            ShowDetails: false
        }];
    };    
}