import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PaginationService {
    private currentPageSource: BehaviorSubject<number> = new BehaviorSubject(1);
    currentPage$ = this.currentPageSource.asObservable();

    private totalPageSource: BehaviorSubject<number> = new BehaviorSubject(0);
    totalPages$ = this.totalPageSource.asObservable();

    setCurrentPage(page: number) {
        this.currentPageSource.next(page);
    }

    setAllPages(pages: number) {
        this.totalPageSource.next(pages);
    }

}