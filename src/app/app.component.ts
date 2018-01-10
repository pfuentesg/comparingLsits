import { Component, OnDestroy } from '@angular/core';
import {ListService } from './services/list.service'
import "rxjs/add/operator/takeWhile";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy{
  private list2:Array<string>
  private list1:Array<string>
  private value:String
  private alive:boolean
  constructor(private listService:ListService){
  this.list1=[]
  this.list2=[] 
  this.alive=true
  }
  ngOnDestroy(){
    this.alive=false
  }
  //this function will add a new value to list1 
  pushTo1(){
    if (this.value && this.list1.length<10000){
    this.list1.push(this.value.toString().toLowerCase().replace(/ /g,"_"));
    this.value=undefined
    }
  }
  retriveData(){
    this.listService.retriveList().takeWhile(() => this.alive).subscribe(res=>{this.list2=res.list.map(item=>item.toString().toLowerCase().replace(/ /g,"_"))})
  }
  transform(value: string): string {
    if(value){
      value=value.charAt(0).toUpperCase() + value.slice(1);
      return value.replace(/_/g," ")
    }
  }
  compareLists(){
    if(this.list1&&this.list2&&this.list1.length>0&&this.list2.length>0){
      console.log(this.list1, this.list2)
      let deleted=0
      this.list2.forEach((item,index)=>{
        console.log(this.list1.indexOf(item), item)
          if (this.list1.indexOf(item) ==-1){
            this.list2[this.list2.indexOf(item)]=null
            console.log(item, "holi me boorro de list2")
        }
        else {
          console.log(this.list1.indexOf(item))
          this.list1.splice(this.list1.indexOf(item),1)
          console.log(item)
        }
      })
      console.log(this.list1)
      this.list2=this.list2.concat(this.list1)
      this.list2.join(' ').split('')
      this.list1=[]
      console.log()
  }
 }
}
