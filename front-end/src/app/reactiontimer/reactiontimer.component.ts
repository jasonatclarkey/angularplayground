import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactiontimer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reactiontimer.component.html',
  styleUrl: './reactiontimer.component.css'
})
export class ReactiontimerComponent {

  isTimerRunning: boolean = false;
  isRed: boolean = false;
  startTime: number = 0;
  score: number = 0.00;

  startTimer() {
    this.isTimerRunning = true;
    this.isRed = false;
    const randomTime = (Math.random() * 4000) + 1000;
    setTimeout(() => {
      this.isRed = true;
      this.startTime = performance.now();
    }, randomTime);
  }

  calculateScore() {
    if (this.isRed) {
      const endTime = performance.now();
      this.score = (endTime - this.startTime) / 1000;
      this.isTimerRunning = false;
      this.isRed = false;
    }
  }
}
