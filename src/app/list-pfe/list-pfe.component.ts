import { Component, OnInit } from '@angular/core';
import {ServicePfeService} from 'src/app/Service/service-pfe.service';
import { PFEfile } from '../Module/PFEfile';
import {MatExpansionPanel} from '@angular/material/expansion'

@Component({
  selector: 'app-list-pfe',
  templateUrl: './list-pfe.component.html',
  styleUrls: ['./list-pfe.component.css'],
  viewProviders: [MatExpansionPanel]
})
export class ListPfeComponent implements OnInit {
     panelOpenState = false;
     listpfe:PFEfile[];
     pfefirst:PFEfile;
     niveuxSet:Set<string>;
     anneSet:Set<number>;
     annes:number[];
  constructor(private fileService:ServicePfeService) { }

  ngOnInit(): void {
    console.log("hello")
    this.anneSet=new Set<number>();
    this.annes;
    this.niveuxSet=new Set<string>();
    this.fileService.getListPfeByIdProf('mouhssinkarim34@gmail.com').subscribe((resp)=>{
          this.annes=new Array<number>();
          this.listpfe=resp;
          this.listpfe.forEach((pfe)=>{
             this.annes.push(pfe.anne)
            
          })
          this.annes.sort((a,b)=>b-a);
          console.log(this.annes);
          this.annes.forEach((anne) =>this.anneSet.add(anne))

          
          this.pfefirst=this.listpfe[0];
    })
  }
  getListPfeByniveu(niveux:String,anne:number){
    return this.listpfe.filter((pfe)=> (pfe.niveau==niveux&&pfe.anne==anne))

  }


   getListniveuxByanne(anne:number){
    this.niveuxSet=new Set<string>();
     this.listpfe.filter((pfe)=> (pfe.anne==anne)).forEach((pfe)=>{ 
      console.log(pfe.anne)
      console.log(pfe) 
      this.niveuxSet.add(pfe.niveau);})
     
     return this.niveuxSet
   }
}
