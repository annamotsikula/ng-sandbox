import { Component, inject } from '@angular/core';
import { StorageService } from '../../helpers/services/storage.service';
import { AUTH_TOKEN, REFRESH_TOKEN, REMEMBER_USER } from '../../helpers/contstants/contstants';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private _storage = inject(StorageService);
  private _router = inject(Router);
  private _activatedRoute = inject(ActivatedRoute);
  logout() {
    this._storage.removeItems([AUTH_TOKEN, REFRESH_TOKEN, REMEMBER_USER]);
    this._router.navigateByUrl('/')

  }
  goToCart() {
    console.log(this._activatedRoute)
    this._router.navigate(['/main/cart'], {relativeTo: this._activatedRoute})

  }
}
