import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SouthWalesComponent } from './south-wales.component';

describe('SouthWalesComponent', () => {
  let component: SouthWalesComponent;
  let fixture: ComponentFixture<SouthWalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SouthWalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SouthWalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
