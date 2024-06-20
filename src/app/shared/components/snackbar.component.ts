import { Component, inject } from "@angular/core";
import { ClassOption, NotificationService, Options } from "../../helpers/services/notification.service";

@Component({
    selector: 'app-snackbar',
    template: `<div class="notification-box" [ngClass]="content.options.className" *ngIf="display$ | async">
                    <span class="message">{{content.title}}</span>
                    <button class="btn close" (click)="destroy()" *ngIf="content.displayCloseBtn"><i class="bi bi-x-lg"></i></button>
                </div>`,
    styles: [
        `.notification-box {
            &.fail {
                background-color: red;
            }
            &.success {
                background-color: green
            }
            position: fixed;
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            height: 70px;
            padding: 5px 20%;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
            .message {
                color: white;
                font-weight: 800
            }
            .close {
                background-color: #9b0c0c;
                border-radius: 5px;
                color: white;
            }
                
        }`
    ]
})
export class SnackBarComponent {

    private _notification = inject(NotificationService);

    display$ = this._notification.display$;

    content!: any

    destroy() {
        this._notification.hide();
    }

    constructor() {
        this._notification.content$.subscribe(data => {
            this.content = data;
            setTimeout(() => {
               this.destroy();
            }, data.options?.duration)
        })
    }



}