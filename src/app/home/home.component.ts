import { Component, OnInit } from '@angular/core';
import { PlansService } from './../services/plans.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})

export class HomeComponent implements OnInit {

  constructor(private plansService: PlansService) {
    this.plansService.getAllPlans();
  }

  ngOnInit() {
    
  }

  
}
