import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  list2:Array<string>=["Apple", "Orange", "Banana", "Blueberry", "Cherry", "Date", "Pea", "Pear", "Olive"] 
  list1:Array<string>=[]
  value:String=""
  constructor(){}
  ngOnInit() {}
  //this function will add a new value to list1 
  pushTo1(){
     console.log(this.value, "holi")   
    this.list1.push(this.value.toString().toLowerCase().replace(/ /g,"_"));
    this.value=""
    }

}
