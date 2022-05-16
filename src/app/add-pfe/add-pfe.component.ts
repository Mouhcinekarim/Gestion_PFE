import { Component, OnInit } from '@angular/core';
import {PFEinfo} from 'src/app/Module/PFEinfo';
import {ServicePfeService} from 'src/app/Service/service-pfe.service'
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-pfe',
  templateUrl: './add-pfe.component.html',
  styleUrls: ['./add-pfe.component.css']
})
export class AddPfeComponent implements OnInit {
  currentTime = new Date()
  closeResult :string;
  pfe:PFEinfo;
  photo:Blob;
  rapport:Blob;
  constructor(private fileService:ServicePfeService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.pfe=new  PFEinfo();
    this.pfe.idprof=2;

  }

  chargerapport(event:any){
    this.rapport=event.target.files[0];
  }

  chargephoto(event:any){
    this.photo=event.target.files[0];
  }



  Upload(){
    console.log(this.pfe)
    var formdata = new FormData();
    formdata.append('rapport',this.rapport);
    formdata.append('PFEinfo',JSON.stringify(this.pfe))
    formdata.append('photo',this.photo);
    
    
    console.log(JSON.stringify(this.pfe))
    this.fileService.upload(formdata).subscribe(
      resp => {
        console.log(resp.status)
        if(resp.status === 200)  console.log("uploaded")
        else console.log("no 200")
      
      }
      
    )
  }
  
// ----------------------------Concerne modal 
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
