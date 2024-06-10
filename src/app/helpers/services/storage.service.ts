import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class StorageService {
    private _storage = localStorage

    getItem(key: string) {
        return JSON.parse(JSON.stringify(this._storage.getItem(key)))
    }

    setItem(key: string, value: string|number|Object) {
        const strVal = JSON.stringify(value)
        this._storage.setItem(key, strVal)

    }

    itemExist(key: string): boolean {
        return !!this.getItem(key)
    }


}