import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HomeComponent} from 'src/app/home/home.component'
import {AddPfeComponent} from  'src/app/add-pfe/add-pfe.component'
import { HttpClientModule } from '@angular/common/http';
import {AppRoutingModule} from 'C:/Users/user/Desktop/PFE/Projet Angular/Gestion_PFE/src/app/app-routing.module';
import { AddProfComponent } from './add-prof/add-prof.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ListPfeComponent } from './list-pfe/list-pfe.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { AffichePfeComponent } from './affiche-pfe/affiche-pfe.component';
import { AddGroupComponent } from './add-group/add-group.component';
import { ListGroupComponent } from './list-group/list-group.component';
import { ListPfeV2Component } from './list-pfe-v2/list-pfe-v2.component';
import { ChatProfComponent } from './chat-prof/chat-prof.component';
import { ChatGroupComponent } from './chat-group/chat-group.component';
import { ChatHomeComponent } from './chat-home/chat-home.component';
import { ListUserComponent } from './list-user/list-user.component';
import { ListuComponent } from './listu/listu.component';
import { MessagesComponent } from './messages/messages.component'
import { MatInputModule } from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import { InjectableRxStompConfig, RxStompService, rxStompServiceFactory } from '@stomp/ng2-stompjs';
import { myRxStompConfig } from './my-rx-stomp.config';
import {MatListModule} from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddPfeComponent,
    AddProfComponent,
    ListPfeComponent,
    AffichePfeComponent,
    AddGroupComponent,
    ListGroupComponent,
    ListPfeV2Component,
    ChatProfComponent,
    ChatGroupComponent,
    ChatHomeComponent,
    ListUserComponent,
    ListuComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatInputModule,
    MatGridListModule,
    MatListModule,
    BrowserAnimationsModule
    
  ],
  providers: [{
    provide: InjectableRxStompConfig,
    useValue: myRxStompConfig
  },
  {
    provide: RxStompService,
    useFactory: rxStompServiceFactory,
    deps: [InjectableRxStompConfig]
  },],
  bootstrap: [AppComponent,AddPfeComponent]
})
export class AppModule { }
