import { InjectionToken } from '@angular/core'

export const MY_CONFIG = {
  appName: "我的App",
  version: "1.0"
}
//'my-config.ts'這個字符串沒有什麼特別的用途，只是為這調式的時鯈打印出來好看
export const MY_CONFIG_TOKEN = new InjectionToken<string>('my-config.ts');
