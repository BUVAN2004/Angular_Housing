import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route:ActivatedRoute = inject(ActivatedRoute);
  housingservice = inject(HousingService);
  housinglocation: HousingLocation | undefined ;

  applyform = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
  })
  constructor() {
    const housinglocationId = Number(this.route.snapshot.params['id'])
    this.housinglocation = this.housingservice.getHousingLocationById(housinglocationId)
  }

  submitApplication(){
    this.housingservice.submitApplication(
      this.applyform.value.firstname?? '',
      this.applyform.value.lastname ?? '',
      this.applyform.value.email ?? '',
      this.applyform.value.phone ?? '',
    );
  }
}
