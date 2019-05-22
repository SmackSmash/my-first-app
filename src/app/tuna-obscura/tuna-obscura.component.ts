import { Component } from '@angular/core';

@Component({
  selector: 'tuna-obscura',
  templateUrl: './tuna-obscura.component.html',
  styleUrls: ['./tuna-obscura.component.css']
})
export class TunaObscuraComponent {
  showParagraph = true;
  log = [];

  onToggleParagraph() {
    this.showParagraph = !this.showParagraph;
    this.log.push(new Date());
  }
}
