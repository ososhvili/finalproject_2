import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from './user.sevice';

export const restrictDashboardGuard: CanActivateFn = (route, state) => {
  if (!inject(UserService).isUserLoged) {
    inject(Router).navigateByUrl('/login');
  }

  return inject(UserService).isUserLoged ? true : false;
};
