import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-mylib',
  template: `
    <p>
      mylib works!
    </p>
    <ng-content select="myselector"></ng-content>
    `,
  styles: []
})
export class MylibComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
