import { Component, OnInit } from '@angular/core';
import { count, interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
constructor(){};
ngOnInit(): void {
interval(1000).subscribe(count=>{
console.log(count)
})
}

}
