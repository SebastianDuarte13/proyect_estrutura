import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiAccount } from './mi-account';

describe('MiAccount', () => {
  let component: MiAccount;
  let fixture: ComponentFixture<MiAccount>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiAccount],
    }).compileComponents();

    fixture = TestBed.createComponent(MiAccount);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
