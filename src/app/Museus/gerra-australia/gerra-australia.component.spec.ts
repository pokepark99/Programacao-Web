import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerraAustraliaComponent } from './gerra-australia.component';

describe('GerraAustraliaComponent', () => {
  let component: GerraAustraliaComponent;
  let fixture: ComponentFixture<GerraAustraliaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GerraAustraliaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GerraAustraliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
