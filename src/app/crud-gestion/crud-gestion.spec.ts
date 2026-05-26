import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudGestion } from './crud-gestion';

describe('CrudGestion', () => {
  let component: CrudGestion;
  let fixture: ComponentFixture<CrudGestion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudGestion],
    }).compileComponents();

    fixture = TestBed.createComponent(CrudGestion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
