import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ExportStoreComponent } from './modules/export-store/export-store.component';
import { ImportStoreComponent } from './modules/import-store/import-store.component';
import { LoginComponent } from './modules/login/login.component';
import { LogoutComponent } from './modules/logout/logout.component';
import { PharmaciesComponent } from './modules/pharmacies/pharmacies.component';
import { PharmacyComponent } from './modules/pharmacy/pharmacy.component';
import { PostsComponent } from './modules/posts/posts.component';
import { AuthGaurdService } from './modules/services/auth-gaurd.service';
import { UpdatePharmacyComponent } from './modules/update-pharmacy/update-pharmacy.component';

const routes: Routes = [{
  path: '', 
  component: DefaultComponent,
  children: [
  {
    path: 'dashboard', 
    component: DashboardComponent
  },
  {
    path: 'posts', component: PostsComponent, canActivate:[AuthGaurdService]
  },
  {
    path: 'pharmacies', component: PharmaciesComponent, canActivate:[AuthGaurdService]
  },
  { 
    path: 'details/:id', component: PharmacyComponent, canActivate:[AuthGaurdService]
  },
  { 
    path: 'update/:id', component: UpdatePharmacyComponent, canActivate:[AuthGaurdService]
  },
  { 
    path: 'input-store', component: ImportStoreComponent, canActivate:[AuthGaurdService]
  },
  { 
    path: 'export-store', component: ExportStoreComponent , canActivate:[AuthGaurdService]
  }
]
},
{ path: 'login', component: LoginComponent},
{ path: 'logout', component: LogoutComponent, canActivate:[AuthGaurdService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
