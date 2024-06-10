import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  searchPlaceholder: string = '';

  constructor(private translate: TranslateService) {
    // Define the default language
    this.translate.setDefaultLang('en');
    this.setPlaceholder();

    // Subscribe to language changes to update the placeholder dynamically
    this.translate.onLangChange.subscribe(() => {
      this.setPlaceholder();
    });
  }

  traduzirPagina(language: string) {
    this.translate.use(language);
  }

  setPlaceholder() {
    this.translate.get('SEARCH').subscribe((res: string) => {
      this.searchPlaceholder = res;
    });
  }
}
