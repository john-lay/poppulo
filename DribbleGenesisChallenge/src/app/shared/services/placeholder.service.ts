import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { IPlaceholderModel } from '../interfaces/placeholder.model';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/throw';

@Injectable()
export class PlaceholderService {

    constructor(private http: Http) { }

    getPlaceholder(): Observable<IPlaceholderModel[]> {
        return this.http.get('https://jsonplaceholder.typicode.com/photos/')
            .map((response: Response) => <IPlaceholderModel[]>response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        let msg = `Status code ${error.status} on url ${error}`
        console.log(msg);       

        return Observable.throw(msg);
    }
}