import {Component, EventEmitter, Input, OnInit, Output  } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

@Input()  text:string=" ";
@Output()btnClick= new EventEmitter();

constructor(){

}

onClick():void{
this.btnClick.emit()
}

}
