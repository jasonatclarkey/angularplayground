import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiontimerComponent } from './reactiontimer.component';

describe('ReactiontimerComponent', () => {
  let component: ReactiontimerComponent;
  let fixture: ComponentFixture<ReactiontimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiontimerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReactiontimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
