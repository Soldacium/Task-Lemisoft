import { NotificationsService } from '@shared/services/notifications.service';
import { Injectable } from '@angular/core';
import { Joke } from '@shared/models/joke.model';
import { exampleCategories } from '@shared/static-data/example-categories';
import { exampleJokes } from '@shared/static-data/example-jokes';
import { BehaviorSubject, Observable } from 'rxjs';
import { v4 } from 'uuid';
import { UserService } from './user.service';
import { Category } from '@shared/models/category.model';

@Injectable({
  providedIn: 'root',
})
export class JokesService {
  // most of this stuff should be done by backend: like filtering / deleteing
  // then we'd only need to play with http requests, not implementing logic
  // additionaly we could use ngrx but for now app is small enough that we can stay with service injection
  private jokes = new BehaviorSubject(exampleJokes);
  private userJokes = new BehaviorSubject<Joke[]>([]);
  constructor(
    private notificationsService: NotificationsService,
    private userService: UserService
  ) {}

  getSingleJoke(id: string): Joke | undefined {
    return this.jokes.value.find((joke) => joke.id === id);
  }

  getRandomJoke(): Joke {
    return this.jokes.value[
      Math.floor(this.jokes.value.length * Math.random())
    ];
  }

  getNextJokeId(currentJoke: Joke): string | null {
    const jokeIndex = this.jokes.value.findIndex(
      (joke) => joke.id === currentJoke.id
    );
    const nextId =
      jokeIndex < this.jokes.value.length - 1
        ? this.jokes.value[jokeIndex + 1].id
        : null;
    !nextId &&
      this.notificationsService.pushNotification(
        'Żarty się skończyły',
        'Na serio :(',
        'error'
      );
    return nextId;
  }

  getAllJokes(): Joke[] {
    return this.jokes.value;
  }

  getJokesSubject(): BehaviorSubject<Joke[]> {
    return this.jokes;
  }

  getUserJokesSubjest(): BehaviorSubject<Joke[]> {
    return this.userJokes;
  }

  updateUserJokesList() {
    this.userJokes.next(
      this.jokes.value.filter(
        (joke) => joke.ownerId === this.userService.user.id
      )
    );
  }

  getCatetegoryName(id: string): string {
    return (
      exampleCategories.find((category) => category.id === id)?.name ||
      'unknown category'
    );
  }

  getAllCategories(): Category[] {
    return exampleCategories;
  }

  deleteJoke(id: string): string {
    this.jokes.next(this.jokes.value.filter((joke) => joke.id !== id));
    this.userJokes.next(this.userJokes.value.filter((joke) => joke.id !== id));
    this.notificationsService.pushNotification(
      'Sukces',
      'Żart został pomyślnie usunięty.'
    );
    return id;
  }

  addJoke(categoryId: string, joke: string): Joke {
    const newJoke: Joke = {
      id: v4(),
      category: categoryId,
      content: joke,
      ownerId: this.userService.user.id,
    };
    this.jokes.next([...this.jokes.value, newJoke]);
    this.userJokes.next([...this.userJokes.value, newJoke]);
    this.notificationsService.pushNotification(
      'Sukces',
      'Żart został pomyślnie dodany.'
    );
    return newJoke;
  }
}
