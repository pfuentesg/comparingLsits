import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
export class ListService {
private url:string=environment.BASEURL+'/api/'
  constructor(private http:Http) { }
  retriveList(){
    console.log(`${this.url}getlists`)
   return  this.http.get(`${this.url}getlist`)
   .map(res=>{return res.json()})
   .catch(err=> {throw("error en la peticion")} ) 

  }
}//end of class
