import { Component, OnInit } from '@angular/core';
import {ListService } from './services/list.service'
import { Observable } from "rxjs/Observable";
import 'rxjs'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  list2:Array<string>
  list1:Array<string>
  value:String
  constructor(private listService:ListService){
  this.list1=[]
  this.list2=[] 
  }
  ngOnInit() {}
  //this function will add a new value to list1 
  pushTo1(){
    if (this.value && this.list1.length<10000){
    this.list1.push(this.value.toString().toLowerCase().replace(/ /g,"_"));
    this.value=undefined
    }
  }
  retriveData(){
    this.listService.retriveList().subscribe(res=>{this.list2=res.list})

  //  console.log(this.list2)
  }
}
