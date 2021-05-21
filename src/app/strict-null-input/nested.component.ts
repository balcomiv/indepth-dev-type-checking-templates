import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nested',
  template: `
    Cached Input Values:
    {{ cachedInputValues | json }}
  `,
  styles: [':host { display: block; margin-top: 20px; }'],
})
export class NestedComponent {
  @Input() set testValueString(value: string) {
    this.cachedInputValues.push(value);
  }

  @Input() set testValueBoolean(value: boolean | null) {
    this.cachedInputValues.push(value);
  }

  @Input() set testValueStringOrNull(value: string | null) {
    this.cachedInputValues.push(value);
  }

  cachedInputValues: (string | boolean | null)[] = [];
}
