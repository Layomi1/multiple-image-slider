import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'multiple-image-slider';

  constructor() {}
  ngOnInit(): void {}
  // prev() {
  //   let slider = document.getElementsByClassName('slider-main');
  //   for (let index = 0; index < slider.length; index++) {
  //     slider.length - 1;
  //   }
  // }
  // next() {}
}
