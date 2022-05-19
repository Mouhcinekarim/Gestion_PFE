import { Component, OnInit,Input } from '@angular/core';
import { PFEfile } from '../Module/PFEfile';
import {PFEinfo} from 'src/app/Module/PFEinfo';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import {ServicePfeService} from 'src/app/Service/service-pfe.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-affiche-pfe',
  templateUrl: './affiche-pfe.component.html',
  styleUrls: ['./affiche-pfe.component.css']
})
export class AffichePfeComponent implements OnInit {
  @Input() pfe:PFEfile;
  closeResult :string;
  image:Blob
  imageURL:SafeUrl
  pfeUpdate:PFEinfo;
  currentTime = new Date()
  photo:Blob;
  rapport:Blob;
  constructor(private sanitizer: DomSanitizer,private fileService:ServicePfeService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.pfeUpdate=new  PFEinfo();
    
    
  }
   
  base64ToImage(base){
    this.image=this.base64ToBlob(base)
    this.imageURL = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(this.image))
    return this.imageURL
  }
  
  Doawload(base64:any,titre:string,type:string){
    const blob=this.base64ToBlob(base64);
   
    // console.log("daw");
    // console.log(base64)

    const a = document.createElement('a')
        const objectUrl = URL.createObjectURL(blob)
        a.href = objectUrl
        a.download = `${titre}.${type}`;
        a.click();
        URL.revokeObjectURL(objectUrl);
  }



  // ---------------------------------------------------------update de fichier
  
  chargerapport(event:any){
    this.rapport=event.target.files[0];
  }

  chargephoto(event:any){
    this.photo=event.target.files[0];
  }

  Upload(){
    console.log("w")
    console.log(this.pfe)
    this.pfeUpdate.anne= this.pfe.anne
    this.pfeUpdate.description= this.pfe.description
    this.pfeUpdate.niveau= this.pfe.niveau
    this.pfeUpdate.idprof= this.pfe.idprof
    this.pfeUpdate.titre= this.pfe.titre
    this.pfeUpdate.stage=this.pfe.stage
    console.log(this.pfeUpdate);
    var formdata = new FormData();
    formdata.append('rapport',this.rapport);
    formdata.append('PFEinfo',JSON.stringify(this.pfeUpdate))
    formdata.append('photo',this.photo);
    
    console.log(formdata)
    // console.log(JSON.stringify(this.pfeUpdate))
    this.fileService.update(formdata,this.pfe.pfeInfoId).subscribe(
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

// -------------------------------
  public base64ToBlob(b64Data, contentType='', sliceSize=512) {
   
   
    b64Data = b64Data.replace(/\s/g, ''); //IE compatibility...
    let byteCharacters = atob(b64Data);
    let byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        let slice = byteCharacters.slice(offset, offset + sliceSize);

        let byteNumbers = new Array(slice.length);
        for (var i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }
        let byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
    }
    return new Blob(byteArrays, {type: contentType});
}

}
