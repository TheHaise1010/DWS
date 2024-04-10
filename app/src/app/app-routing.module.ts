import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import { RegisterComponent } from './register/register.component';
import { NavComponent } from './nav/nav.component';
import { ShopComponent } from './shop/shop.component';
import { ModalComponent } from './modal/modal.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'registro', component: RegisterComponent},
  {path:'nav', component:NavComponent},
  {path:'shop', component:ShopComponent},
  {path:'modal', component:ModalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
