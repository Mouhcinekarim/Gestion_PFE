import { Component, OnInit } from '@angular/core';
import {ServicePfeService} from 'src/app/Service/service-pfe.service';
import { GroupPfe } from '../Module/GroupPfe';
@Component({
  selector: 'app-chat-group',
  templateUrl: './chat-group.component.html',
  styleUrls: ['./chat-group.component.css']
})
export class ChatGroupComponent implements OnInit {
  role:string='groupe'
  username='mouhcine2001k@gmail.com'
  constructor(private fileService:ServicePfeService) { }
 InfoGroup:GroupPfe;
 email:string
  ngOnInit(): void {
    
    this.email=this.username;
      this.fileService.getPfeGroup(this.email).subscribe((resp)=>{
        this.InfoGroup=resp;
        console.log(this.InfoGroup)
      })
  }
  
}
