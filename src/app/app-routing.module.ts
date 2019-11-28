import { CustomerComponentComponent } from './component/customer-component/customer-component.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'customer',component:CustomerComponentComponent},
  {path: 'aboutus',component:AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
