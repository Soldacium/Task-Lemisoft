import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Joke } from '@shared/models/joke.model';
import { JokesService } from '@shared/services/jokes.service';
import { NotificationsService } from '@shared/services/notifications.service';

@Component({
  selector: 'app-my-jokes',
  templateUrl: './my-jokes.component.html',
  styleUrls: ['./my-jokes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyJokesComponent {
  myJokes: Joke[] = [];
  leftColumnJokes: Joke[] = [];
  rightColumnJokes: Joke[] = [];
  isDeleteDialogOpen: boolean = false;
  isAddDialogOpen: boolean = false;
  deletableJokeId: string = '';
  jokeForm = {
    categoryId: '',
    joke: '',
  };
  constructor(private jokesService: JokesService) {
    this.getJokesSubscribtion();
  }

  getJokesSubscribtion() {
    return this.jokesService.getUserJokesSubjest().subscribe((jokes) => {
      this.myJokes = jokes;
      this.splitJokesIntoColumns();
    });
  }

  getCategoryName(categoryId: string): string {
    return this.jokesService.getCatetegoryName(categoryId);
  }

  splitJokesIntoColumns() {
    this.leftColumnJokes = this.myJokes.filter((element, index) => {
      return index % 2 === 0;
    });

    this.rightColumnJokes = this.myJokes.filter((element, index) => {
      return index % 2 === 1;
    });
  }

  openAddDialog() {
    this.isAddDialogOpen = true;
  }

  closeAddDialog() {
    this.isAddDialogOpen = false;
  }
}
