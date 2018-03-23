import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { DestinationsService } from './../services/destinations.service';
import { PlansService } from './../services/plans.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})

export class HomeComponent implements OnInit {

  result: { minutes: any; localeOrigin: any; localeDestination: any; valuePlan: number; valueNoPlan: number; };
  origens: any;
  destinations: any;
  plans: any;
  calculatorFaleMaisForm: FormGroup;
  showResults: boolean;
  constructor(private plansService: PlansService,
    private destinationsService: DestinationsService,
    private fb: FormBuilder, ) {

    this.calculatorFaleMaisForm = this.fb.group({
      'origem': [null, Validators.required],
      'destino': [null, Validators.required],
      'minutos': [null, Validators.required],
      'plano': [null, Validators.required],

    });
    this.getInitialFormData();
  }

  ngOnInit() {
    this.calculatorFaleMaisForm.controls['origem'].statusChanges.subscribe(res => {
      this.destinations = this.calculatorFaleMaisForm.controls['origem'].value;
      this.destinations = this.destinations.destinos;
      this.calculatorFaleMaisForm.controls['destino'].enable();
    });
    this.calculatorFaleMaisForm.controls['destino'].disable();
    this.showResults = false;
  }

  getInitialFormData() {
    this.plansService.getAllPlans()
      .subscribe(plans => {
        this.plans = plans;
      }, err => {
        console.error(err);
      });

    this.destinationsService.getAllDestinations()
      .subscribe(origens => {
        this.origens = origens;
      });

  }

  calculateResult() {
    let data = {
      origin: this.calculatorFaleMaisForm.controls['origem'].value,
      destinationSelected: this.calculatorFaleMaisForm.controls['destino'].value,
      minutos: this.calculatorFaleMaisForm.controls['minutos'].value,
      plan: this.calculatorFaleMaisForm.controls['plano'].value
    };
    this.result = this.plansService.calculatePlansResult(data);
    this.showResults = true;
    this.calculatorFaleMaisForm.controls['origem'].setValue('');
    this.calculatorFaleMaisForm.controls['destino'].setValue('');
    this.calculatorFaleMaisForm.controls['minutos'].setValue(0);
    this.calculatorFaleMaisForm.controls['plano'].setValue('');
  }

}
