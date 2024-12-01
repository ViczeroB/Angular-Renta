import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasaEditComponent } from './casa-edit.component';

describe('CasaEditComponent', () => {
  let component: CasaEditComponent;
  let fixture: ComponentFixture<CasaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasaEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CasaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
