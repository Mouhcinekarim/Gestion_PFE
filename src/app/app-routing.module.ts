import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from 'src/app/home/home.component'
import {AddPfeComponent} from  'src/app/add-pfe/add-pfe.component';
import { AddProfComponent } from './add-prof/add-prof.component';
import { ListPfeComponent } from './list-pfe/list-pfe.component';
import { AddGroupComponent } from './add-group/add-group.component'
import { ListGroupComponent } from './list-group/list-group.component'
import { ListPfeV2Component } from './list-pfe-v2/list-pfe-v2.component'
import { ChatProfComponent } from './chat-prof/chat-prof.component'
import { ChatGroupComponent } from './chat-group/chat-group.component'
import { ChatHomeComponent } from './chat-home/chat-home.component';
const routes: Routes = [
  {path:'ajouter',component:AddPfeComponent},
  {path:'cherche',component:HomeComponent},
  {path:'Prof',component:AddProfComponent},
  {path:'mesPfe',component:ListPfeComponent},
  {path:'Addgoupe',component:AddGroupComponent},
  {path:'mesgroups',component:ListGroupComponent},
  {path:'mesPfe2',component:ListPfeV2Component},
  {path:'chatprog',component:ChatProfComponent},
  {path:'group',component:ChatGroupComponent},
  {path:'hommessage',component:ChatHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
