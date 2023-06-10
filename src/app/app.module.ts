import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './kg-pages/homepage/homepage.component';
import { MyInfoComponent } from './kg-pages/myi-info/my-info.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { KgPagesComponent } from './kg-pages/kg-pages.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    MyInfoComponent,
    SideNavbarComponent,
    KgPagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
