import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class DestinationsService {
    constructor(private http: Http) { }

    getAllDestinations() {
        return this.http.get(`https://mysterious-reaches-49012.herokuapp.com/ddd/`)
            .subscribe(res => {
                return res;
            }, err => {
                return err;
            });

    }
}