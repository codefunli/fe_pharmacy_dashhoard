import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
import { ActivatedRoute, Router } from '@angular/router';
import { Medicine } from 'src/app/model/medicine';
import { PharmaciesService } from '../services/pharmacies.service';

@Component({
  selector: 'app-pharmacy',
  templateUrl: './pharmacy.component.html',
  styleUrls: ['./pharmacy.component.scss']
})
export class PharmacyComponent implements OnInit {

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
      medicineCode: [null, [Validators.required]],
      medicineName: [null, [Validators.required]],
      lotCode: [null, [Validators.required]],
      registerCode: [null, [Validators.required]],
      medicineCompany: [null, [Validators.required]],
      criteriaManufacture: [null, [Validators.required]],
      specPackage: [null, [Validators.required]],
      concentration: [null, [Validators.required]],
      usageForm: [null, [Validators.required]],
      origin: [null, [Validators.required]],
      manufactureDate: [null, [Validators.required]],
      expireDate: [null, [Validators.required]],
      importDate: [null, [Validators.required]],
      amount: [null, [Validators.required,Validators.pattern("^[0-9]+$"), Validators.min(1)]],
      unit: [null, [Validators.required]],
      cost: [null, [Validators.required,Validators.pattern("^[0-9]+$"), Validators.min(1)]],
    });
  }

  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }

  medicineUpdate(id: number){
    this.router.navigate(['update', id]);
  }

  deleteMedicine(id: number) {
    this.pharmaciesService.deleteMedicine(id)
      .subscribe(
        data => {
          console.log(data);
          //this.reloadData();
        },
        error => console.log(error));
  }

  gotoList() {
    this.router.navigate(['/pharmacies']);
  }
}
