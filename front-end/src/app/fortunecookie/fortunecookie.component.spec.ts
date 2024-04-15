import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FortunecookieComponent } from './fortunecookie.component';

describe('FortunecookieComponent', () => {
  let component: FortunecookieComponent;
  let fixture: ComponentFixture<FortunecookieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FortunecookieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FortunecookieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
