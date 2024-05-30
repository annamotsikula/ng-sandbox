import { AfterViewInit, Component, ElementRef, ViewChild, inject } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private _router = inject(Router)
  redirect() {
    console.log('redirect')
    this._router.navigate(['/home'])
  }


}
