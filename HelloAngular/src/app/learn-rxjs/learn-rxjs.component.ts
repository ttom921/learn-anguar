import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
@Component({
  selector: 'learn-rxjs',
  templateUrl: './learn-rxjs.component.html',
  styleUrls: ['./learn-rxjs.component.scss']
})
export class LearnRxjsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //promse用法
    let promise = new Promise(resolve => {
      setTimeout(() => {
        resolve('---promise timeout---');
      }, 2000);
    });
    promise.then(value => console.log(value));
    //RxJS
    let stream1$ = new Observable(observer => {
      let timeout = setTimeout(() => {
        observer.next("---RxJS--timeout");
      }, 2000);
      return () => {
        clearTimeout(timeout);
      }
    });
    let disposable = stream1$.subscribe(value => console.log(value));
    setTimeout(() => {
      disposable.unsubscribe();
    }, 1000);
    //
    let stream2$ = new Observable<number>(observer => {
      let count = 0;
      let interval = setInterval(() => {
        observer.next(count++);
      }, 1000);
      return () => {
        clearInterval(interval);
      }
    });
    stream2$.pipe(
      filter(val => val % 2 == 0)
    ).subscribe(value => console.log("filter->" + value));

    stream2$.pipe(
      map(value => value * value)
    ).subscribe(value => console.log("map->" + value));

    //stream2$.subscribe(value => console.log("Observable->" + value));
  }


}
