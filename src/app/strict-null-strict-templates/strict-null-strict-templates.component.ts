import { Component } from '@angular/core';

//  https://angular.io/guide/event-binding-concepts
//  https://github.com/angular/angular/issues/35958

@Component({
  selector: 'app-strict-null-strict-templates',
  template: `
    <input (input)="onInput($event.target)" />

    <input #myInput (input)="onMyInput(myInput.value)" />
  `,
  styles: [],
})
export class StrictNullStrictTemplatesComponent {
  constructor() {}

  onInput(target: EventTarget | null): void {
    if (target instanceof HTMLInputElement) {
      console.log('Do work! ', target.value);
    }
  }

  onMyInput(inputValue: string): void {
    console.log('Do work! ', inputValue);
  }
}
