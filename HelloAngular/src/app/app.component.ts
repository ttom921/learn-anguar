import { Component } from '@angular/core';
import { LanguageService } from './service/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HelloAngular';
  constructor(private languageService: LanguageService) {
    this.languageService.setInitState();
  }
  get currentLanguage() {
    return this.languageService.translate.currentLang;
  }
  useLanguage(language) {
    this.languageService.selectLanguage(language);
  }

  fatherDoSomething(ev) {
    console.log(ev);
  }
}
