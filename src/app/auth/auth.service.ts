import { Injectable, inject } from "@angular/core";
import { Auth } from "../helpers/interfaces/auth.interface";
import { StorageService } from "../helpers/services/storage.service";
import { REMEMBER_USER, expireTime, expireTimeKey } from "../helpers/contstants/contstants";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private _localStorage = inject(StorageService)

    logIn(data: Auth) {
        const remember = data.rememberUser
        if(remember) {
            const exp = Date.now() + expireTime
            this._localStorage.setItem(REMEMBER_USER, remember );
            this._localStorage.setItem(expireTimeKey, exp );
        }
        return true
            // console.log('Auth Successfull');
            // return true
        
        
    }
}