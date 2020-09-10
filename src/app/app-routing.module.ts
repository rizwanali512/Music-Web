import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewAllComponent } from './view-all/view-all.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'view-more',
    component:ViewAllComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
