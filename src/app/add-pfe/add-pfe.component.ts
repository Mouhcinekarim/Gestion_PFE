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
  
  constructor(private fileService:ServicePfeService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.pfe=new  PFEinfo();
    this.pfe.idprof='hichame@gmail.com';

  }

  chargerapport(event:any){
     this.blobToBase64( event.target.files[0]).then(res=>{
      this.pfe.rapport1=(res as string);
      this.pfe.conferm=true
    })
  
  }

  chargephoto(event:any){

    this.blobToBase64( event.target.files[0]).then(res=>{
      this.pfe.photo1=(res as string);
      this.pfe
    })
  
   
  }



  Upload(){
    console.log(this.pfe)
    var formdata = new FormData();
   
  //  JSON.stringify(this.pfe)
   
    
    
    console.log(JSON.stringify(this.pfe))
    this.pfe.anne=this.currentTime.getFullYear();
    this.fileService.upload(JSON.stringify(this.pfe)).subscribe(
      resp => {
        console.log(resp.status)
        if(resp.status === 200) { this.pfe=new PFEinfo();
                                  this.pfe.idprof='hichame@gmail.com'

        }
        else console.log("no 200")
      
      }
      
    )
  }
  
// ----------------------------Concerne modal 
  open(content,id) {
    console.log(content)
    this.modalService.open(content, {ariaLabelledBy: id}).result.then((result) => {
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
  // ---------------------convert blob to base64
   blobToBase64  = blob => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    return new Promise<string|ArrayBuffer>(resolve => {
      reader.onloadend = () => {
        resolve(reader.result);
      };
    });
  };
}
