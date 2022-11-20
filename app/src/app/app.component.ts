import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ct-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web';

  constructor(private readonly translate: TranslateService) {
    translate.setDefaultLang('fr');

    translate.use('fr');
  }
}
