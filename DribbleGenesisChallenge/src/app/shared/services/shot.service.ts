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
    }

    private handleError(error: Response) {
        console.error(error);
        let msg = `Error status code ${error.status} at ${error.url}`;
        return Observable.throw(msg);
    }
}