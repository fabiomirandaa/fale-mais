import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PlansService {
    constructor(private http: Http) { }

    getAllPlans() {
        return this.http.get(`${process.env.DOMAIN_API}/planos/`)
            .map(res => {
                return res.json();
            });

    }
}