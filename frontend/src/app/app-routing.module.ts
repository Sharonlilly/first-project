import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

import {ReactiveFormsModule} from '@angular/forms';
import { SelfHelpComponent } from './self-help/self-help.component';
import { FantasyComponent } from './fantasy/fantasy.component';
import { FictionComponent } from './fiction/fiction.component';
import { HorrorComponent } from './horror/horror.component';


const routes: Routes = [
  
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'user-profile',component:UserProfileComponent,
children:[
  {path:'self-help',component:SelfHelpComponent},
{path:'fantasy',component:FantasyComponent},
{path:'fiction',component:FictionComponent},
{path:'horror',component:HorrorComponent}]}
]

   


  // { path: '', redirectTo: '/app', pathMatch: 'full' }


@NgModule({
  imports: [RouterModule.forRoot(routes),ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
