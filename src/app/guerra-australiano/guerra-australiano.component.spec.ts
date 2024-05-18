import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuerraAustralianoComponent } from './guerra-australiano.component';

describe('GuerraAustralianoComponent', () => {
  let component: GuerraAustralianoComponent;
  let fixture: ComponentFixture<GuerraAustralianoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuerraAustralianoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GuerraAustralianoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
