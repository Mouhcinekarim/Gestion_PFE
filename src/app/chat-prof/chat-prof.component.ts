import { Component, OnInit ,Input} from '@angular/core';
import { GroupPfe } from '../Module/GroupPfe';
import {ServicePfeService} from 'src/app/Service/service-pfe.service';
@Component({
  selector: 'app-chat-prof',
  templateUrl: './chat-prof.component.html',
  styleUrls: ['./chat-prof.component.css']
})
export class ChatProfComponent implements OnInit {
  role:string='Professeur'
  username:string='hichame@gmail.com'
  @Input() grouppfe:GroupPfe
  constructor(private fileService:ServicePfeService) { }

  
  ngOnInit(): void {
  
  }

}
