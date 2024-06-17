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
    deleteItem(key: string) {
        if(!this.itemExist(key)) return;
        this._storage.removeItem(key)
    }

    itemExist(key: string): boolean {
        return !!this.getItem(key)
    }

    removeItems(keys: string[]) {
        keys.forEach(key => this.deleteItem(key));
    }


}