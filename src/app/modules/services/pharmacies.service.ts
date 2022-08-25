import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PharmaciesService {

  private baseUrl = 'https://pharmacy-management-nineplus.herokuapp.com/pharmacy/api/v1/pharmacies';
  private exportUrl = 'https://pharmacy-management-nineplus.herokuapp.com/pharmacy/api/v1/pharmacies/export'

  constructor(private http: HttpClient) { }

  getEmployee(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  

  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getEmployeesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  // Pharmacy area

  getReport(selected: string) {
    return this.http.get(`${this.baseUrl}/download/${selected}`, {observe: 'response', responseType: 'blob'});
  }
  
  getMedicineList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  createMedicine(medicine: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, medicine);
  }

  exportMedicine(exportMedicine: Object): Observable<Object> {
    console.log('here')
    return this.http.post(`${this.exportUrl}`, exportMedicine);
  }

  getMedicineExportList(): Observable<any> {
    return this.http.get(`${this.exportUrl}`);
  }

  getMedicine(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updateMedicine(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteMedicine(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
}
