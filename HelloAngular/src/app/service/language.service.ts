import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  language$ = new ReplaySubject<LangChangeEvent>(1);
  translate = this.translateService;
  private curlanguage = "en";
  constructor(private translateService: TranslateService) { }
  //初始化
  setInitState() {
    this.translateService.addLangs(['en', 'zh-tw']);
    if (localStorage.getItem("language") != null) {
      this.curlanguage = localStorage.getItem("language");
    } else {
      //localStorage.setItem("language",this.languages[i].title.toLowerCase());
      //根據使用者的瀏覽器語言設定，如果是中文就顯示中文，否則都顯示英文
      // 繁體/簡體中文代碼都是zh
      this.curlanguage = (this.translate.getBrowserLang().includes('zh')) ? 'zh-tw' : 'en';
      localStorage.setItem("language", this.curlanguage);
    }
    console.log("目前語言：" + this.curlanguage);
    this.translateService.use(this.curlanguage);
  }
  //切換語言使用
  selectLanguage(lang: string) {
    this.translateService.onLangChange.pipe(take(1)).subscribe(result => {
      this.language$.next(result);
    });
    this.translateService.use(lang);
    this.curlanguage = lang;
    localStorage.setItem("language", this.curlanguage);
  }
}
