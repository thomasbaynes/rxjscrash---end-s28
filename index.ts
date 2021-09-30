import { map, filter, Observable, Subscriber, of, EMPTY, Subject } from 'rxjs';

// const observable$ = new Observable<string>(subscriber => {
//   console.log('Observable Executed');
//   subscriber.next('Alice');
//   setTimeout(() => subscriber.next('Ben'), 2000);
//   setTimeout(() => subscriber.next('Charlie'), 4000);
// });

// const observer = {
//   next: value => console.log(value)
// }; // INSTEAD OF THIS <<< and below

// observable$.subscribe(observer);

//WE USE THIS IF ONLY USING NEXT.\/
// observable$.subscribe(value => console.log(value));

// const subscription = observable$.subscribe(value => console.log(value));

// //Example below unscubscribes before the third next val, charlie, can be logged to console.
// setTimeout(() => {
//   console.log('Unsub');
//   subscription.unsubscribe();
// }, 3000);

//Session 10
//Shows subscriptions are independant of each other and an observable can be subscribed to
//as many times needed.

// const observable$ = new Observable<string>(subscriber => {
//   console.log('Observable Executed');
//   subscriber.next('Alice');
//   setTimeout(() => subscriber.next('Ben'), 2000);
//   setTimeout(() => subscriber.next('Charlie'), 4000);
// });

// console.log('Subscription 1 Starts');
// observable$.subscribe(value => console.log('Subscription 1: ', value));

// setTimeout(() => {
//   console.log('Subscription 2 Starts');
//   observable$.subscribe(value => console.log('Subscription 2: ', value));
// }, 1000);

//SECTION 3 / Session 21

// const observable$ = new Observable(subscriber => {
//   console.log('Observable executed');
// });

// console.log('Before sub');
// observable$.subscribe();
// console.log('after sub');

//Session 22

// const observable$ = new Observable(subscriber => {
//   console.log('Observable executed');
//   subscriber.next('Alice');
// });

// console.log('Before sub');
// //so for each value emitted from the observer, it will console log the value.
// observable$.subscribe(value => console.log(value));
// console.log('after sub');

//Session 23
// const observable$ = new Observable(subscriber => {
//   console.log('Observable executed');
//   subscriber.next('Alice');
//   subscriber.next('Ben');
//   setTimeout(() => subscriber.next('Charlie'), 2000);
// });

// console.log('Before sub');
// //so for each value emitted from the observer, it will console log the value.
// observable$.subscribe(value => console.log(value));
// console.log('after sub');

//Session 24
// const observable$ = new Observable(subscriber => {
//   console.log('Observable executed');
//   subscriber.next('Alice');
//   subscriber.next('Ben');
//   setTimeout(() => {
//     subscriber.next('Charlie');
//     subscriber.complete();
//   }, 2000);

//   return () => {
//     console.log('Teardown');
//   };
// });

// console.log('Before sub');
// observable$.subscribe({
//   next: value => console.log(value),
//   complete: () => console.log('Completed')
// });

//Session 25 /Error Notification
// const observable$ = new Observable(subscriber => {
//   console.log('Observable executed');
//   subscriber.next('Alice');
//   subscriber.next('Ben');
//   setTimeout(() => {
//     subscriber.next('Charlie');
//   }, 2000);
//   setTimeout(() => subscriber.error(new Error('Failure')), 4000);

//   return () => {
//     console.log('Teardown');
//   };
// });

// console.log('Before sub');
// //This is a full observer. Next, Error, and complete.
// observable$.subscribe({
//   next: value => console.log(value),
//   error: err => console.log(err.message),
//   complete: () => console.log('Completed')
// });

//Session 27
// const observable$ = new Observable(subscriber => {
//   console.log('Observable executed');
//   subscriber.next('Alice');
//   subscriber.next('Ben');
//   setTimeout(() => subscriber.error(new Error('Failure')), 2000);
//   setTimeout(() => {
//     subscriber.next('Charlie');
//     subscriber.complete();
//   }, 4000);

//   return () => {
//     console.log('Teardown');
//   };
// });

// console.log('Before sub');
// //This is a full observer. Next, Error, and complete.
// observable$.subscribe({
//   next: value => console.log(value),
//   error: err => console.log(err.message),
//   complete: () => console.log('Completed')
// });

//Session 28 /Unsubscribing

// const interval$ = new Observable<number>(subscriber => {
//   let counter = 1;

//   const intervalId = setInterval(() => {
//     console.log('Emitted', counter);
//     subscriber.next(counter++);
//   }, 2000);

//   return () => {
//     clearInterval(intervalId);
//   };
// });

// const subscription = interval$.subscribe(value => console.log(value));

// setTimeout(() => {
//   console.log('Unsubscribe');
//   subscription.unsubscribe();
// }, 7000);

//Session 31 /Cold Observable

// import { ajax } from 'rxjs/ajax';

// const ajax$ = ajax<any>('https://random-data-api.com/api/name/random_name');

// ajax$.subscribe(data => console.log('Sub 1: ', data.response.first_name));
// ajax$.subscribe(data => console.log('Sub 2: ', data.response.first_name));
// ajax$.subscribe(data => console.log('Sub 3: ', data.response.first_name));

// Session 32 / Hot Observable
// const helloButton = document.querySelector('button#hello');

// const helloClick$ = new Observable<MouseEvent>(subscriber => {
//   helloButton.addEventListener('click', event => {
//     subscriber.next(event);
//   });
// });

// helloClick$.subscribe(event =>
//   console.log('Sub 1: ', event.type, event.x, event.y)
// );

// setTimeout(() => {
//   console.log('Sub 2 starts');
//   helloClick$.subscribe(event =>
//     console.log('Sub 2: ', event.type, event.x, event.y)
//   );
// }, 5000);

// Session 5/ Section 36
//OF function

// import { of } from 'rxjs';
// Same as using our own of. BUT EASY.
// of('Alice', 'Ben', 'Charlie').subscribe({
//   next: value => console.log(value),
//   complete: () => console.log('completed')
// });

// ourOwnOf('Alice', 'Ben', 'Charlie').subscribe({
//   next: value => console.log(value),
//   complete: () => console.log('completed')
// });

// // const names$ = new Observable<string>(subscriber => {
// //   subscriber.next('Alice');
// //   subscriber.next('Ben');
// //   subscriber.next('Charlie');
// //   subscriber.complete();
// // });

// // names$.subscribe({
// //   next: value => console.log(value),
// //   complete: () => console.log('completed')
// // });

// function ourOwnOf(...args: string[]): Observable<string> {
//   return new Observable<string>(subscriber => {
//     for (let i = 0; i < args.length; i++) {
//       subscriber.next(args[i]);
//     }
//     subscriber.complete();
//   });
// }

// Section 5/ Session 37

import { from } from 'rxjs';

// from(['Alice', 'Ben', 'Charlie']).subscribe({
//   next: value => console.log(value),
//   complete: () => console.log('Complete')
// });

// const somePromise = new Promise((resolve, reject) => {
//   // resolve('Resolved!');
//   reject('Rejected');
// });

// const observableFromPromise$ = from(somePromise);

// observableFromPromise$.subscribe({
//   next: value => console.log(value),
//   error: err => console.log('Error', err),
//   complete: () => console.log('Completed')
// });

//Section 5/ Session 38
//fromEvent

// const triggerButton = document.querySelector('button#trigger');

// const subscription = fromEvent<MouseEvent>(triggerButton, 'click').subscribe(
//   event => console.log(event.type, event.x, event.y)
// );

// const triggerClick$ = new Observable<MouseEvent>(subscriber => {
//   const clickHandlerFn = event => {
//     console.log('Event callback exected');
//     subscriber.next(event);
//   };
//   triggerButton.addEventListener('click', clickHandlerFn);

//   return () => {
//     triggerButton.removeEventListener('click', clickHandlerFn);
//   };
// });

// const subscription = triggerClick$.subscribe(event =>
//   console.log(event.type, event.x, event.y)
// );

// setTimeout(() => {
//   console.log('Unsubscribe');
//   subscription.unsubscribe();
// }, 5000);

//Section 5/ Session 39
//Timer creation function

// import { timer } from 'rxjs';

// console.log('App Started');

// const timer$ = new Observable<number>(subscriber => {
//   const timeoutId = setTimeout(() => {
//     console.log('timeout');
//     subscriber.next(0);
//     subscriber.complete();
//   }, 2000);

//   return () => clearTimeout(timeoutId);
// });

// const subscription = timer$.subscribe({
//   next: value => console.log(value),
//   complete: () => console.log('Completed!')
// });

// setTimeout(() => {
//   subscription.unsubscribe();
//   console.log('unsub');
// }, 1000);

//Session 5/ Session 40
//interval

// import { timer, interval } from 'rxjs';

// console.log('App started');

// const interval$ = new Observable<number>(subscriber => {
//   let counter = 0;

//   const intervalId = setInterval(() => {
//     console.log('Timeout!');
//     subscriber.next(counter++);
//   }, 1000);

//   return () => clearTimeout(intervalId);
// });

// const subscription = interval(1000).subscribe({
//   next: value => console.log(value),
//   complete: () => console.log('Completed')
// });

// setTimeout(() => {
//   subscription.unsubscribe();
//   console.log('Unsubscribe');
// }, 5000);

//Session 5 // Session 41
//forkJoin

// import { ajax, AjaxResponse } from 'rxjs/ajax';

// import { forkJoin } from 'rxjs';

// const randomName$ = ajax('https://random-data-api.com/api/name/random_name');

// const randomNation$ = ajax(
//   'https://random-data-api.com/api/nation/random_nation'
// );

// const randomFood$ = ajax('https://random-data-api.com/api/food/random_food');

// randomName$.subscribe(ajaxResponse =>
//   console.log(ajaxResponse.response.first_name)
// );

// randomNation$.subscribe(ajaxResponse =>
//   console.log(ajaxResponse.response.capital)
// );

// randomFood$.subscribe(ajaxResponse => console.log(ajaxResponse.response.dish));

// forkJoin([randomName$, randomNation$, randomFood$]).subscribe(
//   ([nameAjax, nationAjax, foodAjax]) =>
//     console.log(
//       `${nameAjax.response.first_name} is from ${
//         nationAjax.response.capital
//       } and likes to eat ${foodAjax.response.dish}`
//     )
// );

//Section 5/ Session 42/
//forkJoin Error Scenario

import { ajax, AjaxResponse } from 'rxjs/ajax';

// import { forkJoin } from 'rxjs';

// const a$ = new Observable(subscriber => {
//   setTimeout(() => {
//     subscriber.next('A');
//     subscriber.complete();
//   }, 5000);

//   return () => {
//     console.log('a teardown');
//   };
// });

// const b$ = new Observable(subscriber => {
//   setTimeout(() => {
//     subscriber.error('Failure!');
//   }, 3000);

//   return () => {
//     console.log('b teardown');
//   };
// });

// forkJoin([a$, b$]).subscribe({
//   next: value => console.log(value),
//   error: err => console.log('Error:', err)
// });

//Section 5 // Session 43/
//combineLatest
import { fromEvent, combineLatest } from 'rxjs';
import { catchError, concatMap, debounceTime, tap } from 'rxjs/operators';

// const temperatureInput = document.getElementById('temperature-input');
// const conversionDropdown = document.getElementById('conversion-dropdown');
// const resultText = document.getElementById('result-text');

// const temperatureInputEvent$ = fromEvent(temperatureInput, 'input');
// const conversionInputEvent$ = fromEvent(conversionDropdown, 'input');

// combineLatest([temperatureInputEvent$, conversionInputEvent$]).subscribe(
//   ([temperatureInputEvent, conversionInputEvent]) => {
//     const temperature = Number(temperatureInputEvent.target['value']);
//     const conversion = conversionInputEvent.target['value'];

//     let result: number;
//     if (conversion === 'f-to-c') {
//       result = ((temperature - 32) * 5) / 9;
//     } else if (conversion === 'c-to-f') {
//       result = (temperature * 9) / 5 + 32;
//     }

//     resultText.innerText = String(result);

//     // console.log(
//     //   temperatureInputEvent.target['value'],
//     //   conversionInputEvent.target['value']
//     // );
//   }
// );

//Section 6
// Session 47
//Filter Operator

// interface NewsItem {
//   category: 'Business' | 'Sports';
//   content: string;
// }

// const newsFeed$ = new Observable<NewsItem>(subscriber => {
//   setTimeout(
//     () => subscriber.next({ category: 'Business', content: 'A' }),
//     1000
//   );
//   setTimeout(() => subscriber.next({ category: 'Sports', content: 'B' }), 3000);
//   setTimeout(
//     () => subscriber.next({ category: 'Business', content: 'C' }),
//     4000
//   );
//   setTimeout(() => subscriber.next({ category: 'Sports', content: 'D' }), 6000);
//   setTimeout(
//     () => subscriber.next({ category: 'Business', content: 'E' }),
//     7000
//   );
// });

// const sportsNewsFeed$ = newsFeed$.pipe(
//   filter(item => item.category === 'Sports')
// );

// //can subscribe to sportsNewsFeed$ to go through the neews feed with only sports because filtered.
// newsFeed$.subscribe(item => console.log(item));

//Section 6 // Session 48
//Map Operator

// import { forkJoin } from 'rxjs';

// // Mike is from New Delhi and likes to eat pasta.

// const randomFirstName$ = ajax<any>(
//   'https://random-data-api.com/api/name/random_name'
// ).pipe(map(ajaxResponse => ajaxResponse.response.first_name));

// const randomCapital$ = ajax<any>(
//   'https://random-data-api.com/api/nation/random_nation'
// ).pipe(map(ajaxResponse => ajaxResponse.response.capital));

// const randomDish$ = ajax<any>(
//   'https://random-data-api.com/api/food/random_food'
// ).pipe(map(ajaxResponse => ajaxResponse.response.dish));

// // randomName$.subscribe(value => console.log(value));
// // randomNation$.subscribe(value => console.log(value));
// // randomFood$.subscribe(value => console.log(value));

// forkJoin([randomFirstName$, randomCapital$, randomDish$]).subscribe(
//   ([firstName, capital, dish]) =>
//     console.log(`${firstName} is from ${capital} and likes to eat ${dish}.`)
// );

//Section 6
//Session 49
//Tap Operator

// of(1, 7, 3, 6, 2)
//   .pipe(
//     filter(value => value > 5),
//     map(value => value * 2),
//     tap(value => console.log('Spy: ', value))
//   )
//   .subscribe(value => console.log('Output: ', value));

//Section 6
//Session 50
//DebounceTime Operator

// const sliderInput = document.querySelector('input#slider');

// fromEvent(sliderInput, 'input')
//   .pipe(
//     debounceTime(500),
//     map(event => event.target['value'])
//   )
//   .subscribe(value => console.log(value));

//Section 6
//Session 51
//catchError Operator

// const failingHttpRequest$ = new Observable(subscriber => {
//   setTimeout(() => {
//     subscriber.error(new Error('Timeout: '));
//   }, 3000);
// });

// console.log('App started');

// //Without using EMPTY
// // failingHttpRequest$
// //   .pipe(catchError(error => of('Fallback value')))
// //   .subscribe(value => console.log(value));

// //Example using EMPTY
// failingHttpRequest$.pipe(catchError(error => EMPTY)).subscribe({
//   next: value => console.log(value),
//   complete: () => console.log('Completed')
// });

//Section 6
//Session 53
//Flattening Operators - Static example

// const source$ = new Observable(subscriber => {
//   setTimeout(() => subscriber.next('A'), 2000);
//   setTimeout(() => subscriber.next('B'), 5000);
// });

// console.log('App has started');
// source$.pipe(
//   concatMap(value => of(1, 2))
// ).subscribe(value => console.log(value));

//Section 6
///Session 54
//Flattening Operators - Dynamic HTTP Request

// const endpointInput: HTMLInputElement = document.querySelector(
//   'input#endpoint'
// );
// const fetchButton = document.querySelector('button#fetch');

// fromEvent(fetchButton, 'click')
//   .pipe(
//     map(() => endpointInput.value),
//     concatMap(value =>
//       ajax(`https://random-data-api.com/api/${value}/random_${value}`)
//     )
//   )
//   .subscribe(value => console.log(value));

//Session 55
//Flattening Operators - Error Handling - First Solution

// const endpointInput: HTMLInputElement = document.querySelector(
//   'input#endpoint'
// );
// const fetchButton = document.querySelector('button#fetch');

// fromEvent(fetchButton, 'click')
//   .pipe(
//     map(() => endpointInput.value),
//     concatMap(value =>
//       ajax(`https://random-data-api.com/api/${value}/random_${value}`)
//     ),
//     catchError(() => EMPTY)
//   ).subscribe({
//     next: value => console.log(value),
//     error: err => console.log('Error: ', err),
//     complete: () => console.log('Completed')
//   });

//Session 56
//Flattening Operators - Error Handling - Second Solution

// const endpointInput: HTMLInputElement = document.querySelector(
//   'input#endpoint'
// );
// const fetchButton = document.querySelector('button#fetch');

// fromEvent(fetchButton, 'click')
//   .pipe(
//     map(() => endpointInput.value),
//     concatMap(value =>
//       ajax(`https://random-data-api.com/api/${value}/random_${value}`).pipe(
//         catchError(error => of(`Could not fetch data:  ${error}`))
//       )
//     )
//   )
//   .subscribe({
//     next: value => console.log(value),
//     error: err => console.log('Error: ', err),
//     complete: () => console.log('Completed')
//   });

//Session 57
//Flattening Operators - Concurrency - concatMap

// const endpointInput: HTMLInputElement = document.querySelector(
//   'input#endpoint'
// );
// const fetchButton = document.querySelector('button#fetch');

// fromEvent(fetchButton, 'click')
//   .pipe(
//     map(() => endpointInput.value),
//     concatMap(value =>
//       ajax(`https://random-data-api.com/api/${value}/random_${value}`).pipe(
//         catchError(error => of(`Could not fetch data:  ${error}`))
//       )
//     )
//   )
//   .subscribe({
//     next: value => console.log(value),
//     error: err => console.log('Error: ', err),
//     complete: () => console.log('Completed')
//   });

//SECTION 7
//Session 67

const emitButton = document.querySelector('button#emit');
const inputElement: HTMLInputElement = document.querySelector('#value-input');
const subscribeButton = document.querySelector('button#subscribe');

const value$ = new Subject<string>();

fromEvent(emitButton, 'click')
  .pipe(map(() => inputElement.value))
  .subscribe(value$);

fromEvent(subscribeButton, 'click').subscribe(() => {
  console.log('New Subscription');
  value$.subscribe((value) => console.log(value));
});
