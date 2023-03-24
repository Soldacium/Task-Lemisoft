import { JokesService } from '@shared/services/jokes.service';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from '@shared/models/category.model';

@Component({
  selector: 'app-dialog-add-joke',
  templateUrl: './dialog-add-joke.component.html',
  styleUrls: ['./dialog-add-joke.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogAddJokeComponent {
  @Input() isOpen = false;
  @Output() onClose = new EventEmitter<Event>();

  jokeForm: FormGroup = this.fb.group({
    categoryId: ['', Validators.required],
    joke: ['', Validators.required],
  });
  categories: Category[] = [];

  constructor(private jokesService: JokesService, private fb: FormBuilder) {
    this.getAllCategories();
  }

  getCategoryName(categoryId: string): string {
    return this.jokesService.getCatetegoryName(categoryId);
  }

  addJoke(event: Event) {
    this.jokesService.addJoke(
      this.jokeForm.value.categoryId,
      this.jokeForm.value.joke
    );
    this.closeAddDialog(event);
    this.jokeForm.reset();
  }

  closeAddDialog(event: Event) {
    this.isOpen = false;
    this.onClose.emit(event);
  }

  getAllCategories() {
    this.categories = this.jokesService.getAllCategories();
  }
}
