import { Injectable } from '@angular/core';
import { IShotModel } from '../interfaces/shot.model';
import { IShotDetailsModel } from '../interfaces/shot-details.model';
import { Http, Response } from "@angular/http";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/throw';

@Injectable()
export class ShotService {

    constructor(private http: Http) { }

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


    getShots = (): Observable<IShotModel[]> => {
        return this.http.get('assets/shots.json')
            .map((response: Response) => <IShotModel[]>response.json().data)
            .catch(this.handleError);
    };

    getShotDetails = (id: number): Observable<IShotDetailsModel> => {
        return this.http.get('assets/shot-details.json')
            .map((response: Response) => {
                var data = <IShotDetailsModel[]>response.json().data;
                
                return data.filter(shot => shot.Id === id)[0];
            })
            .catch(this.handleError);

        
        //return this.shotDetails.filter(shot => shot.Id === id)[0];
    }

    private handleError(error: Response) {
        console.error(error);
        let msg = `Error status code ${error.status} at ${error.url}`;
        return Observable.throw(msg);
    }
}