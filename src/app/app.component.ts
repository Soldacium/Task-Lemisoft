import { Component } from '@angular/core';
import {
  RouteConfigLoadEnd,
  RouteConfigLoadStart,
  Router,
  RouterEvent,
} from '@angular/router';
import { JokesService } from '@shared/services/jokes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test';
  isLoading = false;

  constructor(private jokesService: JokesService, private router: Router) {
    this.setupLoading();
  }

  setupLoading() {
    this.router.events.subscribe((event: any) => {
      if (event instanceof RouteConfigLoadStart) {
        this.isLoading = true;
      } else if (event instanceof RouteConfigLoadEnd) {
        this.isLoading = false;
      }
    });
  }
  routeToRandomJoke() {
    const randomJokeId = this.jokesService.getRandomJoke().id;
    this.router.navigate([`/app/joke/${randomJokeId}`]);
  }

  isRouteActive(url: string): boolean {
    return this.router.url.includes(url);
  }
}
