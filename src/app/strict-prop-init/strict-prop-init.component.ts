import { Component } from '@angular/core';

interface Customer {
  name: string;
}

@Component({
  selector: 'app-strict-prop-init',
  template: ` <p>strict-prop-init works!</p> `,
  styles: [],
})
export class StrictPropInitComponent {
  //  Uncomment below to see strictPropertyInitialization in action
  /*
  uninitializedProp: string;

  uninitializedObject: Customer;

  emptyFormGroup = new FormGroup({});

  constructor() {
    let testVal: string;

    //  this just set 'undefined' to testVal
    testVal = this.uninitializedProp;

    console.log(testVal);

    //  This will blow up at runtime
    this.uninitializedObject.name = 'test name';

    // tslint:disable-next-line: no-non-null-assertion
    const val = this.emptyFormGroup.get('userName')!.value;
    */
}
