import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from 'express';

export const authGuard: CanActivateFn = (route, state) => {
  // if (sessionStorage.getItem('email'))
  {
    return true;
  }
  // else {
  //   const router = inject(Router);
  //   return router.navigateByUrl('login');
  // }
};
