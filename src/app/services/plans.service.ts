import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PlansService {
    constructor(private http: Http) { }

    getAllPlans() {
        return this.http.get(`https://mysterious-reaches-49012.herokuapp.com/planos/`)
            .subscribe(res => {
                return res;
            }, err => {
                return err;
            });

    }
}