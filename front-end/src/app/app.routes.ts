import { Routes } from '@angular/router';
import { FortunecookieComponent } from './fortunecookie/fortunecookie.component';
import { ReactiontimerComponent } from './reactiontimer/reactiontimer.component';
import { TictactoeComponent } from './tictactoe/tictactoe.component';
import { WelcomeComponent } from './welcome/welcome.component';

export const routes: Routes = [
    { path: '', component: WelcomeComponent, pathMatch: 'full' }, // Homepage
    { path: 'reactiontimer', component: ReactiontimerComponent },
    { path: 'tictactoe', component: TictactoeComponent },
    { path: 'fortunecookie', component: FortunecookieComponent },

];