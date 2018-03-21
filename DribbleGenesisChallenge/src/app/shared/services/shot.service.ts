import { Injectable } from '@angular/core';
import { IShotModel } from '../interfaces/shot.model';
import { IShotDetailsModel } from '../interfaces/shot-details.model';

@Injectable()
export class ShotService {

    shotDetails: IShotDetailsModel[] = [{
          Title: 'Health App mobile',
          Description: 'Some new screens from my upcoming Health app project.',
          AuthorName: 'Jakub Antalík',
          Avatar: 'https://cdn.dribbble.com/users/149817/avatars/small/20b50ac8ed3827ef45d49e46ad9d8344.jpg',
          ImageUrl: 'https://cdn.dribbble.com/users/149817/screenshots/2062953/app10-nahlad-2.png',
          Id: 1
      },
      {
          Title: 'Xonom',
          Description: 'The idea is to colour it green',
          AuthorName: 'Cosmin Capitanu',
          Avatar: 'https://cdn.dribbble.com/users/78637/avatars/small/radium_clear.png',
          ImageUrl: 'https://cdn.dribbble.com/users/78637/screenshots/1738453/xonom.jpg',
          Id: 2
      },
      {
          Title: 'Health app',
          Description: 'I was working on health app, and this is a main dashboard page of it.',
          AuthorName: 'Jakub Antalík',
          Avatar: 'https://cdn.dribbble.com/users/149817/avatars/small/20b50ac8ed3827ef45d49e46ad9d8344.jpg',
          ImageUrl: 'https://cdn.dribbble.com/users/149817/screenshots/1646215/nahlad.png',
          Id: 3
      }];


    getShots = (): IShotModel[] => {
        return [{
            Title: 'Health App mobile',
            Description: 'Some new screens from my upcoming Health app project.',
            PublishedDate: '2015-05-14',
            ThumbnailUrl: 'https://cdn.dribbble.com/users/149817/screenshots/2062953/app10-nahlad-2_teaser.png',
            ShowDetails: false,
            Id: 1
        },
        {
            Title: 'Xonom',
            Description: 'The idea is to colour it green',
            PublishedDate: '2014-09-24',
            ThumbnailUrl: 'https://cdn.dribbble.com/users/78637/screenshots/1738453/xonom_teaser.jpg',
            ShowDetails: false,
            Id: 2
        },
        {
            Title: 'Health app',
            Description: 'I was working on health app, and this is a main dashboard page of it.',
            PublishedDate: '2014-07-17',
            ThumbnailUrl: 'https://cdn.dribbble.com/users/149817/screenshots/1646215/nahlad_teaser.png',
            ShowDetails: false,
            Id: 3
        }];
    };

    getShotDetails = (id: number): IShotDetailsModel => {
        return this.shotDetails.filter(shot => shot.Id === id)[0];
    }
}