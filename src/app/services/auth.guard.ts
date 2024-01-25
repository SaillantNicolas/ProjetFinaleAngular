import { inject } from "@angular/core";
import { CanActivateFn, Router, UrlTree } from "@angular/router";
import { AuthService } from "./auth.service";

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isLog()
    .then((authenticated: any): true | UrlTree => {
        if (authenticated) {
          console.log("Vous etes admin, navigation autorisee");
          return true;
        } else {
          console.log("Vous n'etes pas admin, navigation refusee");
          return router.createUrlTree(["/home"]);
        }
      })
    .catch((error: any) => {
      console.error("Erreur de navigation", error);
      return router.createUrlTree(["/home"]);
    });
};