import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { PharmaciesService } from '../services/pharmacies.service';
import { Medicine } from 'src/app/model/medicine';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-pharmacies',
  templateUrl: './pharmacies.component.html',
  styleUrls: ['./pharmacies.component.scss']
})
export class PharmaciesComponent implements OnInit {

  selected: string ="";
  search : String ="";
  dataSource!: MatTableDataSource<any>;
  employees!: Observable<Employee[]>;
  medicines!: Observable<Medicine[]>;
  displayedColumns: string[] = ['ID','MedicineName','MedicineCode','RegisterCode','LotCode', 'ManufactureDate','MedicineCompany', 'Origin','CriteriaManufacture','SpecPackage','Concentration','UsageForm', 'ExpireDate','Unit','Amount', 'Cost','Actions'];

  constructor(private pharmaciesService: PharmaciesService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.medicines = this.pharmaciesService.getMedicineList();
    // Thắng
    this.pharmaciesService.getMedicineList().subscribe(data => {
      data.sort((a: Medicine, b: Medicine) => {
        return a.id - b.id;
        //return  new Date(b.manufactureDate).getDate() - new Date(a.manufactureDate).getDate();
    });
      this.dataSource = new MatTableDataSource(data);
   })
  }
  
  medicineDetails(id: number){
    this.router.navigate(['details', id]);
  }

  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  report(selected: string){
    if(!selected){
      alert("Please choose a month for report!");
    } else{
      console.log(selected);

    this.pharmaciesService.getReport(selected).subscribe(
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
  
  deleteMedicine(id: number) {
    this.pharmaciesService.deleteMedicine(id)
      .subscribe(
        data => {
          console.log(data);
          //this.reloadData();
        },
        error => console.log(error));
  }


}

