import { Component, OnInit } from '@angular/core';
import { EventBusService } from '../event-bus.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit {

  constructor(private eventBusSevice: EventBusService) { }

  ngOnInit() {
  }
  triggerEventBus(): void {
    this.eventBusSevice.eventBus.next("第一個組件觸發的事件");
  }
}
