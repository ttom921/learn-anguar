import { Component, OnInit } from '@angular/core';
import { EventBusService } from '../event-bus.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit {
  events: Array<any> = [];
  constructor(private eventBusService: EventBusService) { }

  ngOnInit() {
    this.eventBusService.eventBus.subscribe((value) => {
      this.events.push(value + "-" + new Date());
    });
  }

}
