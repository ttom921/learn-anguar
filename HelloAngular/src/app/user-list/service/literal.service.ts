import { Injectable, Inject } from '@angular/core';
import { MY_CONFIG_TOKEN } from 'src/app/my-config';

@Injectable({
  providedIn: 'root'
})
export class LiteralService {

  constructor(
    @Inject(MY_CONFIG_TOKEN) config: Object
  ) {
    console.log(config);
  }
}
