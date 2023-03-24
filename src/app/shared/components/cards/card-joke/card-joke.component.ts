import { JokesService } from '@shared/services/jokes.service';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Joke } from '@shared/models/joke.model';

@Component({
  selector: 'app-card-joke',
  templateUrl: './card-joke.component.html',
  styleUrls: ['./card-joke.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardJokeComponent {
  @Input('joke') joke!: Joke;
  @Input('min-height') minHeight = 0;
  @Input() isDeletable: boolean = false; // not attached to userId because maybe in the future "admin" will have the power to delete whatever
  isDeleteDialogOpen: boolean = false;

  constructor(private jokesService: JokesService) {}

  deleteJoke() {
    this.jokesService.deleteJoke(this.joke.id);
    this.closeDeleteDialog();
  }

  openDeleteDialog() {
    this.isDeleteDialogOpen = true;
  }

  closeDeleteDialog() {
    this.isDeleteDialogOpen = false;
  }

  getCategoryName(categoryId: string): string {
    return this.jokesService.getCatetegoryName(categoryId);
  }
}
