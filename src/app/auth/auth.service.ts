import { Inject, Injectable, inject } from "@angular/core";
import { Auth } from "../helpers/interfaces/auth.interface";
import { StorageService } from "../helpers/services/storage.service";
import { AUTH_TOKEN, BASE_URL, REFRESH_TOKEN, REMEMBER_USER } from "../helpers/contstants/contstants";
import { HttpClient } from "@angular/common/http";
import { Observable, debounceTime, delay, map, tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private _localStorage = inject(StorageService);
    private _http = inject(HttpClient);
    constructor(@Inject(BASE_URL) private _apiUrl: string) { }
    logIn(data: Auth) {
        const remember = data.rememberUser
        if(remember) {
            this._localStorage.setItem(REMEMBER_USER, remember );
        }
        const body = { username: data.email, password: data.password, expiresInMins: 1 };
        return this._http.post<any>(`${this._apiUrl}/auth/login`, body).pipe(
            map(({ token, refreshToken }) => ({ token, refreshToken })),
            tap(result => {
                this._localStorage.setItem(AUTH_TOKEN, result.token);
                this._localStorage.setItem(REFRESH_TOKEN, result.refreshToken);
            })
        )
    }

    // getAuthUser() {
    //     return this._http.get<any>(`${this._apiUrl}/auth/http/401`).pipe(
    //         delay(60000)
    //     )
    // }

    getRefreshToken(): Observable<string> {
        const refreshToken = this._localStorage.getItem(REFRESH_TOKEN)
        return this._http.post<{token: string, refreshToken: string}>(`${this._apiUrl}/auth/refresh`, {
            refreshToken,
        }).pipe(
            tap(result => {
                this._localStorage.setItem(AUTH_TOKEN, result.token);
                this._localStorage.setItem(REFRESH_TOKEN, result.refreshToken);
            }),
            map(tokens => tokens.token)
        )
    }

}