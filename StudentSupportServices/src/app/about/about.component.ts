import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  BakeLink = "https://t.me/ALLETttttt"
  ErdaLink = "https://t.me/e7abdurakhman"
  ZhuldyzLink = "https://t.me/Juldyzzik"

  contactBakdaulet() {
    window.open(this.BakeLink)
  }

  contactYerdaulet() {
    window.open(this.ErdaLink)
  }

  contactZhuldyz() {
    window.open(this.ZhuldyzLink)
  }
}
