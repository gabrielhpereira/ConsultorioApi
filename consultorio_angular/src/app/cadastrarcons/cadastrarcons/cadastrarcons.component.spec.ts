import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarconsComponent } from './cadastrarcons.component';

describe('CadastrarconsComponent', () => {
  let component: CadastrarconsComponent;
  let fixture: ComponentFixture<CadastrarconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
