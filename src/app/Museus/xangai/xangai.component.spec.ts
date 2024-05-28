import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XangaiComponent } from './xangai.component';

describe('XangaiComponent', () => {
  let component: XangaiComponent;
  let fixture: ComponentFixture<XangaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XangaiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(XangaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
