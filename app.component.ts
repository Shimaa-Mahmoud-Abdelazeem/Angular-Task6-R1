import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-task-day6';
  blueviolet=true;
  palevioletred=false;
changecolor(){
this.blueviolet =!this.blueviolet;
this.palevioletred=!this.palevioletred;
}
callPhone(par:any){
console.log(par);
}

username2  = "   " ;
calluername( parm :any ){
  console.log(parm)
 }
}
