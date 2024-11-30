import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasaUsuarioComponent } from './casa-usuario.component';

describe('CasaUsuarioComponent', () => {
  let component: CasaUsuarioComponent;
  let fixture: ComponentFixture<CasaUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasaUsuarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CasaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
