import { Component, OnInit } from '@angular/core';
import {ServicePfeService} from 'src/app/Service/service-pfe.service';

import { GroupPfe } from '../Module/GroupPfe';
@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html',
  styleUrls: ['./list-group.component.css']
})
export class ListGroupComponent implements OnInit {
  groupe:GroupPfe[];
  niveuxSet=new Set<string>();
  group:GroupPfe;
  constructor(private fileService:ServicePfeService) { }

  ngOnInit(): void {
    this.getList()
    console.log("list "+this.groupe)
  }
   
  getList(){

    this.fileService.getGroupProf(1).subscribe((resp)=>{
     
      this.groupe=resp;
      console.log( this.groupe)
      this.groupe.forEach((pfe)=>{
        this.niveuxSet.add(pfe.niveau)
       
     })
    }) 
  }
  getListPfeByniveu(niveux:String){
    return this.groupe.filter((group)=> (group.niveau==niveux))

  }
}
