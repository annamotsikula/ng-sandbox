import { inject } from "@angular/core"
import { StorageService } from "../services/storage.service"
import { Router } from "@angular/router";
import { AUTH_TOKEN, REMEMBER_USER } from "../contstants/contstants";

export const authGuard = () => {
    const storage = inject(StorageService);
    const router = inject(Router);
    if(storage.itemExist(AUTH_TOKEN)) return true;

    return router.parseUrl('/')
}

export const autoLogIn = () => {
    const storage = inject(StorageService);
    const router = inject(Router);

    if(storage.itemExist(AUTH_TOKEN) && storage.itemExist(REMEMBER_USER)) {
        return router.parseUrl('main'); 
    }

    return true

}