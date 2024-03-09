import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BrowserComponent } from './browser/browser.component';

export const routes: Routes = [
    {path: '', component: BrowserComponent},
    {path: '**', redirectTo:'', pathMatch:'full'}
];
