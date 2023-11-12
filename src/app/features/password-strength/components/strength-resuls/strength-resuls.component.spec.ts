import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrengthResulsComponent } from './strength-resuls.component';

describe('StrengthResulsComponent', () => {
  let component: StrengthResulsComponent;
  let fixture: ComponentFixture<StrengthResulsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StrengthResulsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StrengthResulsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
