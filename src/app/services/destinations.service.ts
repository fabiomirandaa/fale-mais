import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class DestinationsService {
    constructor(private http: Http) { }

    getAllDestinations() {
        return this.http.get(`${process.env.DOMAIN_API}/ddd/`)
            .subscribe(res => {
                let response = res.json();
                return response;
            }, err => {
                return err;
            });

    }
}