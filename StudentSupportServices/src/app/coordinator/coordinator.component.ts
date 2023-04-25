import { Component } from '@angular/core';

@Component({
  selector: 'app-coordinator',
  templateUrl: './coordinator.component.html',
  styleUrls: ['./coordinator.component.css']
})
export class CoordinatorComponent {
  path:string = "assets/1-floor_kbtu.jpg";

  click1(){
    this.path = "assets/1-floor_kbtu.jpg"
  }
  click2(){
    this.path = "assets/2-floor_kbtu.jpg"
  }
  click3(){
    this.path = "assets/3-floor_kbtu.jpg"
  }
  click4(){
    this.path = "assets/4-floor_kbtu.jpg"
  }
  click5(){
    this.path = "assets/5-floor_kbtu.jpg"
  }

}
