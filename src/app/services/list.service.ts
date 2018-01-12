import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import {Observable} from "rxjs/Observable";
import {observableToBeFn} from "rxjs/testing/TestScheduler";
interface list{
  data:Array<String>
}
@Injectable()
export class ListService {
private url:string=environment.BASEURL+'/api/'
  constructor(private http:Http) { }

  retriveList():Observable<any>{
   return  this.http.get(`${this.url}getlist`)
   .map(res=>{ res.json()})
   .catch(err=> {throw("error en la peticion")} )
  }

  saveList(object){
    return this.http.post(`${this.url}postlist`,object)
      .map(res=>res.json())
      .catch(err=> {throw("error al mandar al backkend")})
  }
}//end of class
