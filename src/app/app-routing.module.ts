import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './game/game.component';
import { GameIntroComponent } from './game-intro/game-intro.component';


const routes: Routes = [
    {
        path: '',
        component: GameIntroComponent
    },
    {
        path: 'game',
        component: GameComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
