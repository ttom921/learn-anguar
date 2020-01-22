import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormQuickStartComponent } from './form-quick-start/form-quick-start.component';
import { ChineseMobileValidator } from './form-quick-start/directives/chinese-mobile-validator.directive';
import { UserRegisterComponent } from './user-register/user-register.component';
import { EqualValidator } from './user-register/equal-validator.directive';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FormControlComponent } from './user-profile/dynamic-form/form-control.component';
import { UserListComponent } from './user-list/user-list.component';
import { OrderListComponent } from './order-list/order-list.component';
import { UserListService } from './service/user-list.service';
import { LearnRxjsComponent } from './learn-rxjs/learn-rxjs.component';
import { LearnRxjsHttpComponent } from './learn-rxjs-http/learn-rxjs-http.component';
import { UnitTestComponent } from './unit-test/unit-test.component';
import { LoginComponent } from './login/login.component';
import { MyPipe } from './common/my.pipe';
import { HoverFocusDirective } from './_directive/hover-focus.directive';
//AoT requires an exported function for factories
//建立TransalteHttpLoader作為語系檔的讀取器
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    FormQuickStartComponent,
    ChineseMobileValidator,
    UserRegisterComponent,
    EqualValidator,
    UserProfileComponent,
    FormControlComponent,
    UserListComponent,
    OrderListComponent,
    LearnRxjsComponent,
    LearnRxjsHttpComponent,
    UnitTestComponent,
    LoginComponent,
    MyPipe,
    HoverFocusDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AppRoutingModule,
  ],
  providers: [UserListService],
  bootstrap: [AppComponent],
  entryComponents: [],
  exports: [EqualValidator]
})
export class AppModule { }
