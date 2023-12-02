import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObtenerParametrosComponent } from './obtener-parametros.component';

describe('ObtenerParametrosComponent', () => {
  let component: ObtenerParametrosComponent;
  let fixture: ComponentFixture<ObtenerParametrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ObtenerParametrosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObtenerParametrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
