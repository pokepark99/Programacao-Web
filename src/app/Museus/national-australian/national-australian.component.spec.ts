import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalAustralianComponent } from './national-australian.component';

describe('NationalAustralianComponent', () => {
  let component: NationalAustralianComponent;
  let fixture: ComponentFixture<NationalAustralianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NationalAustralianComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NationalAustralianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
