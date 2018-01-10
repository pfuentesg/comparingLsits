import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  list2:Array<string>
  list1:Array<string>
  value:String
  constructor(){
  this.list1=[]
  this.list2=["Apple", "Orange", "Banana", "Blueberry", "Cherry", "Date", "Pea", "Pear"] 
  }
  ngOnInit() {}
  //this function will add a new value to list1 
  pushTo1(){
    if (this.value && this.list1.length<10000){
    this.list1.push(this.value.toString().toLowerCase().replace(/ /g,"_"));
    this.value=undefined
    }
  }

}
