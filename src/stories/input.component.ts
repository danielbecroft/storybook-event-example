import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'storybook-input',
  template: `  <div>Input text should be change to 'This is text - focus event' when focus event is fired.</div>
  <div>Input text should be change to 'This is example text - blur event' when blur event is fired.</div>
  <br>
  <input type="text" class="form-control" placeholder="Name" aria-label="Name" [value]="text" (focus)="onFocus()" (blur)="onBlur()">`,
})
export default class InputComponent {
  text = 'This is example text';

  onFocus() {
    console.log('on focus...');
    this.text = 'This is text - focus event';
  }

  onBlur() {
    console.log('on blur...');
    this.text = 'This is example text - blur event';
  }
}
