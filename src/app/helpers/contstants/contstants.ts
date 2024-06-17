import { InjectionToken } from "@angular/core";

export const REMEMBER_USER = 'saveUser';
export const AUTH_TOKEN = 'Authorization';
export const REFRESH_TOKEN = 'refresh';


export const BASE_URL = new InjectionToken<string>('baseApiURL')

