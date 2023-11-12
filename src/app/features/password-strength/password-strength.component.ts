import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { StrengthResulsComponent } from './components/strength-resuls/strength-resuls.component';

@Component({
  selector: 'app-password-strength',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, StrengthResulsComponent],
  templateUrl: './password-strength.component.html',
  styleUrl: './password-strength.component.scss'
})
export class PasswordStrengthComponent {
  passwordStrength = new FormGroup({
    password: new FormControl<string | null>('', Validators.required)
  });
}
