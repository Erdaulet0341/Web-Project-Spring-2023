import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-mode',
  templateUrl: './admin-mode.component.html',
  styleUrls: ['./admin-mode.component.css']
})
export class AdminModeComponent {
  email:String | undefined
  password: String | undefined
}
