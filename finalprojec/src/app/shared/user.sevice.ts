import { Injectable } from '@angular/core';
import { User } from '../interfaces/auth';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public logedUser: User | null = null;

  public get isUserLoged(): boolean {
    return !!this.logedUser;
  }
}
