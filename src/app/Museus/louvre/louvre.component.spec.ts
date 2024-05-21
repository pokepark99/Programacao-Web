import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LouvreComponent } from './louvre.component';

describe('LouvreComponent', () => {
  let component: LouvreComponent;
  let fixture: ComponentFixture<LouvreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LouvreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LouvreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
