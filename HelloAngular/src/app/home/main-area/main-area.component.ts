import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-area',
  templateUrl: './main-area.component.html',
  styleUrls: ['./main-area.component.scss']
})
export class MainAreaComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  menuName: string = "沒有選擇依何菜單";
  ngOnInit() {
    this.route.params.subscribe((params: { id: string }) => {
      console.log("當前菜單的ID > " + params.id);
      if (params.id == "1") {
        this.menuName = "只看圖片";
      } else if (params.id == "2") {
        this.menuName = "只看文字";
      }
    });
  }

}
