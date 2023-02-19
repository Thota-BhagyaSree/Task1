import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
const allLinks:Routes = [
  {path:'admin',component: AdminComponent},
  {path:'user',component:UserComponent},
  
]
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(allLinks),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
