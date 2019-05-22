import { Component } from '@angular/core';

@Component({
  selector: 'username',
  templateUrl: './username.component.html'
})
export class UsernameComponent {
  username = '';

  onClearUsername() {
    this.username = '';
  }
}
