import { Injectable } from '@angular/core';
import { User } from '@shared/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user!: User;
  constructor() {
    this.createPlaceholerUser();
  }

  private createPlaceholerUser() {
    this.user = {
      id: '1',
      email: 'example@gmail.com',
    };
  }
}
