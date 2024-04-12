import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionarioFormComponent } from './funcionario-form.component';

describe('FuncionarioFormComponent', () => {
  let component: FuncionarioFormComponent;
  let fixture: ComponentFixture<FuncionarioFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuncionarioFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FuncionarioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
