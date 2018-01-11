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
  private id:string
  private alive:boolean
  constructor(private listService:ListService){
  this.list1=[]
  this.list2=[] 
  this.alive=true
  }
  ngOnDestroy(){
    this.alive=false
  }
  //this function will add a new value to list1 (if value exists and array length is less than 10000)
  pushTo1(){
    if (this.value && this.list1.length<10000){
    this.list1.push(this.value.toString().toLowerCase().replace(/ /g,"_"));
    this.value=undefined
    }
  }
  ///will ask the service to ask the API for the array, we'll save the id also for the post after compare the lists
  retriveData(){
    this.listService.retriveList()
    .takeWhile(() => this.alive)
    .subscribe(res=>{if(res){this.setList2(res.data[0])}})
  }
  //used as a pipe return the expression with the first letter cappitaliced and with thitespaces
  transform(value: string): string {
    if(value){
      value=value.charAt(0).toUpperCase() + value.slice(1);
      return value.replace(/_/g," ")
    }
  }


  compareLists(){
    if(this.list1&&this.list2&&this.list1.length>0&&this.list2.length>0){
      let deleted=0
      this.list2.forEach((item,index)=>{
          if (this.list1.indexOf(item) ==-1){
            this.list2[this.list2.indexOf(item)]=null
        }
        else {
          this.list1.splice(this.list1.indexOf(item),1)
        }
      })
      this.list2=this.list2.concat(this.list1).filter(Boolean)
      this.list1=[]
      const data={
          id:this.id,
          list:this.list2
      }
      this.listService.saveList(data)
      .takeWhile(()=>this.alive)
      .subscribe()
  }
 }
 setList2(data){
  this.id=data._id
  this.list2=data.list.map(item=>item.toString().toLowerCase().replace(/ /g,"_"))
 }
}
