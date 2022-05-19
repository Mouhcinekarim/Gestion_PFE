import { Injectable } from '@angular/core';
import { HttpClient,HttpEvent ,HttpHeaders} from '@angular/common/http';
import {PFE} from 'src/app/Module/PFE'
import {Prof} from 'src/app/Module/Prof';
import {PFEfile} from 'src/app/Module/PFEfile'
import { Group } from '../Module/groupe';
import {GroupPfe} from '../Module/GroupPfe'

@Injectable({
  providedIn: 'root'
})
export class ServicePfeService {
  private server = "http://localhost:8084";
  constructor(private http:HttpClient) { }


  upload(formData:string){
    return this.http.post<string>(`${this.server}/PFE`, formData,{
      observe:'response'
    });
  }

      getAll(){
        return this.http.get<PFE[]>(`${this.server}/PFE`);
      }

      AddProf(prof:Prof){
        console.log(prof)
        let headers = new HttpHeaders();
        headers.append('content-type', 'application/json');
      headers.append('accept', 'application/json');
        console.log("entrer")
        return this.http.post<Prof>(`${this.server}/Professeur`,prof,{headers: headers});
      }

      getListPfeByIdProf(idProf:string){
         return this.http.get<PFEfile[]>(`${this.server}/Professeur/pfe/${idProf}`)
      }

      update(formData,idpfe){
        return this.http.put<string>(`${this.server}/PFE/update?idpfe=${idpfe}`, formData,{
          observe:'response'
        });
      }

      SendGroup(groupe:Group){
        let headers = new HttpHeaders();
        headers.append('content-type', 'application/json');
        headers.append('accept', 'application/json');
        console.log("entrer")
        return this.http.post(`${this.server}/groupe`,groupe,{headers: headers});


      }

      getGroupProf(id:string){
        return this.http.get<GroupPfe[]>(`${this.server}/Professeur/groupe/${id}`) 
      }
  

      getPfeGroup(email:string){
        return this.http.get<GroupPfe>(`${this.server}/groupe/${email}`) 
      }

}
