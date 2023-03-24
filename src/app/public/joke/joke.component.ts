import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Joke } from '@shared/models/joke.model';
import { JokesService } from '@shared/services/jokes.service';
import { NotificationsService } from '@shared/services/notifications.service';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JokeComponent implements OnInit {
  joke!: Joke;
  isAddDialogOpen = false;
  jokeForm = {
    categoryId: '',
    joke: '',
  };
  constructor(
    private jokesService: JokesService,
    private route: ActivatedRoute,
    private router: Router,
    private notificationsService: NotificationsService,
    private changeDetectionRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getJoke();
  }

  getJoke() {
    this.route.params.subscribe((params) => {
      const recievedJoke = this.jokesService.getSingleJoke(params['id']);
      if (recievedJoke) {
        this.joke = { ...recievedJoke };
        this.changeDetectionRef.detectChanges();
      }
    });
  }

  getNextJoke() {
    if (this.joke) {
      const nextJokeId = this.jokesService.getNextJokeId(this.joke);
      nextJokeId && this.router.navigate(['/app/joke/' + nextJokeId]);
    }
  }

  addJoke() {
    this.jokesService.addJoke(this.jokeForm.categoryId, this.jokeForm.joke);
    this.closeAddDialog();
    this.notificationsService.pushNotification(
      'Success!',
      'Your joke was added to registry'
    );
  }

  openAddDialog() {
    this.isAddDialogOpen = true;
  }

  closeAddDialog() {
    this.isAddDialogOpen = false;
  }
}
