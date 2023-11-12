import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordStrengthEnum } from '../../models/password-strength.enum';

@Component({
  selector: 'app-strength-resuls',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './strength-resuls.component.html',
  styleUrl: './strength-resuls.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StrengthResulsComponent {
  @Input() password: string = '';

  StrengthEnum = PasswordStrengthEnum;

  minCountOfCharacters = 8;
  hasLettersRegex = /[a-zA-Z]/;
  hasNumbers = /[0-9]/;
  hasSymbols = /[^a-zA-Z0-9]/;

  isShort(): boolean {
    return !!this.password.length && this.password.length < this.minCountOfCharacters;
  }

  checkStrength(): number {
    if (this.isShort()) return 0;

    let count = 0;

    if (this.hasLettersRegex.test(this.password)) {
      count++;
    }

    if (this.hasNumbers.test(this.password)) {
      count++;
    }

    if (this.hasSymbols.test(this.password)) {
      count++;
    }

    return count;
  }
}
