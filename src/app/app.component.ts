import { Component } from '@angular/core';

interface Customer {
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  uninitializedProp: string;

  uninitializedObject: Customer;

  constructor() {
    let testVal: string;

    //  this just set 'undefined' to testVal
    testVal = this.uninitializedProp;

    console.log(testVal);

    //  This will blow up at runtime
    this.uninitializedObject.name = 'test name';
  }
}
