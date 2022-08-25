import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { PharmaciesComponent } from 'src/app/modules/pharmacies/pharmacies.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImportStoreComponent } from 'src/app/modules/import-store/import-store.component';
import { ExportStoreComponent } from 'src/app/modules/export-store/export-store.component';
import { LoginComponent } from 'src/app/modules/login/login.component';
import { MatSelectModule } from '@angular/material/select'
import {MatRadioModule} from '@angular/material/radio'
import {MatNativeDateModule} from '@angular/material/core';



import { MatCardModule } from "@angular/material/card";
import { UpdatePharmacyComponent } from 'src/app/modules/update-pharmacy/update-pharmacy.component';
import { PharmacyComponent } from 'src/app/modules/pharmacy/pharmacy.component';


@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    PharmaciesComponent,    
    ImportStoreComponent,
    ExportStoreComponent,
    LoginComponent,
    UpdatePharmacyComponent,
    PharmacyComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class DefaultModule { }
