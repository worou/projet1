import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';     // Add this
import { AboutComponent } from './about/about.component';  // Add this

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about/:id',
    component: AboutComponent
  }
];


@NgModule({
  imports: [
    [ RouterModule.forRoot(routes) ],
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule { }
