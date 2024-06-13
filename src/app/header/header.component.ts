import { Component } from '@angular/core';
<<<<<<< HEAD
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
=======
>>>>>>> parent of a98fce7 (j)

@Component({
  selector: 'app-header',
  standalone: true,
<<<<<<< HEAD
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
=======
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {


  traduzirPagina(){
    // codigo para traduzir pag
    // o alerta e so para confirmar que a funcao esta a funcionar
    alert('Page will be translated to English');
  }
  
  SignUp(){
    //codigo para sign up
    alert("Sign up");
  }

  Login(){
    //codigo para login
    alert("Login");
>>>>>>> parent of a98fce7 (j)
  }
}
