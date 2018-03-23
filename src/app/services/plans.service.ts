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

    calculatePlansResult(dataCall: any) {
        let valueNoPlan = (dataCall.destinationSelected.tarifa * dataCall.minutos);
        let valuePlan;


        if (dataCall.plan.minutos >= dataCall.minutos) {
            valuePlan = 0;
        } else {
            valuePlan = ((dataCall.minutos - dataCall.plan.minutos) * (dataCall.destinationSelected.tarifa * 1.1));
        }

        let data = {
            minutes: dataCall.minutos,
            localeOrigin: dataCall.origin.ddd,
            localeDestination: dataCall.destinationSelected.destino,
            valuePlan: valuePlan,
            valueNoPlan: valueNoPlan
        };

        return data;
    }
}
