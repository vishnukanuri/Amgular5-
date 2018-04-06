import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddressComponent }   from './address/address.component';
import { RetriveDataComponent }      from './retrive-data/retrive-data.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: AddressComponent },
  { path: 'data', component: RetriveDataComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}