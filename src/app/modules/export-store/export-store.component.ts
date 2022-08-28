import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MedicineExport } from 'src/app/model/medicine-export';
import { MedicineExportForm } from 'src/app/model/medicine-export-form';
import { PharmaciesService } from '../services/pharmacies.service';

@Component({
  selector: 'app-export-store',
  templateUrl: './export-store.component.html',
  styleUrls: ['./export-store.component.scss']
})
export class ExportStoreComponent implements OnInit {

  selected: string= "";
  medicineExportForm!: MedicineExportForm;
  medicinesExportlst!: MedicineExport[];
  form: FormGroup = new FormGroup({});
  displayedColumns: string[] = ['ID','MedicineCode', 'MedicineName', 'LotCode', 'MedicineCompany', 'ExportDate','Amount'];


  constructor(private fb: FormBuilder,
    private pharmaciesService: PharmaciesService,
    private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      medicineCode: [null, [Validators.required]],
      lotCode: [null, [Validators.required]],
      amount: [null, [Validators.required, Validators.pattern("^[0-9]+$")]],
      exportDate: [null, [Validators.required]]
    });
    this.reloadData();
  }

  exportMedicine(form: any) {
    this.medicineExportForm = this.form.value;
    this.pharmaciesService.exportMedicine(this.medicineExportForm).subscribe(data => {
      console.log(data)
      this.medicinesExportlst = Object.values(data);
      this.medicineExportForm = new MedicineExportForm();
    }, 
    error => console.log(error));
    console.log(this.medicineExportForm)
  }

  reloadData() {
    this.pharmaciesService.getMedicineExportList().subscribe(data => {
      console.log(data)
      data.sort((a: MedicineExport, b: MedicineExport) => {
        return  new Date(b.exportDate).getDate() - new Date(a.exportDate).getDate();
    });
      this.medicinesExportlst = Object.values(data);
    }, 
    error => console.log(error));
  }

  report(selected: string){
    if(!selected){
      alert("Please choose a month for report!");
    } else{
      console.log(selected);

    this.pharmaciesService.getExportReport(selected).subscribe(
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
