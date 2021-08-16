import { Observable } from 'rxjs';

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
