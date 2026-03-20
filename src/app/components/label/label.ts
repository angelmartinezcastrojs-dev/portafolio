import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-label',
  imports: [],
  templateUrl: './label.html',
})
export class Label {
  @Input() text: string = '';
  @Input() image: string = '';
}
