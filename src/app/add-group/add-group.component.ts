import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../Module/Etudiant';
import { Group } from '../Module/groupe';
import {ServicePfeService} from 'src/app/Service/service-pfe.service'
@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.css']
})
export class AddGroupComponent implements OnInit {
  nbrEtudiant:number=0;
  ListEtudiant:Etudiant[]=[];
  groupe:Group;
  etudiant:Etudiant;
  constructor(private fileService:ServicePfeService) { }
 
  ngOnInit(): void {
 this.groupe=new Group();
   this.etudiant=new Etudiant();

  }
  charge(nbr:any){
    
    if(nbr!==null){
      for(let i=  nbr>this.ListEtudiant.length? this.ListEtudiant.length:nbr;i< (nbr<this.ListEtudiant.length? this.ListEtudiant.length:nbr);i++) {
        console.log(this.ListEtudiant[i])
        this.ListEtudiant[i]=new  Etudiant();}
        for(let i=nbr;i<this.ListEtudiant.length;i++ ) this.ListEtudiant[i]=undefined
    }
  }
  affiche(){
    this.groupe.etudiants=this.ListEtudiant;
    console.log(JSON.stringify(this.groupe))
    this.fileService.SendGroup(this.groupe).subscribe();
  }
}
