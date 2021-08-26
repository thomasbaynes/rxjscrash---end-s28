import { Observable, Subscriber } from 'rxjs';

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

import { of } from 'rxjs';
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

import { fromEvent } from 'rxjs';

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

import { ajax, AjaxResponse } from 'rxjs/ajax';

import { forkJoin } from 'rxjs';

const randomName$ = ajax('https://random-data-api.com/api/name/random_name');

const randomNation$ = ajax(
  'https://random-data-api.com/api/nation/random_nation'
);

const randomFood$ = ajax('https://random-data-api.com/api/food/random_food');

randomName$.subscribe(ajaxResponse =>
  console.log(ajaxResponse.response.first_name)
);

randomNation$.subscribe(ajaxResponse =>
  console.log(ajaxResponse.response.capital)
);

randomFood$.subscribe(ajaxResponse => console.log(ajaxResponse.response.dish));

forkJoin([randomName$, randomNation$, randomFood$]).subscribe(
  ([nameAjax, nationAjax, foodAjax]) =>
    console.log(
      `${nameAjax.response.first_name} is from ${
        nationAjax.response.capital
      } and likes to eat ${foodAjax.response.dish}`
    )
);
