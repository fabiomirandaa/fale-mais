import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PlansService {
    constructor(private http: Http) { }

    getAllPlans() {
        return this.http.get(`${process.env.DOMAIN_API}/planos/`)
            .subscribe(res => {
                let response = res.json();
                return response;
            }, err => {
                return err;
            });

    }
}