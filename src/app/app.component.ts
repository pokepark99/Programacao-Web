import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Inicial/header/header.component';
import { CorpoComponent } from './Inicial/corpo/corpo.component';
import { FooterComponent } from './Inicial/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CorpoComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TrabalhoWeb';
  dropdown = false;

  toggleDropdown() {
    this.dropdown = !this.dropdown;
  }

}
