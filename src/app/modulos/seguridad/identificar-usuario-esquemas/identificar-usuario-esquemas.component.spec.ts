import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificarUsuarioEsquemasComponent } from './identificar-usuario-esquemas.component';

describe('IdentificarUsuarioEsquemasComponent', () => {
  let component: IdentificarUsuarioEsquemasComponent;
  let fixture: ComponentFixture<IdentificarUsuarioEsquemasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IdentificarUsuarioEsquemasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IdentificarUsuarioEsquemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
