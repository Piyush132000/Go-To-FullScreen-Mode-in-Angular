import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullScreenComponentComponent } from './full-screen-component.component';

describe('FullScreenComponentComponent', () => {
  let component: FullScreenComponentComponent;
  let fixture: ComponentFixture<FullScreenComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullScreenComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FullScreenComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
