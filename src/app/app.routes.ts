import { Routes } from '@angular/router';
import { InicialComponent } from './Inicial/inicial.component';
import { GerraAustraliaComponent } from './Museus/gerra-australia/gerra-australia.component';


export const routes: Routes = [
    {path: '', component: InicialComponent},
    {path: 'guerraAustralia', component: GerraAustraliaComponent}
];
