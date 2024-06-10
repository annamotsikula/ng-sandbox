import { InjectionToken } from "@angular/core";

export const REMEMBER_USER = 'saveUser';
export const expireTime = '100000'
export const expireTimeKey = 'exp'

export const BASE_URL = new InjectionToken<string>('baseApiURL')

