import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ExportStoreComponent } from './modules/export-store/export-store.component';
import { ImportStoreComponent } from './modules/import-store/import-store.component';
import { LoginComponent } from './modules/login/login.component';
import { PharmaciesComponent } from './modules/pharmacies/pharmacies.component';
import { PharmacyComponent } from './modules/pharmacy/pharmacy.component';
import { PostsComponent } from './modules/posts/posts.component';
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
    path: 'posts', component: PostsComponent
  },
  {
    path: 'pharmacies', component: PharmaciesComponent
  },
  { 
    path: 'details/:id', component: PharmacyComponent 
  },
  { 
    path: 'update/:id', component: UpdatePharmacyComponent 
  },
  { 
    path: 'input-store', component: ImportStoreComponent 
  },
  { 
    path: 'export-store', component: ExportStoreComponent 
  }
]
},
{ path: 'login', component: LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
