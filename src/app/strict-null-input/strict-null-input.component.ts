import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-strict-null-input',
  template: `
    <!-- Null Assertion (lying to compiler) -->
    <app-nested [testValueString]="(inputOne$ | async)!"></app-nested>

    <!-- $any() cast (lying to compiler) -->
    <app-nested [testValueString]="$any(inputTwo$ | async)"></app-nested>

    <!-- Can coerce boolean values -->
    <app-nested [testValueBoolean]="!!(inputThree$ | async)"></app-nested>

    <!-- No need to lie to compiler if input type | null -->
    <app-nested [testValueStringOrNull]="inputFour$ | async"></app-nested>
  `,
  styles: [],
})
export class StrictNullInputComponent {
  inputOne$ = new BehaviorSubject('firstValue').pipe(delay(750));
  inputTwo$ = new BehaviorSubject('inputTwo').pipe(delay(750));
  inputThree$ = new BehaviorSubject(true).pipe(delay(750));
  inputFour$ = new BehaviorSubject('inputFour').pipe(delay(750));

  constructor() {}
}
