import { Component } from "@angular/core";
import { catchError, concat, debounceTime, delay, filter, first, forkJoin, from, fromEvent, iif, interval, last, map, merge, of, switchMap, take, tap, throwError } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  buttonClicked = false

  constructor() {
    // this.getData().pipe(
    //   first(),
    //   tap(res => console.log('Initial Data', res)),
    //   map(data => data.map(i => i*10)),
    //   tap(res => console.log('Mapped value:', res))
    // ).subscribe()

    // const clicks = fromEvent<PointerEvent>(document, 'click');
    // const positions = clicks.pipe(map(ev => ev.clientX));

    // positions.subscribe(x => console.log(x));

    // interval(1000).pipe(
    //   tap(console.log),
    //   filter(res => res > 3),
    //   tap(d => console.log('Data jumped over filter, ', d))
    // ).subscribe()

    // from([2,3,4,5,6,7]).subscribe(console.log);

    const obs1 = of({ subject: 'RxJS', version: '7.8'}).pipe(
      // delay(3000) -> after 3s it will start to subscribe
    )
    const obs2 = of([1,2,3,4,5,6]);
    const obs3 = from([{a: 12, b: '12'}, {a: 13, b: '13'}]).pipe(
      // debounceTime(3000) -> after 3s it will wait for new observable sources
    )
// DO NOT TRY THIS AT HOME
    obs1.subscribe(() => {
      obs2.subscribe(() => {
        obs3.subscribe()
      })
    })
    // forkJoin([obs1,obs2,obs3]).subscribe(result => console.log(result))
    // merge(obs1,obs2,obs3).subscribe(result => console.log(result))

    // concat(obs1,obs2).subscribe(console.log)

    // obs1.pipe(
    //   switchMap(data => this.getVersionData(data.version))
    // ).subscribe(console.log)

    // of(this.createFakeError()).pipe(
    //   catchError(err => throwError(err)),
    //   tap(console.log)
    // ).subscribe(result => {
    //   console.log(result)
    // })

    // of(1,2,3,4567,8765,3,56,3,4,2,6,7,4,23,4).pipe(
    //   // take(3)
    //   last()
    // ).subscribe(console.log);



  }

  getVersionData(v: string) {
    if(v <= '7') {
      return of('OLD VERSION. NEED TO UPATE')
    } 

    return of("NO UPDATE NEEDED")

  }

  // createFakeError() {
  //   return new Error('Error occured')
  // }

  getData() {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const anotherData = [1234,35,23,23,326,8,4,3]
    return of(data, anotherData)
  }

  clicked() {
    this.buttonClicked = !this.buttonClicked;
    iif(
      () => this.buttonClicked,
      of('True Value'),
      of('False value')
    ).pipe(
      tap(console.log)
    ).subscribe()
  }


}
