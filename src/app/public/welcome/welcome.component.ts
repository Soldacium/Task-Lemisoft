import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { JokesService } from '@shared/services/jokes.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WelcomeComponent {
  constructor(private jokesService: JokesService, private router: Router) {}

  routeToRandomJoke() {
    const randomJokeId = this.jokesService.getRandomJoke().id;
    this.router.navigate([`/app/joke/${randomJokeId}`]);
  }
}
