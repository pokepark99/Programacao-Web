import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gerra-australia',
  templateUrl: './gerra-australia.component.html',
  styleUrls: ['./gerra-australia.component.css']
})
export class GerraAustraliaComponent implements OnInit {
  statusText: string = '';
  isModalOpen: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.updateStatus();
  }

  isOpenNow(): boolean {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const openingHour = 10;
    const closingHour = 16;

    if (hour >= openingHour && hour < closingHour) {
      return true;
    }
    if (hour === closingHour && minute === 0) {
      return true;
    }
    return false;
  }

  updateStatus(): void {
    if (this.isOpenNow()) {
      this.statusText = 'Aberto agora  ';
    } else {
      this.statusText = 'Encerrado agora  ';
    }
  }

  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  days: number[] = Array.from({length: 31}, (_, i) => i + 1);
  months: number[] = Array.from({length: 12}, (_, i) => i + 1);

  anoInicio: number = 2020; 
  anoFinal: number = 2030;   
  years: number[] = Array.from({length: this.anoFinal - this.anoInicio + 1}, (_, i) => this.anoInicio + i);

}
