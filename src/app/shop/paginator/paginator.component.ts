import { Component, inject } from '@angular/core';
import { PaginationService } from '../../helpers/services/pagination.service';
import { combineLatest, map, tap } from 'rxjs';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss'
})
export class PaginatorComponent {
  service = inject(PaginationService);

  totalPages: number[] = [];
  currentPage!: number

  constructor() {
    combineLatest([this.service.currentPage$, this.service.totalPages$]).pipe(
      map(([curr, total]) => ([curr, Array.from({ length: total })])),
      tap(([curr, total]) => { this.currentPage = curr as number; this.totalPages = total as number[] })
    ).subscribe()
  }
  setCurrPage(page: number) {
    this.service.setCurrentPage(page)
  }

  setStep(step: 'inc' | 'dec') {
    step === 'inc'
      ? this.currentPage === this.totalPages.length
        ? null : this.setCurrPage(this.currentPage + 1)
      : this.currentPage === 1 ? null : this.setCurrPage(this.currentPage - 1)


  }

}
