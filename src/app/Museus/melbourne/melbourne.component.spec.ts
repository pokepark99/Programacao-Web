import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MelbourneComponent } from './melbourne.component';

describe('MelbourneComponent', () => {
  let component: MelbourneComponent;
  let fixture: ComponentFixture<MelbourneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MelbourneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MelbourneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
