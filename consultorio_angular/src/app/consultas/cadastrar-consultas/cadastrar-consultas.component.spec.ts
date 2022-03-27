import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarConsultasComponent } from './cadastrar-consultas.component';

describe('CadastrarConsultasComponent', () => {
  let component: CadastrarConsultasComponent;
  let fixture: ComponentFixture<CadastrarConsultasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarConsultasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarConsultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
