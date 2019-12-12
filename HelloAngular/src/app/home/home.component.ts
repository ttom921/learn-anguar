import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      console.log(event);
      //可以爭instanceof來判斷事件的類型，然後去做你想要做的事情
      console.log(event instanceof NavigationStart);
    });
  }

  ngOnInit() {

  }

}
