import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import { HomepageComponent } from './kg-pages/homepage/homepage.component';
import { MyInfoComponent } from './kg-pages/myi-info/my-info.component';
import { KgPagesComponent } from './kg-pages/kg-pages.component';

const routes: Routes = [
  {
    path: '',
    component: KgPagesComponent,
    children: [
      {
        path: 'home',
        component: HomepageComponent
      },
      {
        path: 'my-info',
        component: MyInfoComponent
      },
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
