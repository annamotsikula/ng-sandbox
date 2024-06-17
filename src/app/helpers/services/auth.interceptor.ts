import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable, catchError, filter, of, switchMap, take, tap, throwError } from "rxjs";
import { StorageService } from "./storage.service";
import { AUTH_TOKEN } from "../contstants/contstants";
import { AuthService } from "../../auth/auth.service";

@Injectable({
    providedIn: 'root'
})
export class RequestInterceptor implements HttpInterceptor {
    private _localStorage = inject(StorageService);
    private _auth = inject(AuthService);


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(this._localStorage.itemExist(AUTH_TOKEN)) {
            const token = JSON.parse(this._localStorage.getItem(AUTH_TOKEN));
            req = req.clone({
                setHeaders: {
                    Authorization : `Bearer ${token}`
                }
            });
        }
        return next.handle(req).pipe(
            catchError((err: HttpErrorResponse) => {
                if(err.status === 401) {
                        return this.handleUnAuth();

                }
                

                return throwError(() => err)
            }),
        );
    }

    
    private handleUnAuth(): Observable<any> {
        return this._auth.getRefreshToken()

    }
}