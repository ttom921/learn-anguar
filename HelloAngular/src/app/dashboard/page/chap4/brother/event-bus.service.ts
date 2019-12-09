import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

/**
 * 用來當事件總線的service
 *
 * @export
 * @class EventBusService
 */
@Injectable({
  providedIn: 'root'
})

export class EventBusService {
  eventBus: Subject<string> = new Subject<string>();
  constructor() { }
}
