import { Component, OnInit } from '@angular/core';
import { PlansService } from './../services/plans.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})

export class HomeComponent implements OnInit {

  plans: any;
  constructor(private plansService: PlansService) {
    this.plansService.getAllPlans()
      .subscribe(plans => {
        this.plans = plans;
      }, err => {

      });

}

  ngOnInit() {
  }


}
