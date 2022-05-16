import { Component, OnInit } from '@angular/core';
import {Prof} from 'src/app/Module/Prof';
import {ServicePfeService} from 'src/app/Service/service-pfe.service'
@Component({
  selector: 'app-add-prof',
  templateUrl: './add-prof.component.html',
  styleUrls: ['./add-prof.component.css']
})
export class AddProfComponent implements OnInit {
   prof:Prof;
  constructor(private fileService:ServicePfeService) { }

  ngOnInit(): void {
    this.prof=new Prof();


  }

  Ajouter(){
    console.log("Click")
    this.fileService.AddProf(this.prof).subscribe((res)=>{
      console.log("return")
    })
  }

}
