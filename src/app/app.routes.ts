import { Routes } from '@angular/router';
import { InicialComponent } from './Inicial/inicial.component';
import { GerraAustraliaComponent } from './Museus/gerra-australia/gerra-australia.component';
import { FieldComponent } from './Museus/field/field.component';
import { NationalAustralianComponent } from './Museus/national-australian/national-australian.component';
import { LouvreComponent } from './Museus/louvre/louvre.component';
import { XangaiComponent } from './Museus/xangai/xangai.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisteComponent } from './registe/registe.component';

export const routes: Routes = [
    {path: '', component: InicialComponent},
    {path: 'guerraAustralia', component: GerraAustraliaComponent},
    {path: 'field', component: FieldComponent},
    {path: 'xangai', component: XangaiComponent},
    {path: 'nationalAustralian', component: NationalAustralianComponent},
    {path: 'louvre', component: LouvreComponent},
    {path: 'about', component: AboutComponent},
    {path: 'login', component: LoginComponent},
    {path: 'registe', component: RegisteComponent}
];
