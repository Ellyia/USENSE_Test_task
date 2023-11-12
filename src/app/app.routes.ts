import { Routes } from '@angular/router';
import { PasswordStrengthComponent } from './features/password-strength/password-strength.component';

export const routes: Routes = [
  { path: '**', pathMatch: 'full', redirectTo: 'password-strength' },
  { path: 'password-strength', component: PasswordStrengthComponent }
];
