import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {FloatLabelType} from '@angular/material/form-field';
import { Router } from '@angular/router';
import { Medicine } from 'src/app/model/medicine';
import { PharmaciesService } from '../services/pharmacies.service';

@Component({
  selector: 'app-import-store',
  templateUrl: './import-store.component.html',
  styleUrls: ['./import-store.component.scss']
})
export class ImportStoreComponent implements OnInit {

  selected: string= "";
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
    private router: Router) { }

  ngOnInit(): void {
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

  saveDetails(form: any) {
    this.medicine = this.form.value;
    console.log(this.medicine);
    this.pharmaciesService.createMedicine(this.medicine).subscribe(data => {
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

  report(selected: string){
    if(!selected){
      alert("Please choose a month for report!");
    } else{
      console.log(selected);

    this.pharmaciesService.getImportReport(selected).subscribe(
      data => {
        let fileName = data.headers.get("File-Name")!;
        console.log(fileName);
        let blob: Blob = data.body as Blob;
        let a = document.createElement('a');
        a.download = fileName; 
        a.href = window.URL.createObjectURL(blob);
        a.click();
      }
    )
    }
  }

 
}
