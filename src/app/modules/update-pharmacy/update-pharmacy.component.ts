import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
import { ActivatedRoute, Router } from '@angular/router';
import { Medicine } from 'src/app/model/medicine';
import { PharmaciesService } from '../services/pharmacies.service';

@Component({
  selector: 'app-update-pharmacy',
  templateUrl: './update-pharmacy.component.html',
  styleUrls: ['./update-pharmacy.component.scss']
})
export class UpdatePharmacyComponent implements OnInit {

  id!: number;
  medicine!: Medicine;
  form: FormGroup = new FormGroup({});
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto' as FloatLabelType);
  options = this.fb.group({
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl,
  });
  constructor(private fb: FormBuilder,
    private pharmaciesService: PharmaciesService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.medicine = new Medicine();
    this.id = this.route.snapshot.params['id'];
    this.pharmaciesService.getMedicine(this.id).subscribe(data => {
      console.log(data)
      this.medicine = data;
    }, error => console.log(error));
    this.form = this.fb.group({
      medicineName: [null, [Validators.required]],
      medicineCompany: [null, [Validators.required]],
      category: [null, [Validators.required]],
      origin: [null, [Validators.required]],
      manufactureDate: [null, [Validators.required]],
      expireDate: [null, [Validators.required]],
      amount: [null, [Validators.required,Validators.pattern("^[0-9]+$"), Validators.min(1)]],
      unit: [null, [Validators.required]],
      status: [null, [Validators.required]],
    });
  }

  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }

  updateMedicine(form: any) {
    this.medicine = this.form.value;
    this.pharmaciesService.updateMedicine(this.id, this.medicine).subscribe(data => {
      console.log(data)
      this.medicine = new Medicine();
      this.gotoList();
    }, 
    error => console.log(error));
    console.log(this.medicine)
  }

  gotoList() {
    this.router.navigate(['/pharmacies']);
  }

}
