import { Routes } from '@angular/router';
import { InicialComponent } from './Inicial/inicial.component';
import { GerraAustraliaComponent } from './Museus/gerra-australia/gerra-australia.component';
import { MelbourneComponent } from './Museus/melbourne/melbourne.component';
import { SouthWalesComponent } from './Museus/south-wales/south-wales.component';
import { NationalAustralianComponent } from './Museus/national-australian/national-australian.component';
import { LouvreComponent } from './Museus/louvre/louvre.component';

export const routes: Routes = [
    {path: '', component: InicialComponent},
    {path: 'guerraAustralia', component: GerraAustraliaComponent},
    {path: 'melbourne', component: MelbourneComponent},
    {path: 'southWales', component: SouthWalesComponent},
    {path: 'nationalAustralian', component: NationalAustralianComponent},
    {path: 'louvre', component: LouvreComponent}
];
