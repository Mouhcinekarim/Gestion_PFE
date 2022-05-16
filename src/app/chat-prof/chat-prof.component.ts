import { Component, OnInit ,Input} from '@angular/core';
import { GroupPfe } from '../Module/GroupPfe';

@Component({
  selector: 'app-chat-prof',
  templateUrl: './chat-prof.component.html',
  styleUrls: ['./chat-prof.component.css']
})
export class ChatProfComponent implements OnInit {
  
  @Input() grouppfe:GroupPfe
  constructor() { }

  
  ngOnInit(): void {
  }

}
