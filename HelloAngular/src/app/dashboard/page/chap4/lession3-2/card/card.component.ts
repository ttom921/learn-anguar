import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  // styleUrls: ['./card.component.scss']
  styles: [`
  :host{
    padding: 2rem;
    font-size: 2rem;
    font-family: 'Helvetica', sans-serif;
    font-weight: 300;
    background: #337AB7;
    color: #FFFFFF;
    margin: 1rem;
    display: inline-block;
  }
  `]
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('card component loaded');
  }

}
