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
     
     list:PFEfile[]

     
     niveuxSet:Set<string>;
     anneSet:Set<number>;
     annes:number[];
     listboolean:Set<boolean>
  constructor(private fileService:ServicePfeService) { }

  ngOnInit(): void {
    console.log("hello")
    this.listboolean=new Set<boolean>()
    this.anneSet=new Set<number>();
    this.annes;
    this.niveuxSet=new Set<string>();
    
    this.fileService.getListPfeByIdProf('hichame@gmail.com').subscribe((resp)=>{
          this.annes=new Array<number>();
          this.listpfe=resp;
          this.listpfe.forEach((pfe)=>{
             this.listboolean.add(pfe.conferm)
            
          })
      
          console.log()
          if(this.listboolean.entries().next().value[0] && this.listboolean.size>1 ) {
            this.listboolean.delete(true);
            this.listboolean.add(true)
           
          }
          this.list=this.getListPfeByniveu(this.niveuxSet[0],this.anneSet[0],false);
    })
  }

  getlistAnne(conferm:boolean){
    this.anneSet=new Set<number>();
    
    this.listpfe.filter((pfe)=>pfe.conferm==conferm).forEach((pfe)=>{
      
      console.log(conferm)
      console.log(pfe.anne)
      this.annes.push(pfe.anne)
    
   })
   console.log(this.annes)
   this.annes.sort((a,b)=>b-a);
  
   this.annes.forEach((anne) =>this.anneSet.add(anne))

   console.log(this.anneSet)
  
   return this.anneSet
  }
  getListPfeByniveu(niveux:String,anne:number,conferm:boolean){
    return this.listpfe.filter((pfe)=> (pfe.niveau==niveux&&pfe.anne==anne&&pfe.conferm==conferm))

  }


   getListniveuxByanne(anne:number,conferm:boolean){
    this.niveuxSet=new Set<string>();
     this.listpfe.filter((pfe)=> (pfe.anne==anne&&pfe.conferm==conferm)).forEach((pfe)=>{ 
      console.log(pfe.anne)
      console.log(pfe) 
      this.niveuxSet.add(pfe.niveau);})
     
     return this.niveuxSet
   }
}
