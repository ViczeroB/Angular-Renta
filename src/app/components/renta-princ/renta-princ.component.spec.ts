import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentaPrincComponent } from './renta-princ.component';

describe('RentaPrincComponent', () => {
  let component: RentaPrincComponent;
  let fixture: ComponentFixture<RentaPrincComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RentaPrincComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RentaPrincComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
