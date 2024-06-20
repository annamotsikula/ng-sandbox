import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

export interface Options {
    duration?: number,
    displayCloseBtn?: boolean
}

export interface ClassOption extends Options {
    className: 'success' | 'fail'

}
@Injectable({
    providedIn:'root'
})
export class NotificationService {
    private _message: Subject<{title: string, options?: ClassOption}> = new Subject();
    private showNotification: BehaviorSubject<any> = new BehaviorSubject(null);

    display$ = this.showNotification.asObservable();
    content$ = this._message.asObservable();

    private show(message: string, options: ClassOption) {
        this.showNotification.next(true);
        const settings: ClassOption = {
            duration: options?.duration ? options.duration : 2000,
            displayCloseBtn: options?.displayCloseBtn,
            className: options?.className
        }
        this._message.next({title: message, options: settings});
    }

    hide() {
        this.showNotification.next(false)

    }

    success(message: string, options?: Options) {
        this.show(message, {...options, className: 'success'})
    }

    fail(message: string, options?: Options) {
        this.show(message, {...options, className: 'fail'})
    }


}